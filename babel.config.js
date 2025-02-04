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
            "solar:home-2-outline",
            "solar:stethoscope-outline",
            "solar:chat-line-outline",
            "solar:calendar-mark-outline",
            "solar:user-outline",
            "solar:home-2-bold",
            "solar:stethoscope-bold",
            "solar:chat-line-bold",
            "solar:calendar-mark-bold",
            "solar:user-bold",
            "solar:minimalistic-magnifer-outline",
            "solar:pen-outline",
            "solar:verified-check-bold",
            "solar:medical-kit-outline",
            "solar:user-id-outline",
            "solar:bell-outline",
            "solar:moon-outline",
            "solar:global-outline",
            "solar:flag-outline",
            "solar:like-outline",
            "solar:star-outline",
            "solar:shield-keyhole-outline",
            "solar:diploma-verified-outline",
            "solar:question-square-outline",
            "solar:add-circle-bold",
            "solar:alt-arrow-right-outline",
            "solar:logout-3-outline",
          ],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
