let path = require('path');

const config = {
    entry: {
        'public/dist/client': './src/client/app.js',
        'dist/server': './src/server/index.js'
    },
    target: 'node',
    output: {
        filename: '[name].js'
        // path: path.resolve(__dirname, 'public/dist'),
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"],
            }
        ],
    },
};

module.exports = config;