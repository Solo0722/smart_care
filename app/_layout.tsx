// @@iconify-code-gen
import "react-native-reanimated";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  setCustomTextInput,
  setCustomText,
  setCustomScrollView,
} from "react-native-global-props";
import { Font } from "@/constants/theme";
import {
  SafeAreaProvider,
  // useSafeAreaInsets, // Only import if you actually use it in JSX
} from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";
import {
  DefaultTheme,
  // NavigationContainer, // Not needed, Expo Router handles this
  // ThemeProvider, // Not needed with Expo Router's Stack
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import "@/constants/rnuilibTheme";
import { setNavbar } from "@/services/uiService";
import { Provider } from "react-redux";
import { store } from "@/store/store";

enableScreens(); // Keep this here, at the top level.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const theme = DefaultTheme; // Define theme here if you use it in the useEffect

  const [loaded] = useFonts({
    [Font.FontExtraLight]: require("@/assets/fonts/MonaSans-ExtraLight.ttf"),
    [Font.FontLight]: require("@/assets/fonts/MonaSans-Light.ttf"),
    [Font.FontRegular]: require("@/assets/fonts/MonaSans-Regular.ttf"),
    [Font.FontMedium]: require("@/assets/fonts/MonaSans-Medium.ttf"),
    [Font.FontSemibold]: require("@/assets/fonts/MonaSans-SemiBold.ttf"),
    [Font.FontBold]: require("@/assets/fonts/MonaSans-Bold.ttf"),
    [Font.FontExtraBold]: require("@/assets/fonts/MonaSans-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Consolidate global setup calls into a single useEffect
  useEffect(() => {
    setNavbar(undefined, true); // Keep this here

    setCustomText({
      style: {
        fontFamily: Font.FontRegular,
        color: theme.colors.text, // Assuming DefaultTheme.colors.text is suitable
        fontSize: 12,
      },
    });
    setCustomTextInput({
      style: {
        fontFamily: Font.FontRegular,
        fontSize: 12,
        color: theme.colors.text,
      },
    });
    setCustomScrollView({
      showsHorizontalScrollIndicator: false,
      showsVerticalScrollIndicator: false,
    });
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <SafeAreaProvider>
          <Stack
            initialRouteName="main"
            screenOptions={{
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontFamily: Font.FontSemibold,
                fontSize: 12,
                // @ts-ignore
                textTransform: "capitalize",
              },
              headerShadowVisible: false,
              contentStyle: {
                backgroundColor: "#ffffff",
              },
            }}
          >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="welcome" options={{ headerShown: false }} />
            <Stack.Screen name="onboarding" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="main" options={{ headerShown: false }} />
            <Stack.Screen name="signin" options={{ headerShown: false }} />
            <Stack.Screen name="signup" options={{ headerShown: false }} />
            <Stack.Screen
              name="forgot-password"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="email-verification"
              options={{ headerTitle: "" }}
            />
            <Stack.Screen
              name="successful-completion"
              options={{ headerTitle: "" }}
            />
            <Stack.Screen name="+not-found" options={{ headerTitle: "" }} />
            <Stack.Screen
              name="(health-assessment-setup)"
              options={{ headerShown: false }}
            />
          </Stack>
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
