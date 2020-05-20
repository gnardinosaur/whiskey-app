const path = require('path');
const webpack = require("webpack");
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = () => {
  const env = dotenv.config().parsed;
  
  // reduce .env variables to an object and pass to DefinePlugin below
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {})
  
  return {
    entry: ['@babel/polyfill', './src/index.js'],

    output: {
      filename: 'main.[hash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },

    mode: isDevelopment ? 'development' : 'production',

    devtool: 'eval-source-map',

    devServer: {
      contentBase: './dist',
      historyApiFallback: true
    },

    module: {
      rules: [
        { 
          test: /\.(js|jsx)$/, 
          exclude: /node_modules/, 
          use: {
            loader: "babel-loader" 
          }
        },
        // Global Styles
        {
          test: /\.global.scss$/,
          loader: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        },
        // Moduled Styles
        {
          test: /\.scss$/,
          exclude: /\.global.scss$/,
          loader: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                },
                localsConvention: 'camelCase',
                sourceMap: isDevelopment
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader',
          options: {
            limit: 8000,
          },
        },
      ]
    },

    plugins: [
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
        template: './src/index.template.html'
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
      })
    ],
  }
};