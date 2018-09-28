// testing.webpack.js
'use strict';

// Depends
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const autoprefixer = require("autoprefixer");
require('babel-polyfill');


module.exports = {
    cache: true,
    entry: ['babel-polyfill', './index.js'],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    mode: "production",
    devtool: '#cheap-module-eval-source-map',
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json'],
    },
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
            include: path.resolve(__dirname, "src")
          },
          {
            test: /\.css$/,
            use: [
              { loader: "css-loader" }
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
        new VueLoaderPlugin()
      ],
    };
  