const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: [".."],
      alias: {
        "@screens": "./src/screens",
        "@locales": "./src/locales",
        "@components": "./src/components",
        // "@assets": "./src/assets",
        "@navigation": "./src/navigation",
        // "@services": "./src/services",
        "@states": "./src/states",
      }
    }
  ]
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [...plugins],
};
