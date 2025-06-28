import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import MainContent from "@/components/MainContent";
import Text from "@/components/Text";
import { colors, Font } from "@/constants/theme";
import { ProgressBar } from "@/components/ProgressBar";
import ButtonUI from "@/components/Button";
import { hexToRGBA } from "@/services/uiService";
import { Link, router } from "expo-router";
import Iconify from "react-native-iconify";
import ProfileArc from "@/assets/images/profile-arc.svg";
import MeasurementWeight from "@/assets/images/measurements.svg";

const WeightAssessment = () => {
  const units = ["kg", "lbs"];
  const [selectedUnit, setSelectedUnit] = React.useState(units[0]);
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
      toolbar={<ProgressBar currentStep={1} totalSteps={7} />}
    >
      {/* <ProfileArc style={{ width: "100%", position: "absolute", top: 0, left: 0 }} /> */}
      <View style={styles.weightAssessmentContainer}>
        <Text style={styles.headerText}>What's your weight?</Text>
        <View style={styles.weightPickerContainer}>
          <View style={styles.weightUnitsContainer}>
            {units.map((unit, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  ...styles.weightUnitItem,
                  backgroundColor:
                    unit === selectedUnit ? colors.WHITE : "transparent",
                }}
                onPress={() => setSelectedUnit(unit)}
              >
                <Text style={styles.weightUnitItemText}>{unit}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.weightDisplayAndInputContainer}>
            <View style={styles.weightDisplayContainer}>
              <Text style={styles.weightDisplayText}>128</Text>
              <Text style={styles.weightDisplayUnitText}>{selectedUnit}</Text>
            </View>
            <View>
              <MeasurementWeight style={{ marginLeft: -22 }} />
            </View>
          </View>
        </View>
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

export default WeightAssessment;

export const styles = StyleSheet.create({
  weightAssessmentContainer: {
    gap: 64,
    // marginTop: "auto"
  },
  headerText: {
    fontSize: 30,
    fontFamily: Font.FontBold,
    lineHeight: 38,
    letterSpacing: -0.9,
    textAlign: "center",
    color: colors.BLACK,
  },
  weightPickerContainer: {
    gap: 32,
  },
  weightUnitsContainer: {
    padding: 4,
    borderRadius: 1234,
    flexDirection: "row",
    backgroundColor: "#E8DDD9",
    alignItems: "center",
    justifyContent: "center",
  },
  weightUnitItem: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 1234,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  weightUnitItemText: {
    fontFamily: Font.FontBold,
    fontSize: 14,
    color: colors.BLACK,
    lineHeight: 20,
    letterSpacing: -0.182,
  },
  footerText: {
    fontSize: 14,
    fontFamily: Font.FontBold,
    lineHeight: 28.8,
    letterSpacing: -0.18,
    textAlign: "center",
    color: colors.ORANGE,
  },
  weightDisplayAndInputContainer: {
    gap: 24,
  },
  weightDisplayContainer: {
    gap: 4,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  weightDisplayText: {
    fontSize: 96,
    fontFamily: Font.FontExtraBold,
    lineHeight: 104,
    letterSpacing: -4.8,
    textAlign: "center",
    color: colors.BLACK,
  },
  weightDisplayUnitText: {
    fontSize: 36,
    fontFamily: Font.FontSemibold,
    lineHeight: 44,
    letterSpacing: -1.08,
    textAlign: "center",
    color: hexToRGBA("#1F160F", 0.64),
    marginBottom: 10,
  },
});
