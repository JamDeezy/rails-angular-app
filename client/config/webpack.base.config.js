import AutoPrefixer from "autoprefixer";
import Config from "webpack-config";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import path from "path";

export default new Config().merge({
  context: __dirname,
  entry: {
    app: "../src/index.js"
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      title: "app",
      filename: "index.html",
      inject: true,
      template: "../src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "sass-loader",
          {
            loader: "postcss-loader",
            options: {
              sourceMap: "inline",
              config: "config/postcss.config.js"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      }
    ]
  }
});
