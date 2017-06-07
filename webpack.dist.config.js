'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  output: {
    path: __dirname + '/dist/',
    filename: 'nuka-carousel.js',
    libraryTarget: 'umd'
  },

  devtool: false,
  entry: './index.js',

  stats: {
    colors: true,
    reasons: false
  },

  resolve: {
    extensions: ['.js']
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'babel-loader'
    }]
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDom',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ],

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
};
