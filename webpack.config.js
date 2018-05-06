const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BrotliWebpackPlugin = require("brotli-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new BrotliWebpackPlugin({
      asset: "app.bundle.min.js",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components")
    }
  }
};
