import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MainContent from "@/components/MainContent";
import { styles as SignupStyles } from "../signup";
import { ErrorLabel, FormControl } from "@/components/Form";
import ButtonUI from "@/components/Button";
import { colors, Font } from "@/constants/theme";
import * as yup from "yup";
import { useFormik } from "formik";
import Iconify from "react-native-iconify";
import { router } from "expo-router";

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
        <Text style={styles.subText}>{gender.subText}</Text>
      </View>
      <View style={styles.genderIcon}>
        <Iconify
          icon={gender.value === "male" ? "famicons:male" : "famicons:female"}
          size={60}
          color={
            gender.value === formik.values.gender
              ? colors.PRIMARY
              : colors.ACCENT_FOREGROUND
          }
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <MainContent isPadded>
      <View style={styles.header}>
        <Text style={styles.headerText}>Select your gender</Text>
        <Text style={styles.subText}>
          Please answer truthfully so our AI we can assess better..
        </Text>
      </View>
      <View style={styles.formContainer}>
        <FormControl>
          <FormControl>
            <View style={styles.formItemContainer}>
              {genders.map((gender, index) => renderGenderItem(gender))}
            </View>

            {formik.touched?.gender && formik.errors?.gender && (
              <ErrorLabel>{formik.errors.gender}</ErrorLabel>
            )}
          </FormControl>
          <FormControl style={{ marginTop: 20 }}>
            <ButtonUI
              label="Continue"
              backgroundColor={colors.PRIMARY}
              onPress={formik.handleSubmit}
            />
          </FormControl>
        </FormControl>
      </View>
    </MainContent>
  );
};

export default Gender;

const styles = StyleSheet.create({
  ...SignupStyles,
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
    borderColor: colors.PRIMARY,
    backgroundColor: `${colors.PRIMARY}60`,
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
    gap: 10,
  },
});
