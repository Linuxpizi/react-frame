const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        concatenateModules: true,
        minimizer: [
            new OptimizeCSSAssetsPlugin(),
        ],
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
});