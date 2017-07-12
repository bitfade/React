/* global require, __dirname, process, module */
/* eslint no-console: 0 */

const path = require('path')
const src = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

const PATHS = {
  app: src,
  build: dist,
  js: path.join(src, 'js'),
  css: path.join(src, 'css'),
  plugins: path.join(src, 'plugins')
}

const webpack = require('webpack')
const merge = require('webpack-merge')
const validate = require('webpack-validator')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer')

const common = {
  entry: {
    app: path.join(PATHS.js, 'init.js')
  },
  output: {
    path: PATHS.build,
    filename: 'bundles/[name].js'
  },
  resolve: {
    root: [
      PATHS.css,
      PATHS.js,
      PATHS.plugins
    ]
  },
  externals: {
    'jquery': 'jQuery'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/index.hbs',
      filename: 'index.html'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.(svg|png|gif|jpg|jpeg)$/,
        include: PATHS.plugins,
        loader: 'url-loader?limit=10000&name=bundles/assets/[hash].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: PATHS.js
      }
    ]
  },
  postcss: [autoprefixer]
}

var config

// Detect how npm is run and branch based on that
switch (process.env.npm_lifecycle_event) {
  case 'build': {
    config = merge(
      common, {
        // devtool: 'source-map',
        plugins: [
          new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            comments: false,
            compressor: {
              warnings: false
            }
          }),
          // new OptimizeCssAssetsPlugin(),
          new webpack.optimize.OccurrenceOrderPlugin(),
          new ExtractTextPlugin('bundles/style.css'),
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
          })
        ],
        module: {
          loaders: [
            {
              test: /\.s?css$/,
              loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss?sourceMap!sass?sourceMap')
            }
          ]
        }
      }
    )
    break
  }
  default: {
    const ReloadPlugin = require('reload-html-webpack-plugin')
    config = merge(
      common, {
        // devtool: 'eval-source-map',
        devServer: {
          contentBase: './dist',
          // historyApiFallback: true,
          hot: true,
          inline: true,
          compress: true,
          noInfo: true
        // logLevel: 'errors',
        // stats: { colors: true },
        },
        plugins: [
          new webpack.HotModuleReplacementPlugin({
            multiStep: true
          }),
          new ReloadPlugin()
        ],
        module: {
          loaders: [
            {
              test: /\.s?css$/,
              loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
            }
          ]

        }
      }
    )
  }
}

module.exports = validate(config)
