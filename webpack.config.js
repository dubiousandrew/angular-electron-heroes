var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  devtool: 'source-map',
  debug: true,

  entry: {
    '@angular': [
      'rxjs',
      'reflect-metadata',
      'zone.js'
    ],
    'common': ['es6-shim'],
    'app': './src/app/main.ts'
  },

  output: {
    path: __dirname + '/build/',
    publicPath: '',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['','.ts','.js','.json', '.css', '.html']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['ts', 'angular2-template-loader'],
        exclude: [ /node_modules/, /releases/ ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'html',

      },
      {
        test: /\.css$/,
        loader: 'raw'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=10000'
      }
    ]
  },

  plugins: [
    new CommonsChunkPlugin({ names: ['@angular', 'common'], minChunks: Infinity }),
    // new HtmlWebpackPlugin({
    //   template: './index.html',
    //   chunksSortMode: 'dependency'
    // })
  ],
  target:'electron-renderer'
};
