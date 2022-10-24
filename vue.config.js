const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack")
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    extract: false,
  },
  configureWebpack: (config) => {
    config.plugins.push(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      })
    )
    config.output.filename = "[name].js"
  },
});
