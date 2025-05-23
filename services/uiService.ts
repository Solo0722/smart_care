import { ILayoutConfig, Navigation, TBaseConfig } from "@/@types/types";
import { CommonActions, Route } from "@react-navigation/native";
import { Platform } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { Extrapolation, interpolate } from "react-native-reanimated";
export const resetNavigation = (
  navigation: Navigation,
  routes: Route<any, any>[]
) => {
  navigation.dispatch(
    CommonActions.reset({
      routes,
    })
  );
};
export const setNavbar = async (color?: string, isTransparent?: boolean) => {
  if (Platform.OS === "android") {
    if (isTransparent) {
      await NavigationBar.setBackgroundColorAsync("#00000000");
    } else {
      await NavigationBar.setBackgroundColorAsync(color ?? "#00000000");
    }
    await NavigationBar.setBorderColorAsync("#00000000");
  }
};

export function parallaxLayout(
  baseConfig: TBaseConfig,
  modeConfig: ILayoutConfig = {}
) {
  const { size, vertical } = baseConfig;
  const {
    parallaxScrollingOffset = 100,
    parallaxScrollingScale = 0.8,
    parallaxAdjacentItemScale = parallaxScrollingScale ** 2,
  } = modeConfig;

  return (value: number) => {
    "worklet";
    const translate = interpolate(
      value,
      [-1, 0, 1],
      [-size + parallaxScrollingOffset, 0, size - parallaxScrollingOffset]
    );

    const zIndex = interpolate(
      value,
      [-1, 0, 1],
      [0, size, 0],
      Extrapolation.CLAMP
    );

    const scale = interpolate(
      value,
      [-1, 0, 1],
      [
        parallaxAdjacentItemScale,
        parallaxScrollingScale,
        parallaxAdjacentItemScale,
      ],
      Extrapolation.CLAMP
    );

    return {
      transform: [
        vertical
          ? {
              translateY: translate,
            }
          : {
              translateX: translate,
            },
        {
          scale,
        },
      ],
      zIndex,
    };
  };
}

export const hexToRGBA = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
