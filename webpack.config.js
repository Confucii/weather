const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Weather App",
      meta: {
        "Content-Security-Policy": {
          "http-equiv": "Content-Security-Policy",
          content: "upgrade-insecure-requests",
        },
      },
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
