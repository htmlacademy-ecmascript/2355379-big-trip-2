const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/main.js',   // main.js - точка входа
  output: {
    // файл сборки (бандл)
    filename: 'bundle.[contenthash].js',  // contenthash под HtmlPlugin

    // получить абсолютный путь с помощью path.resolve
    path: path.resolve(__dirname, 'build'), // по какому пути наход. bundle.js

    clean: true,  //  очистка директории перед новой сборкой
  },
  devtool: 'source-map',  // карта, для просмотра исходного кода

  plugins: [
    // HtmlPlugin автоматически генерирует index.html и включает в него bundle
    new HtmlPlugin({
      template: 'public/index.html',
    }),

    // создается экземпляр плагина CopyPlugin, позволяет выполнять копирование файлов в указанную папку
    //ignore: ['**/index.html'], // исключает public/index.html для copy-webpack-plugin (не будет его затирать)
    new CopyPlugin({
      patterns: [{
        from: 'public',
        globOptions: {
          ignore: ['**/index.html'],
        },
      }],
    }),
  ],

};

// настройки для babel
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/, // исключение
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
      },
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader']
    },
  ],
};
