import { Pressable, StatusBar, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import MainContent from "@/components/MainContent";
import { colors, Font } from "@/constants/theme";
import Input from "@/components/Input";
import ButtonUI from "@/components/Button";
import Text from "@/components/Text";
import { ErrorLabel, FormControl } from "@/components/Form";
import * as yup from "yup";
import { useFormik } from "formik";
import { Iconify } from "react-native-iconify";
import { Link, router } from "expo-router";
import { styles as SignInStyles } from "./signin";
import { hexToRGBA } from "@/services/uiService";
import { Checkbox } from "react-native-ui-lib";

const signupSchema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required(),
  termsAccepted: yup
    .bool()
    .oneOf([true], "You must accept the terms and conditions"),
});

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  useEffect(() => {
    StatusBar.setBackgroundColor(colors.WHITE);
    StatusBar.setTranslucent(true);
    StatusBar.setBarStyle("dark-content");
    StatusBar.setHidden(false);
  }, []);

  const formik = useFormik({
    validationSchema: signupSchema,
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      termsAccepted: false,
    },
    onSubmit: () => router.push("/(health-assessment-setup)"),
  });

  return (
    <MainContent style={{ backgroundColor: colors.WHITE, paddingBottom: 20 }}>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Sign up to{" "}
            <Text style={{ ...styles.headerText, color: colors.ORANGE }}>
              freud.ai
            </Text>
          </Text>
          <Text style={styles.subHeaderText}>
            Sign up to create an account and get started.
          </Text>
        </View>
        <View style={styles.formContainer}>
          <FormControl>
            <Input
              leadingAccessory={
                <Iconify
                  icon="solar:letter-outline"
                  style={{ marginRight: 10 }}
                  size={16}
                  color={colors.BLACK}
                />
              }
              placeholder="John Doe"
              label="Full Name"
              onChangeText={formik.handleChange("fullName")}
              onBlur={formik.handleBlur("fullName")}
              value={formik.values.fullName}
              labelStyle={styles.inputLabel}
              fieldStyle={styles.input}
              cursorColor={colors.BLACK}
              placeholderTextColor={hexToRGBA(colors.BLACK, 0.64)}
              dynamicFieldStyle={({ isFocused }) => ({
                outlineColor: isFocused ? colors.TEAL : colors.WHITE,
                outlineWidth: 1,
              })}
            />
            {formik.touched?.fullName && formik.errors?.fullName && (
              <ErrorLabel>{formik.errors.fullName}</ErrorLabel>
            )}
          </FormControl>
          <FormControl>
            <Input
              leadingAccessory={
                <Iconify
                  icon="solar:letter-outline"
                  style={{ marginRight: 10 }}
                  size={16}
                  color={colors.BLACK}
                />
              }
              placeholder="johndoe@gmail.com"
              label="Email Address"
              textContentType="emailAddress"
              onChangeText={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              value={formik.values.email}
              labelStyle={styles.inputLabel}
              fieldStyle={styles.input}
              cursorColor={colors.BLACK}
              placeholderTextColor={hexToRGBA(colors.BLACK, 0.64)}
              dynamicFieldStyle={({ isFocused }) => ({
                outlineColor: isFocused ? colors.TEAL : colors.WHITE,
                outlineWidth: 1,
              })}
            />
            {formik.touched?.email && formik.errors?.email && (
              <ErrorLabel>{formik.errors.email}</ErrorLabel>
            )}
          </FormControl>
          <FormControl>
            <Input
              leadingAccessory={
                <Iconify
                  icon="solar:lock-keyhole-outline"
                  style={{ marginRight: 10 }}
                  size={16}
                  color={colors.BLACK}
                />
              }
              trailingAccessory={
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Iconify
                    icon={
                      showPassword
                        ? "solar:eye-closed-outline"
                        : "solar:eye-outline"
                    }
                    size={16}
                    color={colors.BLACK}
                  />
                </Pressable>
              }
              placeholder="**********"
              label="Password"
              textContentType="password"
              onChangeText={formik.handleChange("password")}
              onBlur={formik.handleBlur("password")}
              value={formik.values.password}
              secureTextEntry={!showPassword}
              cursorColor={colors.BLACK}
              placeholderTextColor={hexToRGBA(colors.BLACK, 0.64)}
              labelStyle={styles.inputLabel}
              fieldStyle={styles.input}
              dynamicFieldStyle={({ isFocused }) => ({
                outlineColor: isFocused
                  ? hexToRGBA(colors.TEAL, 0.6)
                  : colors.WHITE,
                outlineWidth: 1,
              })}
            />
            {formik.touched?.password && formik.errors?.password && (
              <ErrorLabel>{formik.errors.password}</ErrorLabel>
            )}
          </FormControl>
          <FormControl>
            <Checkbox
              //@ts-expect-error from label
              label={
                <Text style={styles.checkboxLabel}>
                  I agree to the{" "}
                  <Text
                    style={{ color: colors.ORANGE, fontFamily: Font.FontBold }}
                  >
                    Terms of Service
                  </Text>{" "}
                  and{" "}
                  <Text
                    style={{ color: colors.ORANGE, fontFamily: Font.FontBold }}
                  >
                    Privacy Policy
                  </Text>
                </Text>
              }
              children={
                <Text style={styles.checkboxLabel}>
                  I agree to the{" "}
                  <Text style={{ color: colors.ORANGE }}>Terms of Service</Text>{" "}
                  and{" "}
                  <Text style={{ color: colors.ORANGE }}>Privacy Policy</Text>
                </Text>
              }
              value={formik.values.termsAccepted}
              onValueChange={() =>
                formik.setFieldValue(
                  "termsAccepted",
                  !formik.values.termsAccepted
                )
              }
              labelStyle={styles.checkboxLabel}
              style={styles.checkbox}
              color={colors.BLACK}
              onBlur={formik.handleBlur("termsAccepted")}
              iconColor={colors.BLACK}
              outline
            />
            {formik.touched?.termsAccepted && formik.errors?.termsAccepted && (
              <ErrorLabel>{formik.errors.termsAccepted}</ErrorLabel>
            )}
          </FormControl>
          <FormControl>
            <ButtonUI
              label="Sign up"
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
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={{ color: "#ddd" }}>OR</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.oAuthContainer}>
          <ButtonUI
            style={{
              ...styles.submitBtn,
              backgroundColor: colors.WHITE,
              borderWidth: 1,
              borderColor: colors.LIGHT_GRAY,
              boxShadow:
                "rgba(0, 0, 0, 0.1) 1px 1px 1px -1px, rgba(0, 0, 0, 0.06) 1px 1px 1px -1px",
              width: "100%",
            }}
            labelStyle={{
              marginLeft: 24,
              fontSize: 14,
              fontFamily: Font.FontBold,
              color: colors.BLACK,
            }}
            backgroundColor={colors.WHITE}
            label="Continue with google"
            children={<Iconify icon="logos:google-icon" size={20} />}
          />
        </View>
      </View>
      <View>
        <Text style={styles.footerLinkText}>
          Already have an account?{" "}
          <Link href="/signin" style={{ color: colors.ORANGE }}>
            Sign in
          </Link>
        </Text>
      </View>
    </MainContent>
  );
};

export default Signup;

const styles = StyleSheet.create({
  ...SignInStyles,
  checkbox: {
    borderColor: colors.BLACK,
    borderRadius: 1000,
  },
  checkboxLabel: {
    fontSize: 14,
    fontFamily: Font.FontBold,
    color: colors.BLACK,
    marginLeft: 8,
    flexShrink: 1,
  },
});
