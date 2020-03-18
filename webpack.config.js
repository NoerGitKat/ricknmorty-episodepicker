const path = require("path");
const rules = [
  {
    test: /\.tsx?$/,
    use: "babel-loader",
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    use: [
      { loader: "style-loader" },
      {
        loader: "css-loader"
      }
    ]
  }
];

module.exports = {
  target: "web",
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: { rules },
  resolve: {
    extensions: [".ts", ".tsx", ".js", "jsx", "css"]
  },
  devServer: {
    contentBase: "./",
    publicPath: "/",
    port: 5000,
    historyApiFallback: true
  }
};
