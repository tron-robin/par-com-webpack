const path = require('path');
const webpackCleanPlugin = require('webpack-clean-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './web')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: [
                    miniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|ttf)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new webpackCleanPlugin(),
        new htmlWebpackPlugin({
            template: './index.html'
        }),
        new miniCssExtractPlugin(),
        new OptimizeCSSAssetsPlugin()
    ]
}