const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: ["./src/typescript/main.ts"],
  output: {
    path: path.resolve("./dist"),
    filename: "impulse-math-ts.dev.js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".ts"],
    alias: {
      "impulse-math-ts-toolkit": path.resolve(__dirname, "../build/Debug/impulse-math-ts-toolkit.node"),
    },
  },
  externals: {
  },
  node: {
    __dirname: false,
  },
  module: {
    rules: [
      {
        test: [/\.ts$/],
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.node$/,
        loader: "node-loader",
      },
    ],
  },
  target: "node",
};
