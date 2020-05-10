// const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

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
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public")
  }
  // mode: "development",
  // plugins: [
  //   new CopyWebpackPlugin(['index.html'])
  // ],
};
