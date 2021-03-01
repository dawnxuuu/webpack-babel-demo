/* eslint-disable global-require */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          name: '[path][name].[hash:5].[ext]',
          limit: 200
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
    new HtmlWebpackPlugin()
  ]
}
