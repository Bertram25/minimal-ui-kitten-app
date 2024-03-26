const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const MetroConfig = require("@ui-kitten/metro-config");

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const defaultConfig = getDefaultConfig(__dirname);
const evaConfig = {
  evaPackage: "@eva-design/eva",
  customMappingPath: "./app/theme/customMapping.json",
};

module.exports = mergeConfig(defaultConfig, MetroConfig.create(evaConfig));
