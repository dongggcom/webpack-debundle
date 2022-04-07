import * as parser from '@babel/parser';
import * as types from '@babel/types';
import generate from '@babel/generator';

export type DevTool = 'none' | 'source-map' | '';

export type WebpackVersion = '4' | '5' | '';

// ${devTool}-webpack-${webpackVersion}
const parserAst = {
    'source-map-webpack-5': (ast: parser.ParseResult<types.File>) => {
        const body = ast.program.body;
        const expressionStatement = body[0];
    
        if (
            expressionStatement.type === 'ExpressionStatement'
            && expressionStatement.expression.type === 'CallExpression'
            && (
                expressionStatement.expression.callee.type === 'ArrowFunctionExpression'
                || expressionStatement.expression.callee.type === 'FunctionExpression'
            )
            && expressionStatement.expression.arguments 
            && expressionStatement.expression.arguments.length > 1
            && expressionStatement.expression.arguments[1].type === 'FunctionExpression'
            && expressionStatement.expression.arguments[1].body.type === 'BlockStatement'
            && expressionStatement.expression.arguments[1].body.body.length > 0
            && expressionStatement.expression.arguments[1].body.body[0].type === 'ReturnStatement'
            && expressionStatement.expression.arguments[1].body.body[0].argument?.type === 'CallExpression'
            && expressionStatement.expression.arguments[1].body.body[0].argument?.callee.type === 'ArrowFunctionExpression'
            && expressionStatement.expression.arguments[1].body.body[0].argument?.callee.body.type === 'BlockStatement'
        ) {
            const syntaxes = expressionStatement.expression.arguments[1].body.body[0].argument.callee.body.body;
            if (syntaxes.length === 0) {
                return [];
            }
            const moduleEntries: Array<[string, string]> = [];
            syntaxes.forEach(syntax => {
                if (
                    syntax.type === 'VariableDeclaration'
                    && syntax.declarations.length > 0
                    && syntax.declarations[0].type === 'VariableDeclarator'
                    && syntax.declarations[0].init?.type === 'ObjectExpression'
                ) {
                    const properties = syntax.declarations[0].init.properties;
                    properties.forEach(property => {
                        if (property.type === 'ObjectProperty' && property.key.type === 'StringLiteral') {
                            const path = property.key.value;
                            const rawContent = generate(property.value).code;
                            moduleEntries.push([path, rawContent]);
                        }
                        return [];
                    })
                }
            })
            return moduleEntries;
        }
        throw Error('');
    },
    'unknown': (ast: parser.ParseResult<types.File>) => {
        const body = ast.program.body;
        const expressionStatement = body[0];
        if (
            expressionStatement.type === 'ExpressionStatement'
            && expressionStatement.expression.type === 'CallExpression'
            && (
                expressionStatement.expression.callee.type === 'ArrowFunctionExpression'
                || expressionStatement.expression.callee.type === 'FunctionExpression'
            )
            && expressionStatement.expression.callee.body.type === 'BlockStatement'
            && expressionStatement.expression.callee.body.body.length > 0
        ) {
            const syntaxes = expressionStatement.expression.callee.body.body;
            if (syntaxes.length === 0) {
                return [];
            }
            const moduleEntries: Array<[string, string]> = [];
            syntaxes.forEach(syntax => {
                if (
                    syntax.type === 'VariableDeclaration'
                    && syntax.declarations.length > 0
                    && syntax.declarations[0].type === 'VariableDeclarator'
                    && syntax.declarations[0].init?.type === 'ObjectExpression'
                ) {
                    const properties = syntax.declarations[0].init.properties;
                    properties.forEach(property => {
                        if (property.type === 'ObjectProperty' && property.key.type === 'StringLiteral') {
                            const path = property.key.value;
                            const rawContent = generate(property.value).code;
                            moduleEntries.push([path, rawContent]);
                        }
                        return [];
                    })
                }
            })
            return moduleEntries;
        }
        throw Error('');
    },
    '': (ast: parser.ParseResult<types.File>) => {
        const body = ast.program.body;
        const expressionStatement = body[0];
        if (
            expressionStatement.type === 'ExpressionStatement'
            && expressionStatement.expression.type === 'CallExpression'
            && (
                expressionStatement.expression.callee.type === 'ArrowFunctionExpression'
                || expressionStatement.expression.callee.type === 'FunctionExpression'
            )
            && expressionStatement.expression.arguments 
            && expressionStatement.expression.arguments.length > 1
            && expressionStatement.expression.arguments[1].type === 'FunctionExpression'
            && expressionStatement.expression.arguments[1].body.type === 'BlockStatement'
            && expressionStatement.expression.arguments[1].body.body.length > 0
            && expressionStatement.expression.arguments[1].body.body[0].type === 'ReturnStatement'
            && expressionStatement.expression.arguments[1].body.body[0].argument?.type === 'CallExpression'
            && expressionStatement.expression.arguments[1].body.body[0].argument?.callee.type === 'ArrowFunctionExpression'
            && expressionStatement.expression.arguments[1].body.body[0].argument?.callee.body.type === 'BlockStatement'
        ) {
            const syntaxes = expressionStatement.expression.arguments[1].body.body[0].argument.callee.body.body;
            if (syntaxes.length === 0) {
                return [];
            }
            const moduleEntries: Array<[string, string]> = [];
            syntaxes.forEach(syntax => {
                if (
                    syntax.type === 'VariableDeclaration'
                    && syntax.declarations.length > 0
                    && syntax.declarations[0].type === 'VariableDeclarator'
                    && syntax.declarations[0].init?.type === 'ObjectExpression'
                ) {
                    const properties = syntax.declarations[0].init.properties;
                    properties.forEach(property => {
                        if (property.type === 'ObjectProperty' && property.key.type === 'StringLiteral') {
                            const path = property.key.value;
                            const rawContent = generate(property.value).code;
                            moduleEntries.push([path, rawContent]);
                        }
                        return [];
                    })
                }
            })
            return moduleEntries;
        }
        throw Error('');
    }
}

export const getModuleEntries = (
    ast: parser.ParseResult<types.File>,
    devTool?: DevTool,
    webpackVersion?: WebpackVersion
): Array<[string, string]> => {
    if (devTool === 'source-map' && webpackVersion === '5') {
        return parserAst['source-map-webpack-5'](ast);
    } else if (devTool === undefined && webpackVersion === undefined) {
        return parserAst['unknown'](ast);
    }  else if (devTool === '' && webpackVersion === '') {
        return parserAst[''](ast);
    }
    throw Error('');
};
