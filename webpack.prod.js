const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './client.jsx',
  mode: 'production',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'public', 'javascript'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      use: ['babel-loader'],
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      API_BASE_URL: JSON.stringify('http://portfolio.colleen-noel.com/api'),
    }),

    new CopyPlugin([
      {
        from: path.resolve(__dirname, 'public', 'index.html'),
        to: path.resolve(__dirname, 'dist', 'public', 'index.html')
      },
    ]),
  ]
}
