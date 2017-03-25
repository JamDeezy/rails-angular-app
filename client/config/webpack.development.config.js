import webpack from "webpack";
import Config from "webpack-config";
import path from "path";

export default new Config().extend("config/webpack.base.config.js").merge({
  devtool: "source-map",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "http://localhost:8080/"
  }
});
