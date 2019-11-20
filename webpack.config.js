const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const publicPath = '/';

const production = process.env.NODE_ENV === 'production';

const config = {
    mode: production ? 'production' : 'development',
    entry: {
        index: './src/index.jsx'
    },
    output: {
        path: resolve(__dirname, 'build'),
        filename: '[name].js',
        publicPath,
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                include: resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                },
                exclude: /(node_modules|build)/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: ['url-loader', 'image-webpack-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React template',
            template: 'src/index.html',
        })
    ],
    devServer: {
        historyApiFallback: true,
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        stats: 'errors-only',
        overlay: true
    }
};

module.exports = config;