const path = require('path');
const srcDir = path.join(__dirname, 'client');
const distDir = path.join(__dirname, 'public');

module.exports = {
  entry: path.join(srcDir, 'index.jsx'),
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: distDir,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },   
    ]
  },
}