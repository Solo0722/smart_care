import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Link, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import {
  setCustomTextInput,
  setCustomText,
  setCustomScrollView,
  setCustomView
} from "react-native-global-props";
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { Font } from '@/constants/theme';
import { TouchableOpacity } from 'react-native';
import { Icon } from "@iconify/react";
import { ThemeManager } from 'react-native-ui-lib';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = DefaultTheme;
  const [loaded] = useFonts({
    [Font.DMSans_400Regular]: DMSans_400Regular,
    [Font.Poppins_700Bold]: Poppins_700Bold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  setCustomText({
    style: {
      fontFamily: Font.DMSans_400Regular,
      color: theme.colors.text,
      fontSize: 12
    },
  });
  setCustomTextInput({
    style: {
      fontFamily: Font.DMSans_400Regular,
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
      <ThemeProvider value={theme}>
        <Stack initialRouteName='index'
          screenOptions={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: Font.Poppins_700Bold,
              fontSize: 14,
              textTransform: 'capitalize',
            },
            headerLeft: ({ canGoBack, tintColor, href }) => {
              return canGoBack && (
                <Link href={'..'} asChild>
                  <TouchableOpacity style={{ marginLeft: 16 }}>
                    <Icon icon='solar:arrow-left-outline' color={tintColor} />
                  </TouchableOpacity>
                </Link>
              )
            },
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: theme.colors.background,
            },

          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
