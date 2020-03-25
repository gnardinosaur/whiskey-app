const path = require('path');
const webpack = require("webpack");
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;
  
  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {})

  return {
    entry: './src/index.js',
    mode: 'development',
    module: {
      rules: [
        { 
          test: /\.(js|jsx)$/, 
          exclude: /node_modules/, 
          use: {
            loader: "babel-loader" 
          }
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader',
          options: {
            limit: 8000,
          },
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ],
    devtool: 'eval-source-map',
    devServer: {
      contentBase: './dist',
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
};