const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    host: "0.0.0.0",
    port: 8081,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "payments",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/bootstrap",
      },
      // TODO
      // shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
