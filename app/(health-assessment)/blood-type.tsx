import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles as WeightAssessmentStyles } from "./index";
import { ProgressBar } from "@/components/ProgressBar";
import MainContent from "@/components/MainContent";
import { colors, Font } from "@/constants/theme";
import ButtonUI from "@/components/Button";
import Iconify from "react-native-iconify";
import { Link, router } from "expo-router";
import * as yup from "yup";
import { useFormik } from "formik";
import { hexToRGBA } from "@/services/uiService";

type bloodTypeProps = {
  label: string;
  subText: string;
  value: string;
};

const bloodTypes: bloodTypeProps[] = [
  { label: "A-", subText: "-", value: "a-" },
  { label: "A+", subText: "+", value: "a+" },
  { label: "B-", subText: "-", value: "b-" },
  { label: "B+", subText: "+", value: "b+" },
  { label: "O-", subText: "-", value: "o-" },
  { label: "O+", subText: "+", value: "o+" },
  { label: "AB-", subText: "-", value: "ab-" },
  { label: "AB+", subText: "+", value: "ab+" },
];
const bloodTypeLetters = ["A", "B", "O", "AB"];
export const bloodTypeSchema = yup.object().shape({
  bloodType: yup
    .string()
    .oneOf(["a-", "a+", "b-", "b+", "o-", "o+", "ab-", "ab+"])
    .required(),
});

const BloodType = () => {
  const [selectedBloodTypeLetter, setSelectedBloodTypeLetter] =
    React.useState<string>("A");
  const [selectedBloodTypeSubText, setSelectedBloodTypeSubText] =
    React.useState<string>("+");
  const formik = useFormik({
    validationSchema: bloodTypeSchema,
    initialValues: {
      bloodType: "",
    },
    onSubmit: () =>
      router.push("/(health-assessment-setup)/medical-conditions"),
  });

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
        <Text style={styles.headerText}>What's your official blood type?</Text>
        <View style={styles.weightPickerContainer}>
          <View style={styles.weightUnitsContainer}>
            {bloodTypeLetters.map((bloodType, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  ...styles.weightUnitItem,
                  backgroundColor:
                    bloodType === selectedBloodTypeLetter
                      ? colors.WHITE
                      : "transparent",
                }}
                onPress={() => setSelectedBloodTypeLetter(bloodType)}
              >
                <Text style={styles.weightUnitItemText}>
                  {bloodType.toUpperCase()}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.weightDisplayAndInputContainer}>
            <View style={styles.weightDisplayContainer}>
              <Text style={styles.bloodTypeLetterText}>
                {selectedBloodTypeLetter.toUpperCase()}
              </Text>
              <Text style={styles.weightDisplayUnitText}>
                {selectedBloodTypeSubText}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 8,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {["+", "-"].map((subText, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    ...styles.weightUnitItem,
                    ...(selectedBloodTypeSubText === subText
                      ? styles.selectedBloodTypeSubTextItem
                      : styles.bloodTypeSubTextItem),
                  }}
                  onPress={() => setSelectedBloodTypeSubText(subText)}
                >
                  <Text
                    style={{
                      ...styles.weightUnitItemText,
                      ...(subText === selectedBloodTypeSubText
                        ? styles.selectedSubText
                        : {}),
                    }}
                  >
                    {subText}
                  </Text>
                </TouchableOpacity>
              ))}
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

export default BloodType;

const styles = StyleSheet.create({
  ...WeightAssessmentStyles,
  weightDisplayAndInputContainer: {
    gap: 32,
  },
  weightDisplayContainer: {
    ...WeightAssessmentStyles.weightDisplayContainer,
    alignItems: "center",
  },
  bloodTypeLetterText: {
    ...WeightAssessmentStyles.weightDisplayText,
    fontSize: 180,
    fontFamily: Font.FontExtraBold,
    letterSpacing: -12.6,
    lineHeight: 188,
  },
  bloodTypeSubTextItem: {
    borderWidth: 4,
    borderColor: colors.WHITE,
    backgroundColor: colors.WHITE,
  },
  selectedBloodTypeSubTextItem: {
    backgroundColor: colors.GREEN,
    borderWidth: 4,
    borderColor: hexToRGBA("#9BB068", 0.25),
  },
  selectedSubText: {
    color: colors.WHITE,
    fontSize: 20,
    fontFamily: Font.FontBold,
  },
});
