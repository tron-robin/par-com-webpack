const path = require('path');
const webpackCleanPlugin = require('webpack-clean-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./index.js',
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'./web')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                loader:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|ttf)$/,
                loader:'url-loader'
            }
        ]
    },
    plugins:[
        new webpackCleanPlugin(),
        new htmlWebpackPlugin({
            filename:'index.html',
            template:'./index.html'
        })
    ]
}