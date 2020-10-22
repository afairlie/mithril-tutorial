const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: '/src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    open: 'Firefox',
    compress: true,
    port: 9000,
    publicPath: '/',
    contentBase: './dist/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mithril App',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
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
     ],
   },
};