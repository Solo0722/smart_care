import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { colors, Font } from '@/constants/theme';
import { Iconify } from 'react-native-iconify';

export default function TabLayout() {

  const screens = [
    {
      name: "index",
      activeIcon: "solar:home-angle-bold",
      inactiveIcon: "solar:home-angle-outline",
      label: "Home"
    },
    {
      name: "diagnose",
      activeIcon: "solar:stethoscope-bold",
      inactiveIcon: "solar:stethoscope-outline",
      label: "Diagnose"
    },
    {
      name: "ai-chat",
      activeIcon: "solar:chat-line-bold",
      inactiveIcon: "solar:chat-line-outline",
      label: "AI Chat"
    },
    {
      name: "history",
      activeIcon: "solar:calendar-mark-bold",
      inactiveIcon: "solar:calendar-mark-outline",
      label: "History"
    },
    {
      name: "profile",
      activeIcon: "solar:user-bold",
      inactiveIcon: "solar:user-outline",
      label: "Profile"
    }
  ]

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        animation: "shift",
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.WHITE
        },
        headerTitleStyle: {
          fontFamily: Font.FontSemibold,
          fontSize: 12,
          // @ts-ignore
          textTransform: 'capitalize',
        },
        sceneStyle: {
          backgroundColor: colors.WHITE
        },
        tabBarActiveTintColor: colors.PRIMARY,
        tabBarInactiveTintColor: colors.ACCENT_FOREGROUND,
        tabBarLabelStyle: {
          fontFamily: Font.FontMedium,
          fontSize: 9
        },
        tabBarHideOnKeyboard: true,
        tabBarStyle: Platform.select({

          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            height: 65,
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 10,
            borderTopWidth: 0,
            // backgroundColor: "red",
            elevation: 10
          },
        }),
      }}>
      {
        screens.map(scrn => <Tabs.Screen key={scrn.name} name={scrn.name} options={{ tabBarLabel: scrn.label, tabBarIcon: ({ focused }) => <Iconify icon={focused ? scrn.activeIcon : scrn.inactiveIcon} color={focused ? colors.PRIMARY : colors.ACCENT_FOREGROUND} size={20} strokeWidth={20} fontFamily={Font.FontMedium} /> }} />)
      }
    </Tabs>
  );
}
