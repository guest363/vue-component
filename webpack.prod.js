"use strict";

const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: "./index.js",
  mode: "production",
  output: {
    filename: "vue-component.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: path.resolve(__dirname, "node_modules"),
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: path.resolve(__dirname, "node_modules"),
        include: path.resolve(__dirname, "src")
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                autoprefixer({
                  browsers: ["ie >= 9", "last 4 version"],
                  grid: true
                })
              ],
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "stylus-loader"
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        exclude: /node_modules/,
        loader: "url-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "/images/",
          limit: 25000
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]?[hash]",
              outputPath: "/fonts/"
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
      chunkFilename: "./css/[id].css"
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    })
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  }
};
