const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(sass|less|css)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      // {
      //   test: /\.(png|svg|jpe?g|gif)$/,
      //   include: path.resolve(__dirname, 'src'),
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'images/',
      //         publicPath: 'images/'
      //       }
      //     }
      //   ]
      // },      
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource'
      },
      
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    })
  ],  
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
  },
};
