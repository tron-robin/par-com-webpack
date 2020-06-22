const path = require("path");
const WebpackCleanPlugin = require("webpack-clean-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:"./src/index.js",
    output:{
        filename:"index.js",
        path:path.resolve(__dirname,"./web")
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                loader:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins:[
        new WebpackCleanPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:"index.html"
        })
    ]
}