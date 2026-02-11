const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/main.js',   // main.js - точка входа
  output: {
    filename: 'bundle.js',  // файл сборки (бандл)

    // получить абсолютный путь с помощью path.resolve
    path: path.resolve(__dirname, 'build'), // по какому пути наход. bundle.js

    clean: true,            //  очистка директории перед новой сборкой
  },
  devtool: 'source-map',  // для просмотра исходного кода

  plugins: [
    // создается экземпляр плагина CopyPlugin, позволяет выполнять копирование файлов в указанную папку
    new CopyPlugin({
      patterns: [{ from: 'public'}],
    }),
  ],

};
