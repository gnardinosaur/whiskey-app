const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      { test: /\.(js|jsx)$/, 
        exclude: /node_modules/, 
        use: {
          loader: "babel-loader" }
        }
    ]
  },
  devtools: 'eval-source-map',
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  }
};