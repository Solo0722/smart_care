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
      icon: "solar:home-smile-outline",
      label: "Home"
    },
    {
      name: "diagnose",
      icon: "solar:stethoscope-outline",
      label: "Diagnose"
    },
    {
      name: "ai-chat",
      icon: "solar:chat-line-outline",
      label: "AI Chat"
    },
    {
      name: "history",
      icon: "solar:calendar-mark-outline",
      label: "History"
    },
    {
      name: "profile",
      icon: "solar:user-outline",
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
        tabBarInactiveTintColor: colors.ACCENT,
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
            shadowColor: "#000", // Shadow color for iOS
            shadowOffset: { width: 0, height: 4 }, // Shadow offset for iOS
            shadowOpacity: 0.25, // Shadow opacity for iOS
            shadowRadius: 10, // Shadow radius for iOS
            elevation: 5, // Shadow elevation for Android
          },
        }),
      }}>
      {
        screens.map(scrn => <Tabs.Screen key={scrn.name} name={scrn.name} options={{ tabBarLabel: scrn.label, tabBarIcon: ({ focused }) => <Iconify icon={scrn.icon} color={focused ? colors.PRIMARY : colors.ACCENT} size={20} strokeWidth={focused ? 20 : 1} fontFamily={Font.FontMedium} /> }} />)
      }
    </Tabs>
  );
}
