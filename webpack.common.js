const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AutoDllPlugin = require('autodll-webpack-plugin');
const HappyPack = require('happypack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: {
        app: './src/index.tsx',
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: devMode ? '[name].[hash].js' : '[name].[chunkhash].js',
    },

    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.tsx', '.ts', '.js'],
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src'),
            use: 'happypack/loader?id=tsx'
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            }, {
                loader: 'css-loader',
            }]
        }, {
            test: /\.less$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            }, {
                loader: 'css-loader',
            }]
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'images/[hash].[ext]',
                }
            }]
        }, {
            test: /\.(woff|woff2|ttf|eot|svg)(\?\d+)?$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src'),
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'font/[hash].[ext]',
                }
            }]
        }]
    },

    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: '1+1',
            'typeof window': JSON.stringify('object'),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new ForkTsCheckerWebpackPlugin({
            checkSyntacticErrors: true
        }),
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            template: path.resolve(__dirname, 'src/index.html'),
        }),
        new HappyPack({
            id: 'tsx',
            threads: 4,
            loaders: [{
                loader: 'ts-loader',
                options: {
                    happyPackMode: true
                }
            }]
        }),
        new AutoDllPlugin({
            context: __dirname,
            inject: true,
            filename: '[name].[hash:4].dll.js',
            entry: {
                thirty: [
                    'react',
                    'redux',
                    'axios',
                    'rxjs',
                    'react-dom',
                    'react-redux',
                    'react-router-dom',
                    'redux-observable',
                    'history',
                ],
            },
            plugins: [
                new UglifyJsPlugin({
                    exclude: /\.min\.js$/,
                    cache: true,
                    parallel: true,
                    sourceMap: false,
                    extractComments: false,
                    uglifyOptions: {
                        compress: {
                            unused: true,
                            drop_debugger: true,
                            drop_console: true,
                        },
                        output: {
                            comments: false
                        }
                    }
                }),
            ]
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
    ]
};
