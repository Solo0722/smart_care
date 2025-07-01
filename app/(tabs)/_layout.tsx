import { Tabs } from "expo-router";
import React from "react";
import { View, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { colors, Font } from "@/constants/theme";
import { Iconify } from "react-native-iconify";
import { hexToRGBA } from "@/services/uiService";

const screens = [
  {
    name: "index",
    activeIcon: "solar:home-angle-bold",
    inactiveIcon: "solar:home-angle-outline",
    label: "Home",
  },
  {
    name: "ai-chat",
    activeIcon: "solar:chat-line-bold",
    inactiveIcon: "solar:chat-line-outline",
    label: "AI Chat",
  },
  {
    name: "history",
    activeIcon: "solar:calendar-mark-bold",
    inactiveIcon: "solar:calendar-mark-outline",
    label: "History",
  },
  {
    name: "profile",
    activeIcon: "solar:user-bold",
    inactiveIcon: "solar:user-outline",
    label: "Profile",
  },
];

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBarInnerContainer}>
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const screen = screens.find((s) => s.name === route.name);
          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={focused ? { selected: true } : {}}
              onPress={() => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!focused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              }}
              style={styles.tabButton}
              activeOpacity={0.8}
            >
              <View
                style={[
                  styles.iconWrapper,
                  focused && styles.iconWrapperActive,
                ]}
              >
                <Iconify
                  icon={screen.activeIcon}
                  color={focused ? colors.TEAL : colors.GRAY}
                  size={22}
                />
                <View
                  style={{
                    ...styles.rod,
                    backgroundColor: focused ? colors.ORANGE : "transparent",
                  }}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: "transparent",
    width: "100%",
    height: 70,
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 100,
  },
  tabBarInnerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // marginHorizontal: 24,
    // marginBottom: Platform.OS === "ios" ? 24 : 12,
    backgroundColor: colors.WHITE,
    borderRadius: 12,
    flex: 1,
    height: "100%",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.08,
    // shadowRadius: 16,
    // elevation: 8,
  },
  tabButton: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  iconWrapper: {
    width: 50,
    height: 46,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    paddingHorizontal: 10,
  },
  iconWrapperActive: {
    backgroundColor: colors.LIGHT_GRAY,
    borderRadius: 12,
  },
  rod: {
    height: 4,
    width: "100%",
    position: "absolute",
    bottom: 0,
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    borderTopLeftRadius: 12,
  },
});

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          marginHorizontal: 12,
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      {screens.map((scrn) => (
        <Tabs.Screen
          key={scrn.name}
          name={scrn.name}
          options={{
            tabBarLabel: scrn.label,
          }}
        />
      ))}
    </Tabs>
  );
}
