const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    styles: path.resolve(__dirname, '../triphouse-project/styles/index.scss'),
    index: path.resolve(__dirname, '../triphouse-project/pages/index.pug'),
    app: path.resolve(__dirname, '../triphouse-project/js/slick.min.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "scripts/bundle.[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[hash].[ext]',
          publicPath: '../',
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../triphouse-project/pages/index.pug'),
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[hash].css',
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
  ],
};
