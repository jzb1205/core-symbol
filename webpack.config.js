const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode:'production',
    entry: './package/index.js',
    output: {
        filename: 'pointSymbol.js',
        path: path.resolve(__dirname, 'lib'),
        libraryTarget: "umd",
        umdNamedDefine: true,
        globalObject: "this"
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['lib'])
    ],
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    },
    performance: {
        hints: false
    }
}
