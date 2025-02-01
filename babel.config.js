module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "react-native-iconify/babel",
        {
          icons: ["logos:google-icon", "solar:alt-arrow-down-outline"],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
