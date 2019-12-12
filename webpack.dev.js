const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
        'style-loader', // injects styles into dom
        'css-loader', // turns css into js
        'sass-loader' // turns sass into css
      ]
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html'
  }), new webpack.HotModuleReplacementPlugin()]
});