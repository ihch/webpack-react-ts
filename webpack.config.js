const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  // entry 最初に読み込むjs/tsファイル
  entry: './src/Index.tsx',
  // bundleしたファイルの出力先
  output: {
    // 絶対パスを指定する
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  // importで探すファイルの拡張子
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  // loaderの設定 後ろから順に動作する
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [
          {
            // babel.config.jsonを読み込んで動作する
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.tsx?$/,
        // tsconfig.jsonを読み込んで動作する
        loader: 'ts-loader'
      }
    ]
  },
  // webpack pluginの設定
  plugins: [
    new HtmlWebpackPlugin({
      publicPath: 'dist',
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
}
