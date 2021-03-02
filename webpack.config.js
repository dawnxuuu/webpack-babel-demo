/* eslint-disable global-require */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // development production
  mode: 'production',
  // 生产环境：cheap-module-source-map cheap-module-eval-source-map
  devtool: 'none',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    host: '0.0.0.0',
    port: 9090
    // proxy: {
    //   '/api': 'local:8081'
    // }
  },
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].[hash:5].js',
    path: path.resolve(__dirname, 'dist')
    // publicPath: 'https://cdn.com/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          name: '[path][name].[hash:5].[ext]',
          limit: 244
        }
      },
      {
        test: /\.tff$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash:5].[ext]'
        }
      },
      {
        test: /\.less$/i,
        // 执行顺序从后到前
        // use: ['style-loader', 'css-loader', 'less-loader']
        use: [
          {
            loader: 'style-loader' // 从 JS 中创建样式节点
          },
          {
            loader: 'css-loader' // 转化 CSS 为 CommonJS
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader' // 编译 Less 为 CSS
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}
