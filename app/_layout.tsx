// @@iconify-code-gen
import 'react-native-reanimated';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  setCustomTextInput,
  setCustomText,
  setCustomScrollView,
} from "react-native-global-props";
import { Font } from '@/constants/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import '@/constants/rnuilibTheme';
import { ThemeManager } from 'react-native-ui-lib';

enableScreens();
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const theme = DefaultTheme;
  const [loaded] = useFonts({
    [Font.FontExtraLight]: require('@/assets/fonts/MonaSans-ExtraLight.ttf'),
    [Font.FontLight]: require('@/assets/fonts/MonaSans-Light.ttf'),
    [Font.FontRegular]: require('@/assets/fonts/MonaSans-Regular.ttf'),
    [Font.FontMedium]: require('@/assets/fonts/MonaSans-Medium.ttf'),
    [Font.FontSemibold]: require('@/assets/fonts/MonaSans-SemiBold.ttf'),
    [Font.FontBold]: require('@/assets/fonts/MonaSans-Bold.ttf'),
    [Font.FontExtraBold]: require('@/assets/fonts/MonaSans-ExtraBold.ttf'),
  });


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    const components = ["Text", "TextInput", "Button", "Card", "TouchableOpacity"];

    const globalFont = { fontFamily: Font.FontRegular };

    components.forEach((component) => {
      ThemeManager.setComponentTheme(component, {
        style: globalFont,
        labelStyle: globalFont,
      });
    });
  }, []);

  if (!loaded) {
    return null;
  }

  setCustomText({
    style: {
      fontFamily: Font.FontRegular,
      color: theme.colors.text,
      fontSize: 12
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

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <Stack initialRouteName='index'
          screenOptions={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: Font.FontBold,
              fontSize: 14,
              // @ts-ignore
              textTransform: 'capitalize',
            },
            // headerLeft: ({ canGoBack, tintColor, href }) => {
            //   return canGoBack && (
            //     <Link href={'..'} asChild>
            //       <TouchableOpacity style={{ marginLeft: 16 }}>
            //         <Icon icon='solar:arrow-left-outline' color={tintColor} strokeWidth={20} />
            //       </TouchableOpacity>
            //     </Link>
            //   )
            // },
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: "#ffffff"
            }

          }}
        >
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="signin" options={{ headerTitle: "" }} />
          <Stack.Screen name="signup" options={{ headerTitle: "" }} />
          <Stack.Screen name="email-verification" options={{ headerTitle: "" }} />
          <Stack.Screen name="profile-completion" options={{ headerTitle: "" }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
