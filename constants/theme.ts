import { Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Theme } from "@react-navigation/native";
import { Platform } from "react-native";
import { DefaultTheme as DefaultThemeProps } from "styled-components";

export enum Font {
  DMSans_400Regular = "DMSans_400Regular",
  Poppins_700Bold = "Poppins_700Bold",
}

export const fonts = Platform.select({
  web: {
    regular: {
      fontFamily: Font.DMSans_400Regular,
      fontWeight: "400",
    },
    medium: {
      fontFamily: Font.DMSans_400Regular,
      fontWeight: "500",
    },
    bold: {
      fontFamily: Font.Poppins_700Bold,
      fontWeight: "600",
    },
    heavy: {
      fontFamily: Font.Poppins_700Bold,
      fontWeight: "700",
    },
  },
  ios: {
    regular: {
      fontFamily: Font.DMSans_400Regular,
      fontWeight: "400",
    },
    medium: {
      fontFamily: Font.DMSans_400Regular,
      fontWeight: "500",
    },
    bold: {
      fontFamily: Font.Poppins_700Bold,
      fontWeight: "600",
    },
    heavy: {
      fontFamily: Font.Poppins_700Bold,
      fontWeight: "700",
    },
  },
  default: {
    regular: {
      fontFamily: Font.DMSans_400Regular,
      fontWeight: "normal",
    },
    medium: {
      fontFamily: Font.DMSans_400Regular,
      fontWeight: "normal",
    },
    bold: {
      fontFamily: Font.Poppins_700Bold,
      fontWeight: "600",
    },
    heavy: {
      fontFamily: Font.Poppins_700Bold,
      fontWeight: "700",
    },
  },
} as const satisfies Record<string, Theme["fonts"]>);

export const DefaultConfig = {
  fonts,
};

export const DefaultTheme: DefaultThemeProps = {
  ...DefaultConfig,
  dark: false,
  colors: {
    primary: "rgb(0, 122, 255)",
    background: "rgb(242, 242, 242)",
    text: "rgb(28, 28, 30)",
    border: "rgb(216, 216, 216)",
  },
};
export const DarkTheme: DefaultThemeProps = {
  ...DefaultConfig,
  dark: true,
  colors: {
    primary: "rgb(10, 132, 255)",
    background: "rgb(1, 1, 1)",
    text: "rgb(229, 229, 231)",
    border: "rgb(39, 39, 41)",
  },
};
