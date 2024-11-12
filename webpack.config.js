const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development", 
  entry: {
    app: path.resolve(__dirname, "./src/app.js"),
    about: path.resolve(__dirname, "./src/about.js"),
    styles: path.resolve(__dirname, "./src/css/style.scss"),
  }, 
 
  output: {
    path: path.resolve(__dirname, "public"), 
    filename: "[name].js", 
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack 5 ",
      filename: "index.html",
      template: "./src/temp.html",
      chunks: ["app", "styles"],
    }),
    new HtmlWebpackPlugin({
      title: "About",
      filename: "about.html",
      template: "./src/tempAbout.html",
      chunks: ["about"]
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    static: path.join(__dirname, "public"),
    port: 3000, 
    open: true, 
    hot: true, 
    watchFiles: ["src/**/*", "public/**/*"], 
  },
};
