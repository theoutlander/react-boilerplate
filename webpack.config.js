let path = require('path');
let nodeExternals = require('webpack-node-externals');

const moduleObj = {
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"],
        }
    ],
};

const client = {
    entry: {
        'client': './src/client/app.js',
    },
    target: 'web',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/dist')
    },
    module: moduleObj
};

const server = {
    entry: {
        'server': './src/server/index.js',
        'tests/test': './src/server/tests/test.js'
    },
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: moduleObj,
    externals: [nodeExternals()]
};

module.exports = [client, server];