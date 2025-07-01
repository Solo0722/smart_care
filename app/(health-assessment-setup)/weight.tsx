import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainContent from "@/components/MainContent";
import { styles as SigninStyles } from "../signin";
import { ErrorLabel, FormControl } from "@/components/Form";
import ButtonUI from "@/components/Button";
import { colors, Font } from "@/constants/theme";
import * as yup from "yup";
import { useFormik } from "formik";
import { BlurView as _BlurView } from "expo-blur";
import Input from "@/components/Input";
import { router } from "expo-router";
import { ProgressBar } from "@/components/ProgressBar";
import Iconify from "react-native-iconify";

export const weightSchema = yup.object().shape({
  weight: yup.string().required(),
});

const Weight = () => {
  const formik = useFormik({
    validationSchema: weightSchema,
    initialValues: {
      weight: "",
    },
    onSubmit: () => router.push("/(health-assessment-setup)/blood-type"),
  });

  return (
    <MainContent
      isPadded
      showTopNav
      showBackButton
      keyboardAware
      toolbar={<ProgressBar currentStep={3} totalSteps={6} />}
    >
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Select your{" "}
            <Text style={{ ...styles.headerText, color: colors.ORANGE }}>
              weight
            </Text>
          </Text>
          <Text style={styles.subHeaderText}>
            Please answer truthfully so our AI we can assess better
          </Text>
        </View>
        <View style={styles.formContainer}>
          <FormControl>
            <Input
              placeholder="53"
              label="Your weight"
              textContentType="telephoneNumber"
              keyboardType="decimal-pad"
              onChangeText={formik.handleChange("weight")}
              onBlur={formik.handleBlur("weight")}
              value={formik.values.weight}
              trailingAccessory={<Text>KG</Text>}
            />
            {formik.touched?.weight && formik.errors?.weight && (
              <ErrorLabel>{formik.errors.weight}</ErrorLabel>
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

export default Weight;

const styles = StyleSheet.create({
  ...SigninStyles,
});
