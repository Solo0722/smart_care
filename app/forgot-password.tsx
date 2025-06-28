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
import { styles as SignInStyles } from "./signin";

const signinSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const ForgotPassword = () => {
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
    <MainContent style={{ backgroundColor: colors.WHITE, paddingBottom: 20 }}>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Forgot your{" "}
            <Text style={{ ...styles.headerText, color: colors.ORANGE }}>
              password?
            </Text>
          </Text>
          <Text style={styles.subHeaderText}>
            Enter your email and we'll send you a link to reset your password
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
            <ButtonUI
              label="Send"
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
      <View style={{ gap: 5 }}>
        <Text style={styles.footerLinkText}>
          Remember your password?{" "}
          <Link href="/signin" style={{ color: colors.ORANGE }}>
            Sign in
          </Link>
        </Text>
      </View>
    </MainContent>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  ...SignInStyles,
});
