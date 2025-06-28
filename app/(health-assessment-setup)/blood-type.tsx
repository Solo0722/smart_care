import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MainContent from "@/components/MainContent";
import { styles as SignupStyles } from "../signup";
import { ErrorLabel, FormControl } from "@/components/Form";
import ButtonUI from "@/components/Button";
import { colors, Font } from "@/constants/theme";
import * as yup from "yup";
import { useFormik } from "formik";
import Iconify from "react-native-iconify";
import Carousel from "react-native-reanimated-carousel";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { BlurView as _BlurView } from "expo-blur";
import { parallaxLayout } from "@/services/uiService";
import { router } from "expo-router";

const BlurView = Animated.createAnimatedComponent(_BlurView);

export const bloodTypeSchema = yup.object().shape({
  bloodType: yup
    .string()
    .oneOf(["a-", "a+", "b-", "b+", "o-", "o+", "ab-", "ab+"])
    .required(),
});

type bloodTypeProps = {
  label: string;
  subText: string;
  value: string;
};

const WINDOW_WIDTH = Dimensions.get("window").width;

const BloodType = () => {
  const formik = useFormik({
    validationSchema: bloodTypeSchema,
    initialValues: {
      bloodType: "",
    },
    onSubmit: () =>
      router.push("/(health-assessment-setup)/medical-conditions"),
  });

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

  const renderbloodTypeItem = (
    bloodType: bloodTypeProps,
    animationValue: SharedValue<number>
  ) => {
    const animatedStyle = useAnimatedStyle(() => {
      const scale = interpolate(
        animationValue.value,
        [-1, 0, 1],
        [0.8, 1, 0.8]
      );
      return { transform: [{ scale }] };
    });
    return (
      <Animated.View
        style={[
          styles.bloodTypeItemContainer,
          animatedStyle,
          bloodType.value === formik.values.bloodType &&
            styles.bloodTypeItemSelectedContainer,
        ]}
        key={bloodType.value}
      >
        <TouchableOpacity
          onPress={() => formik.setFieldValue("bloodType", bloodType.value)}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.bloodTypeText}>
              {bloodType.label.substring(0, bloodType.label.length - 1)}
            </Text>
            <Text
              style={{
                color: "#F43F5E",
                fontSize: 50,
                fontFamily: Font.FontBold,
                marginTop: 20,
              }}
            >
              {bloodType.subText}
            </Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };
  const progress = useSharedValue<number>(0);

  return (
    <MainContent isPadded>
      <View style={styles.header}>
        <Text style={styles.headerText}>Select your blood type</Text>
        <Text style={styles.subText}>
          Please answer truthfully so our AI we can assess better..
        </Text>
      </View>
      <View style={styles.formContainer}>
        <FormControl>
          <FormControl>
            <View style={styles.formItemContainer}>
              <Carousel
                loop={true}
                style={{
                  width: WINDOW_WIDTH,
                  height: 240,
                  marginLeft: -20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                width={WINDOW_WIDTH / 2}
                data={bloodTypes}
                renderItem={({ item, index, animationValue }) => {
                  return renderbloodTypeItem(item, animationValue);
                }}
              />
            </View>

            {formik.touched?.bloodType && formik.errors?.bloodType && (
              <ErrorLabel>{formik.errors.bloodType}</ErrorLabel>
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

export default BloodType;

const styles = StyleSheet.create({
  ...SignupStyles,
  bloodTypeItemContainer: {
    flex: 1,
    height: 190,
    minWidth: 150,
    padding: 16,
    borderRadius: 24,
    gap: 10,
    backgroundColor: colors.LIGHT_GRAY,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  bloodTypeItemSelectedContainer: {
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    backgroundColor: `${colors.PRIMARY}60`,
  },
  bloodTypeText: {
    fontFamily: Font.FontBold,
    fontSize: 100,
    color: colors.FOREGROUND,
    lineHeight: 188,
    letterSpacing: -0.7,
  },
  bloodTypeIcon: {
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
