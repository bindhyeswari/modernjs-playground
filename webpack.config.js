const fs = require('fs');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

const paths = {
  src: path.resolve(__dirname, 'src'),
  js: path.resolve(__dirname, 'src/js'),
  dist: path.resolve(__dirname, 'dist')
};

module.exports = {
  entry: path.join(paths.js, 'app.js'),
  output: {
    filename: 'app.bundle.js',
    path: paths.dist
  },
  module: {
    rules: [{
      test: /\.jsx?$/i,
      use: ['babel-loader'],
      exclude: /node_modules/
    }]
  },
  plugins: [new HtmlPlugin({
    filename: 'index.html',
    template: path.join(paths.src, 'index.html')
  })],
  devServer: {
    contentBase: paths.dist
  }
};
