const path = require('path');

// have to install plugins and loaders ex: html plugin, or babel loader

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: '/src/index.js', // webpack entry point for dependencies
  },
  devtool: 'eval',
  devServer: {
    open: 'Firefox',
    compress: true,
    port: 9000,
    stats: 'minimal'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html', // html template for webpack bundled index.html
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'), // webpack output directory on bundle
    filename: '[name].bundle.js', // naming structure
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /\/node_modules\//,
        use: {
            loader: 'babel-loader'
        }
      },
    ],
  },
};