const path = require('path')

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
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash:5].[ext]'
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
        use: [
          {
            loader: 'style-loader' // 从 JS 中创建样式节点
          },
          {
            loader: 'css-loader' // 转化 CSS 为 CommonJS
          },
          {
            loader: 'less-loader' // 编译 Less 为 CSS
          }
        ]
      }
    ]
  }
}
