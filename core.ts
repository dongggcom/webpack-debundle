/**
 * Read webpack bundle file and analyze it, then output the scatter files.
 */
import fse from 'fs-extra';
import fs from 'fs';
import path from 'path';
import * as parser from '@babel/parser';
import * as types from '@babel/types';
import glob from 'glob';
import {DevTool, WebpackVersion, getModuleEntries} from './ast';

enum ErrorMsg {
    NO_BUNDLE_FILE = 'No bundle file found.',
    ONLY_ONE_BUNDLE_FILE = 'Only one bundle file is allowed.',
    NOT_EXPECT_BUNDLE_FILE = 'Not the expected bundle.',
}

interface Params {
    input: string;
    output?: string;
    devTool?: DevTool;
    webpackVersion?: WebpackVersion;
}

class Debundle {
    input: string;
    output: string;
    content?: string | Array<Record<string, Promise<string>>>;
    modules: Array<[string, string]> | Promise<Array<[string, string]>[]> = []
    devTool?: DevTool;
    webpackVersion?: WebpackVersion;

    constructor(params: Params) {
        this.input = path.resolve(params.input);
        this.output = path.resolve(params.output || './output');
        this.devTool = params.devTool;
        this.webpackVersion = params.webpackVersion;

        if (!fse.existsSync(this.input)) {
            throw Error(ErrorMsg.NO_BUNDLE_FILE);
        }
        const stats = fs.statSync(this.input);
        if (stats.isFile()) {
            this.content = fs.readFileSync(this.input, 'utf-8');
        } else if (stats.isDirectory()) {
            this.content = this.traverse(`${this.input}/**/*.js`).map(file => ({
                [file]: new Promise((resolve, reject) => fs.readFile(file, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data.toString());
                }))
            }));
        }
    }

    traverse(path: string) {
        return glob.sync(path, {
            ignore: ['.DS_Store'],
        });
    }

    analysis() {
        if (typeof this.content === 'string') {
            const ast = parser.parse(this.content, {
                sourceType: 'module'
            });
            this.modules = this.identify(ast);
        } else if (this.content && this.content.length) {
            this.modules = Promise.all(this.content.map(async (file: Record<string, Promise<string>>) => {
                const [_, content] = Object.entries(file)[0];
                const ast = parser.parse(await content, {
                    sourceType: 'module'
                });
                return this.identify(ast);
            }));
        }
        return this;
    }

    identify(ast: parser.ParseResult<types.File>) {
        const body = ast.program.body;
        if (body.length !== 1) {
            throw Error(ErrorMsg.ONLY_ONE_BUNDLE_FILE);
        }
        try {
            return getModuleEntries(ast, this.devTool, this.webpackVersion);
        } catch (e) {
            throw Error(ErrorMsg.NOT_EXPECT_BUNDLE_FILE);
        }
    }

    outputFiles() {
        if (this.modules instanceof Promise) {
            const packages = this.modules;
            packages.then(packageModule => packageModule.forEach(async (modules, index) => {
                modules.forEach(module => {
                    const [file, content] = module;
                    const filePath = path.resolve(this.output, file);
                    fse.ensureFileSync(filePath);
                    fse.writeFileSync(filePath, content);
                });
            }));
        } else {
            this.modules?.forEach(module => {
                const [file, content] = module;
                const filepath = path.resolve(this.output, file);
                fse.outputFileSync(filepath, content);
            })
        }
    }
}

export default (params: Params) => new Debundle(params).analysis().outputFiles();