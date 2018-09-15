const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    plugins: [new DirectoryNamedWebpackPlugin()],
  },
  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          "sass-loader?data=@import './src/__styles__/variables.scss';",
        ],
      },
      {
        test: /\.(png|svg|jpg)/,
        use: 'file-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '_build'),
  },
};
