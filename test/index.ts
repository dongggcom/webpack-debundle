import debundle from '../core';

// single file
debundle({
    input: './test/source.js',
    output: './output/source/package/app',
    devTool: 'source-map',
    webpackVersion: '5'
});

debundle({
    input: './test/dist/node',
    output: './output/node/package/app',
    devTool: '',
    webpackVersion: ''
})

debundle({
    input: './test/dist/webworker',
    output: './output/webworker/package/app',
    devTool: '',
    webpackVersion: ''
})

debundle({
    input: './test/dist/webview',
    output: './output/webview/package/app'
})