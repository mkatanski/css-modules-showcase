const path = require("path");
const mainWebpack = require("../webpack.config.js");

module.exports = (storybookBaseConfig, configType) => {
  mainWebpack.module.rules.forEach((rule) => {
    storybookBaseConfig.module.rules.push(rule);
  })

  // Return the altered config
  return storybookBaseConfig;
};