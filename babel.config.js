module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "react-native-iconify/babel",
        {
          icons: [
            "logos:google-icon",
            "solar:alt-arrow-down-outline",
            "solar:home-smile-outline",
            "solar:stethoscope-outline",
            "solar:chat-line-outline",
            "solar:calendar-mark-outline",
            "solar:user-outline",
          ],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
