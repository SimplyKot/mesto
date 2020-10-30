const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключили плагин
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  entry: { main: './src/scripts/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: '/node_modules/'
        },
        {
          test: /\.(png|svg|jpg|gif|woff|woff2)$/,
          loader: 'file-loader'
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              // добавьте объект options
              options: { importLoaders: 1 }
            },
            'postcss-loader'
          ]
        } 
      ] 
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' 
    }),
    new MiniCssExtractPlugin(),
  ]
}; 