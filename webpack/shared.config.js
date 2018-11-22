const path = require('path')

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BarPlugin = require('webpackbar')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const PwaManifestPlugin = require('webpack-pwa-manifest')

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
    new PwaManifestPlugin({
      name: 'stackdumper',
      short_name: 'stackdumper',
      description: 'stackdumper profile',
      background_color: '#ffffff',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('assets/avatar.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
        },
      ],
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    new ExtractTextPlugin('styles.css'),
    new BarPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.less'],
    plugins: [new TsconfigPathsPlugin()],
  },
}
