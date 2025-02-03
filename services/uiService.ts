import { Navigation } from "@/@types/types";
import { CommonActions, Route } from "@react-navigation/native";
import { Platform } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
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
