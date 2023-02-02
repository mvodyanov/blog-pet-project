import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/buildWebpackConfig";
import { BuildPaths } from "./config/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const config: webpack.Configuration = buildWebpackConfig({
  mode: "development",
  paths,
  isDev: true,
});

export default config;
