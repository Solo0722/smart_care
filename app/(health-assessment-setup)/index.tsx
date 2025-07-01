import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MainContent from "@/components/MainContent";
import { styles as SigninStyles } from "../signin";
import { ErrorLabel, FormControl } from "@/components/Form";
import ButtonUI from "@/components/Button";
import { colors, Font } from "@/constants/theme";
import * as yup from "yup";
import { useFormik } from "formik";
import Iconify from "react-native-iconify";
import { router } from "expo-router";
import { ProgressBar } from "@/components/ProgressBar";

export const genderSchema = yup.object().shape({
  gender: yup.string().oneOf(["male", "female"]).required(),
});

type GenderProps = {
  label: string;
  subText: string;
  value: string;
};

const Gender = () => {
  const formik = useFormik({
    validationSchema: genderSchema,
    initialValues: {
      gender: "",
    },
    onSubmit: () => router.push("/(health-assessment-setup)/date-of-birth"),
  });

  const genders: GenderProps[] = [
    { label: "Male", subText: "XY Chromosomes", value: "male" },
    { label: "Female", subText: "XX Chromosomes", value: "female" },
  ];

  const renderGenderItem = (gender: GenderProps) => (
    <TouchableOpacity
      style={[
        styles.genderItemContainer,
        gender.value === formik.values.gender &&
          styles.genderItemSelectedContainer,
      ]}
      key={gender.value}
      onPress={() => formik.setFieldValue("gender", gender.value)}
    >
      <View>
        <Text style={styles.genderText}>{gender.label}</Text>
        <Text>{gender.subText}</Text>
      </View>
      <View style={styles.genderIcon}>
        <Iconify
          icon={gender.value === "male" ? "famicons:male" : "famicons:female"}
          size={60}
          color={
            gender.value === formik.values.gender ? colors.ORANGE : colors.BLACK
          }
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <MainContent
      isPadded
      showTopNav
      toolbar={<ProgressBar currentStep={1} totalSteps={7} />}
    >
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Select your{" "}
            <Text style={{ ...styles.headerText, color: colors.ORANGE }}>
              gender
            </Text>
          </Text>
          <Text style={styles.subHeaderText}>
            Please answer truthfully so our AI we can assess better
          </Text>
        </View>
        <View style={styles.formContainer}>
          <FormControl>
            <View style={styles.formItemContainer}>
              {genders.map((gender) => renderGenderItem(gender))}
            </View>

            {formik.touched?.gender && formik.errors?.gender && (
              <ErrorLabel>{formik.errors.gender}</ErrorLabel>
            )}
          </FormControl>
          <FormControl>
            <ButtonUI
              label="Continue"
              backgroundColor={colors.TEAL}
              onPress={formik.handleSubmit}
              style={styles.submitBtn}
              labelStyle={{
                marginRight: 24,
                fontSize: 14,
                fontFamily: Font.FontBold,
              }}
              children={
                <Iconify
                  icon="solar:arrow-right-bold"
                  color={colors.WHITE}
                  size={20}
                  style={{ position: "absolute", right: 24 }}
                />
              }
            />
          </FormControl>
        </View>
      </View>
    </MainContent>
  );
};

export default Gender;

const styles = StyleSheet.create({
  ...SigninStyles,
  genderItemContainer: {
    flex: 1,
    height: 220,
    padding: 16,
    borderRadius: 24,
    gap: 10,
    backgroundColor: colors.LIGHT_GRAY,
    justifyContent: "flex-end",
  },
  genderItemSelectedContainer: {
    borderWidth: 1,
    borderColor: colors.ORANGE,
    backgroundColor: `${colors.ORANGE}60`,
  },
  genderText: {
    fontFamily: Font.FontBold,
  },
  genderIcon: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  formItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
});
