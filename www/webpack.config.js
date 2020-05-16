// const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // entry: "./bootstrap.js",
  entry: path.resolve(__dirname, "src/bootstrap.tsx"),
  output: {
    // path: path.resolve(__dirname, "dist"),
    // filename: "bootstrap.js",
    path: path.resolve(__dirname, "public"),
    filename: "bootstrap.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: [/\.css$/, /\.scss$/],
        exclude: /node_modules/,
        loader: [miniCssExtractPlugin.loader, 'css-loader?modules', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader"
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  },
  plugins: [
    new htmlWebpackPlugin({ template: './src/index.html' }),
    new miniCssExtractPlugin({
      publicPath: 'public',
      filename: 'app.css',
    }),
  ]
  // mode: "development",
  // plugins: [
  //   new CopyWebpackPlugin(['index.html'])
  // ],
};
