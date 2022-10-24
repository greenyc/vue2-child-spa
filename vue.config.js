const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  filenameHashing: false,
  configureWebpack: {
    output: {
      libraryTarget: "umd"
    }
  }
});