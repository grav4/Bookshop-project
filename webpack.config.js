const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: 'production',
    
    entry: path.resolve(__dirname,'./src/main.js'),
    output: {
      path: path.resolve(__dirname,'dist'),
      filename: 
          'mainy.js',
      clean: true
    },

    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname,'index.html'),
         title: 'Bookshop', 
        }),
        //new ESLintPlugin({fix: true})
    ],
    
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        },

        {
          test: /\.html$/i,
        },

        {
          test: /\.(png|jpg|jpeg|svg)$/i,
          type: 'asset/resource'
        }
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [
         '...',
        new CssMinimizerPlugin(),
      ],
    },

};