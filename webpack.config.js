const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = () => ({
  module: {
    rules: [{ test: /\.ts?/, use: [{ loader: "ts-loader", options: { transpileOnly: true } }] }]
  },
  externals: {
    vscode: "vscode"
  },
  output: {
    libraryTarget: "commonjs2"
  },
  target: "node",
  plugins: [new webpack.ProgressPlugin(), new ForkTsCheckerWebpackPlugin()]
});
