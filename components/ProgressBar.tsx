import { colors, Font } from "@/constants/theme";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${currentStep} OF ${totalSteps}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LIGHT_GRAY,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.GRAY,
    fontFamily: Font.FontExtraBold,
    fontSize: 12,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
});
