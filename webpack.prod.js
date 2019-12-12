const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const CssExtractWebpackPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contentHash].bundle.js'
  },
  devtool: 'source-map',
  plugins: [new CssExtractWebpackPlugin({
    filename: '[name].[contentHash].css',
  }), new CleanWebpackPlugin()],

  optimization: {
    minimizer: [
      new OptimizeCssWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/template.html',
        minify: {
          collapseWhitespace: true
        }
      }),
      new TerserPlugin({
        sourceMap: true
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
        CssExtractWebpackPlugin.loader, // injects styles into dom
        'css-loader', // turns css into js
        'sass-loader' // turns sass into css
      ]
      }
    ]
  }
});