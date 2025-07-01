import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const HealthAssessmentLayout = () => {
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
      <Stack.Screen name="blood-type" />
      <Stack.Screen name="weight" />
      <Stack.Screen name="date-of-birth" />
      <Stack.Screen name="medical-conditions" />
      <Stack.Screen name="medications" />
    </Stack>
  );
};

export default HealthAssessmentLayout;

const styles = StyleSheet.create({});
