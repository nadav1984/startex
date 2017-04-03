const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = {
  // the entry property the file that run the app
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/' // command on the url loader fix prefix to the dist directory
  },
  // all loader for the modules that we want to test
  module: {
    rules: [
      {
          use: 'babel-loader',
          test: /\.(js|jsx)$/
      }, {
        use: ['style-loader', 'css-loader','sass-loader'],
        test: /\.css|.scss?$/,
      },
      {
        test: /\.(jpe?g|svg|gif|png)$/,
        use:[
          {
            loader: 'url-loader',
            options: { limit:40000 }
          },
          'image-webpack-loader'
         ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};

module.exports = config;
