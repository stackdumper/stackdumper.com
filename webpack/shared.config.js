const path = require('path')

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BarPlugin = require('webpackbar')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(less|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'less-loader',
              options: {
                strictMath: true,
                noIeCompat: true,
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'stackdumper',
      template: path.resolve(__dirname, '../templates/index.html'),
    }),
    new ExtractTextPlugin('styles.css'),
    new BarPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.less'],
    plugins: [new TsconfigPathsPlugin()],
  },
}
