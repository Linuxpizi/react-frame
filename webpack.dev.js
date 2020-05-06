const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        // port: 8080, 多人协作,端口需要自动分配
        host: '0.0.0.0',
        historyApiFallback: true,
        hot: true,
        compress: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
});