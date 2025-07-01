import { Pressable, StatusBar, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import MainContent from "@/components/MainContent";
import { colors, Font } from "@/constants/theme";
import Text from "@/components/Text";

import { ErrorLabel, FormControl } from "@/components/Form";
import Input from "@/components/Input";
import ButtonUI from "@/components/Button";
import { Link } from "expo-router";
import Iconify from "react-native-iconify";
import { useFormik } from "formik";
import * as yup from "yup";
import { hexToRGBA } from "@/services/uiService";

const signinSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Signin = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  useEffect(() => {
    StatusBar.setBackgroundColor(colors.WHITE);
    StatusBar.setTranslucent(true);
    StatusBar.setBarStyle("dark-content");
    StatusBar.setHidden(false);
  }, []);

  const formik = useFormik({
    validationSchema: signinSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => console.log("okay"),
  });

  return (
    <MainContent isPadded keyboardAware>
      <View style={{ ...styles.mainContainer, justifyContent: "center" }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Sign in to{" "}
            <Text style={{ ...styles.headerText, color: colors.ORANGE }}>
              freud.ai
            </Text>
          </Text>
          <Text style={styles.subHeaderText}>
            Sign in to continue from where you left off.
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
                outlineColor: isFocused ? colors.TEAL : colors.WHITE,
                outlineWidth: 1,
              })}
            />
            {formik.touched?.password && formik.errors?.password && (
              <ErrorLabel>{formik.errors.password}</ErrorLabel>
            )}
          </FormControl>
          <FormControl>
            <ButtonUI
              label="Sign in"
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
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={{ color: "#ddd", fontSize: 10 }}>OR</Text>
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
      </View>
      <View style={{ gap: 5 }}>
        <Text style={styles.footerLinkText}>
          Don't have an account?{" "}
          <Link href="/signup" style={{ color: colors.ORANGE }}>
            Sign up
          </Link>
        </Text>
        <Text style={{ ...styles.footerLinkText, color: colors.ORANGE }}>
          <Link href="/forgot-password">Forgot Password?</Link>
        </Text>
      </View>
    </MainContent>
  );
};

export default Signin;

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    gap: 48,
    width: "100%",
  },
  headerContainer: {
    gap: 6,
    width: "100%",
  },
  headerText: {
    // textAlign: "center",
    fontFamily: Font.FontBold,
    fontSize: 30,
    lineHeight: 38,
    letterSpacing: -0.6,
    color: colors.BLACK,
  },
  subHeaderText: {
    // maxWidth: "80%",
    fontFamily: Font.FontRegular,
    fontSize: 18,
    lineHeight: 28.8,
    letterSpacing: -0.18,
    color: colors.GRAY,
    // textAlign: "center",
  },
  formContainer: {
    gap: 24,
    width: "100%",
  },
  footerText: {
    fontSize: 10,
    color: "#666",
    textAlign: "center",
  },
  inputLabel: {
    fontFamily: Font.FontBold,
    fontSize: 14,
    color: colors.BLACK,
    letterSpacing: -0.14,
  },
  input: {
    // backgroundColor: colors.WHITE,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    color: colors.BLACK,
    fontFamily: Font.FontBold,
    fontSize: 14,
  },
  submitBtn: {
    borderRadius: 12,
    backgroundColor: colors.TEAL,
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  footerLinkText: {
    fontSize: 14,
    fontFamily: Font.FontBold,
    lineHeight: 28.8,
    letterSpacing: -0.18,
    textAlign: "center",
    color: hexToRGBA("#1F160F", 0.64),
  },
  oAuthContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  oAuthBtn: {
    borderRadius: 1234,
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8DDD9",
  },
  dividerContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    overflowX: "hidden",
  },
  divider: {
    backgroundColor: "#ddd",
    height: 1,
    flexGrow: 1,
  },
});
