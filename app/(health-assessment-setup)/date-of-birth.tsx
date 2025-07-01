import { StyleSheet, View } from "react-native";
import React from "react";
import * as yup from "yup";
import MainContent from "@/components/MainContent";
import { styles as SigninStyles } from "../signin";
import { ErrorLabel, FormControl } from "@/components/Form";
import Input from "@/components/Input";
import ButtonUI from "@/components/Button";
import { router } from "expo-router";
import { useFormik } from "formik";
import { colors, Font } from "@/constants/theme";
import { DateTimePicker } from "react-native-ui-lib";
import moment from "moment";
import Text from "@/components/Text";
import Iconify from "react-native-iconify";
import { ProgressBar } from "@/components/ProgressBar";

const schema = yup.object().shape({
  dateOfBirth: yup.date().required("Date of birth is required"),
});

const DateOfBirth = () => {
  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      dateOfBirth: "",
    },
    onSubmit: () => {
      router.push("/(health-assessment-setup)/weight");
    },
  });

  return (
    <MainContent
      isPadded
      showTopNav
      showBackButton
      toolbar={<ProgressBar currentStep={2} totalSteps={6} />}
    >
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Select your{" "}
            <Text style={{ ...styles.headerText, color: colors.ORANGE }}>
              date of birth
            </Text>
          </Text>
          <Text style={styles.subHeaderText}>
            Please answer truthfully so our AI we can assess better
          </Text>
        </View>
        <View style={styles.formContainer}>
          <FormControl>
            <DateTimePicker
              migrateDialog
              containerStyle={{ marginVertical: 20 }}
              renderInput={({ value }) => (
                <Input
                  value={value}
                  placeholder={moment().format("MMM D, YYYY")}
                />
              )}
              mode={"date"}
              onChange={(value: Date) =>
                formik.setFieldValue("dateOfBirth", value)
              }
              dateTimeFormatter={(value: Date) =>
                moment(value).format("MMM D, YYYY")
              }
            />
            {formik.touched?.dateOfBirth && formik.errors?.dateOfBirth && (
              <ErrorLabel>{formik.errors.dateOfBirth}</ErrorLabel>
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

export default DateOfBirth;

const styles = StyleSheet.create({
  ...SigninStyles,
});
