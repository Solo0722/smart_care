import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const MainLayout = () => {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        contentStyle: {
          backgroundColor: "#ffffff",
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default MainLayout;

const styles = StyleSheet.create({});
