import { StatusBar, StyleSheet, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MainContent from "@/components/MainContent";
import { colors, Font } from "@/constants/theme";
import Iconify from "react-native-iconify";
import Text from "@/components/Text";
import Lines from "@/assets/images/lines.svg";
import { hexToRGBA } from "@/services/uiService";
import LottieView from "lottie-react-native";
import { Link, router } from "expo-router";
import ButtonUI from "@/components/Button";

const SignupCompletion = () => {
  const animation = useRef<LottieView>(null);
  useEffect(() => {
    StatusBar.setBackgroundColor(colors.GREEN);
    StatusBar.setTranslucent(true);
    StatusBar.setBarStyle("light-content");
    StatusBar.setHidden(false);
  }, []);
  return (
    <MainContent>
      <View style={styles.container}>
        <View
          style={{ gap: 24, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.topContainer}>
            <Iconify
              icon="solar:verified-check-bold"
              color={colors.WHITE}
              size={24}
            />
            <View
              style={{ gap: 4, alignItems: "center", justifyContent: "center" }}
            >
              <Text style={styles.topContainerHeaderText}>
                You're all set up
              </Text>
              <Text style={styles.topContainerSubText}>
                Great work! Let's keep it going
              </Text>
            </View>
          </View>
          <View style={styles.middleContainer}>
            <View style={styles.middleContainerOuter}>
              <View style={styles.middleContainerMiddle}>
                <View style={styles.middleContainerInner}>
                  <Lines />
                  <LottieView
                    autoPlay
                    ref={animation}
                    style={{
                      width: 300,
                      height: 200,
                      position: "absolute",
                      // backgroundColor: "red"
                    }}
                    source={require("../assets/animations/success.json")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomContainerText}>
              Now let's get a few health details about you to be able to
              personalise the experience and to get accurate results
            </Text>
          </View>
        </View>
        <View style={{ gap: 12 }}>
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
            onPress={() => router.push("/(health-assessment)")}
          />
          <Text style={styles.footerText}>
            <Link href="/signin">Skip for now</Link>
          </Text>
        </View>
      </View>
    </MainContent>
  );
};

export default SignupCompletion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.GREEN,
    gap: 32,
  },
  mainContainer: {
    gap: 24,
  },
  topContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  topContainerHeaderText: {
    fontFamily: Font.FontBold,
    fontSize: 30,
    lineHeight: 38,
    letterSpacing: -0.6,
    color: colors.WHITE,
    textAlign: "center",
  },
  topContainerSubText: {
    fontFamily: Font.FontMedium,
    fontSize: 18,
    lineHeight: 28.8,
    letterSpacing: -0.18,
    color: colors.WHITE,
    textAlign: "center",
  },

  middleContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  middleContainerOuter: {
    width: 286,
    height: 286,
    borderRadius: 1234,
    backgroundColor: hexToRGBA("#B4C48D", 0.32),
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  middleContainerMiddle: {
    width: "100%",
    height: "100%",
    borderRadius: 1234,
    backgroundColor: hexToRGBA("#B4C48D", 0.64),
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  middleContainerInner: {
    width: "100%",
    height: "100%",
    borderRadius: 1234,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },
  bottomContainer: {
    gap: 24,
  },
  bottomContainerText: {
    fontFamily: Font.FontRegular,
    fontSize: 16,
    lineHeight: 28.8,
    letterSpacing: -0.16,
    color: colors.WHITE,
    textAlign: "center",
    maxWidth: "70%",
  },
  footerText: {
    fontSize: 14,
    fontFamily: Font.FontBold,
    lineHeight: 28.8,
    letterSpacing: -0.18,
    textAlign: "center",
    color: hexToRGBA(colors.WHITE, 0.7),
  },
});
