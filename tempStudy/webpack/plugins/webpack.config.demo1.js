const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack'); //访问内置的插件
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './path/to/my/entry/file.js',
    output: {
        filename: 'my-first-webpack-demo.bundle.js'
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};
