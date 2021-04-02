const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode:'production',
    entry: './package/index.js',
    output: {
        filename: 'pointSymbol.js',
        path: path.resolve(__dirname, 'lib'),
        library: "PointSymbol",
        libraryTarget: "umd",
        umdNamedDefine: true,
        globalObject: "this"
    },
    devtool: 'inline-source-map',
    // devServer: {
        // contentBase: './lib',
        // open: true,
        // port: 9000
    // },
    plugins: [
        new CleanWebpackPlugin(['lib']),
        // new HtmlWebpackPlugin({
        //     title: '点图元',
        //     template: './index.html'
        // })
    ],
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    }
}
