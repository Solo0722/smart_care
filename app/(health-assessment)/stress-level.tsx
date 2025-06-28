import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles as WeightAssessmentStyles } from "./index";
import { ProgressBar } from "@/components/ProgressBar";
import MainContent from "@/components/MainContent";
import { colors, Font } from "@/constants/theme";
import ButtonUI from "@/components/Button";
import Iconify from "react-native-iconify";
import { Link, router } from "expo-router";

const StressLevel = () => {
  return (
    <MainContent
      isPadded
      isSafeArea
      style={{ backgroundColor: colors.WHITE, flex: 1 }}
      showTopNav
      showTitle
      title={"Assessment"}
      // backBtnIconColor={colors.WHITE} backBtnStyle={{ borderColor: colors.WHITE }} titleStyle={{ color: colors.WHITE }}
      showBackButton
      toolbar={<ProgressBar currentStep={2} totalSteps={7} />}
    >
      <View style={styles.weightAssessmentContainer}>
        <Text style={styles.headerText}>
          How would you rate your stress level?
        </Text>
        <View style={{ gap: 8 }}>
          <ButtonUI
            label="Continue"
            backgroundColor={"#4B3425"}
            iconOnRight
            children={
              <Iconify
                icon="solar:arrow-right-bold"
                color={colors.WHITE}
                size={20}
                style={{ position: "absolute", right: 24 }}
              />
            }
            style={{
              paddingHorizontal: 24,
              paddingVertical: 16,
              borderRadius: 1000,
            }}
            labelStyle={{
              marginRight: 24,
              fontSize: 14,
              fontFamily: Font.FontBold,
            }}
            onPress={() => router.push("/(health-assessment)/blood-type")}
          />
          <Text style={styles.footerText}>
            <Link
              href="/(health-assessment)/blood-type"
              style={{ color: colors.ORANGE }}
            >
              Skip for now
            </Link>
          </Text>
        </View>
      </View>
    </MainContent>
  );
};

export default StressLevel;

const styles = StyleSheet.create({
  ...WeightAssessmentStyles,
});
