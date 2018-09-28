// testing.webpack.js
'use strict';

// Depends
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('babel-polyfill');


module.exports = {
    cache: true,
    entry: './src/main.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
          },
          {
            test: /\.css$/,
            use: [
              process.env.NODE_ENV !== 'production'
                ? 'vue-style-loader'
                : MiniCssExtractPlugin.loader,
              'css-loader'
            ]
          },
          {
            test: /\.jpe?g$|\.gif$|\.png$/i,
            loader: 'file-loader?name=[name].[hash].[ext]',
          },
          {
            test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
            loader: 'file-loader?name=[name].[ext]?[hash]',
          }
        ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css'
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 8080,
      host: '127.0.0.1',
      open: true,
      inline: true,
      hot: true,
      noInfo: false,
      quiet: false,
      stats: 'errors-only'
    },
    devtool: '#cheap-module-eval-source-map',
  };