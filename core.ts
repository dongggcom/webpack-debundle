/**
 * Read webpack bundle file and analyze it, then output the scatter files.
 */
import fse from 'fs-extra';
import fs from 'fs';
import path from 'path';
import * as parser from '@babel/parser';
import * as types from '@babel/types';
import generate from '@babel/generator';

enum ErrorMsg {
    NO_BUNDLE_FILE = 'No bundle file found.',
    ONLY_ONE_BUNDLE_FILE = 'Only one bundle file is allowed.',
    NOT_EXPECT_BUNDLE_FILE = 'Not the expected bundle.',
}

enum DevTool {
    NONE = 'none',
    EVAL = 'eval',
    SOURCE_MAP = 'source-map',
}

enum WebpackVersion {
    V4 = '4',
    V5 = '5',
    NEXT = 'next',
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
    content: string;
    modules?: any[][] = [[]]

    constructor(params: Params) {
        this.input = path.resolve(params.input);
        this.output = path.resolve(params.output || './output');

        if (!fse.existsSync(this.input)) {
            throw Error(ErrorMsg.NO_BUNDLE_FILE);
        }
        this.content = fs.readFileSync(this.input, 'utf-8');
    }

    analysis() {
        const ast = parser.parse(this.content, {
            sourceType: 'module'
        });
        this.modules = this.identify(ast);

        return this;
    }

    identify(ast: parser.ParseResult<types.File>, devTool?: DevTool, webpackVersion?: WebpackVersion) {
        const body = ast.program.body;
        if (body.length !== 1) {
            throw Error(ErrorMsg.ONLY_ONE_BUNDLE_FILE);
        }
        try {
            const expressionStatement = body[0];
            if (
                expressionStatement.type === 'ExpressionStatement'
                && expressionStatement.expression.type === 'CallExpression'
                && expressionStatement.expression.callee.type === 'ArrowFunctionExpression'
                && expressionStatement.expression.callee.body.type === 'BlockStatement'
                && expressionStatement.expression.callee.body.body[0].type === 'VariableDeclaration'
                && expressionStatement.expression.callee.body.body[0].declarations[0].id.type === 'Identifier'
                && expressionStatement.expression.callee.body.body[0].declarations[0].id.name === '__webpack_modules__'
                && expressionStatement.expression.callee.body.body[0].declarations[0].init?.type === 'ObjectExpression'
            ) {
                const properties = expressionStatement.expression.callee.body.body[0].declarations[0].init.properties;
                const moduleEntries = properties.map(property => {
                    if (property.type === 'ObjectProperty' && property.key.type === 'StringLiteral') {
                        const path = property.key.value;
                        const rawContent = generate(property.value).code;
                        return [path, rawContent]
                    }
                    return [];
                })
                return moduleEntries;
            }
        } catch (e) {
            throw Error(ErrorMsg.NOT_EXPECT_BUNDLE_FILE);
        }
    }

    outputFiles() {
        this.modules?.forEach(module => {
            const [p, content] = module;
            const filepath = path.resolve(this.output, p);
            fse.outputFileSync(filepath, content);
        })
    }
}

export default (params: Params) => new Debundle(params).analysis().outputFiles();