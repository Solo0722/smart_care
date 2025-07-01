import { StyleSheet, TouchableOpacity, View, TextInput } from "react-native";
import React, { useState } from "react";
import { styles as SigninStyles } from "../signin";
import MainContent from "@/components/MainContent";
import { ErrorLabel, FormControl } from "@/components/Form";
import ButtonUI from "@/components/Button";
import { colors, Font } from "@/constants/theme";
import { router } from "expo-router";
import { useFormik } from "formik";
import * as yup from "yup";
import Text from "@/components/Text";
import { ProgressBar } from "@/components/ProgressBar";
import AllergiesSvg from "@/assets/svgs/allergies.svg";
import Iconify from "react-native-iconify";
import { hexToRGBA } from "@/services/uiService";

export const medicalConditionsSchema = yup.object().shape({
  medicalConditions: yup.array().of(yup.string()).min(1).required(),
});
const MedicalConditions = () => {
  const formik = useFormik<{ medicalConditions: string[] }>({
    validationSchema: medicalConditionsSchema,
    initialValues: {
      medicalConditions: [],
    },
    onSubmit: () => router.push("/(health-assessment-setup)/medications"),
  });
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MainContent
      isPadded
      showTopNav
      showBackButton
      scroll
      keyboardAware
      toolbar={<ProgressBar currentStep={5} totalSteps={6} />}
    >
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Specify your{" "}
            <Text style={{ ...styles.headerText, color: colors.ORANGE }}>
              medical conditions
            </Text>{" "}
            or{" "}
            <Text style={{ ...styles.headerText, color: colors.ORANGE }}>
              allergies
            </Text>
          </Text>
          <Text style={styles.subHeaderText}>
            Please answer truthfully so our AI we can assess better
          </Text>
        </View>
        <View style={styles.formContainer}>
          <FormControl>
            <AllergiesSvg />
          </FormControl>
          <FormControl>
            <View
              style={{
                borderRadius: 16,
                padding: 16,
                backgroundColor: colors.LIGHT_GRAY,
                minHeight: 150,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                {formik.values.medicalConditions.map((cond, idx) => (
                  <View
                    key={idx}
                    style={{
                      backgroundColor: hexToRGBA(colors.TEAL, 0.1),
                      borderRadius: 8,
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      marginRight: 8,
                      marginBottom: 8,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: colors.TEAL,
                        fontSize: 9,
                        fontFamily: Font.FontBold,
                      }}
                    >
                      {cond}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        const newTags = formik.values.medicalConditions.filter(
                          (_, i) => i !== idx
                        );
                        formik.setFieldValue("medicalConditions", newTags);
                      }}
                      style={{ marginLeft: 6 }}
                    >
                      <Text
                        style={{
                          color: colors.ORANGE,
                          fontFamily: Font.FontBold,
                        }}
                      >
                        ×
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
                <TextInput
                  value={searchTerm}
                  onChangeText={setSearchTerm}
                  placeholder="Type and press Enter"
                  style={{ minWidth: 60, flex: 1, padding: 0 }}
                  onSubmitEditing={() => {
                    if (searchTerm.trim()) {
                      formik.setFieldValue("medicalConditions", [
                        ...formik.values.medicalConditions,
                        searchTerm.trim(),
                      ]);
                      setSearchTerm("");
                    }
                  }}
                  blurOnSubmit={false}
                  returnKeyType="done"
                />
              </View>
            </View>
            {formik.touched?.medicalConditions &&
              formik.errors?.medicalConditions && (
                <ErrorLabel>{formik.errors.medicalConditions}</ErrorLabel>
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

export default MedicalConditions;

const styles = StyleSheet.create({
  ...SigninStyles,
});
