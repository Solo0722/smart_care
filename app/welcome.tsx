import React, { useEffect } from "react";
import MainContent from "@/components/MainContent";
import { StatusBar, StyleSheet, View } from "react-native";
import { Link, useNavigation, useRouter } from "expo-router";
import { colors, Font } from "@/constants/theme";
import Text from "@/components/Text";
import { hexToRGBA } from "@/services/uiService";
import Toy from "@/assets/images/toy.svg";
import ButtonUI from "@/components/Button";
import Iconify from "react-native-iconify";

const Welcome = () => {
  const router = useRouter();
  const navigation = useNavigation();
  useEffect(() => {
    StatusBar.setBackgroundColor(colors.WHITE);
    StatusBar.setTranslucent(true);
    StatusBar.setBarStyle("dark-content");
    StatusBar.setHidden(false);
  }, []);
  return (
    <MainContent isPadded>
      <View style={styles.welcomeContainer}>
        <View style={styles.topContainer}>
          <Toy />
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              Welcome to the ultimate{" "}
              <Text style={{ ...styles.headerText, color: colors.ORANGE }}>
                freud
              </Text>{" "}
              AI experience!
            </Text>
            <Text style={styles.subText}>
              Your intelligent smart health AI companion for everyone, anywhere
              🍃
            </Text>
          </View>
        </View>
        <ButtonUI
          label="Get Started"
          backgroundColor={colors.TEAL}
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
          onPress={() => router.push("/signup")}
        />
      </View>
      <Text style={styles.footerText}>
        Already have an account?{" "}
        <Link href="/signin" style={{ color: colors.ORANGE }}>
          Sign in
        </Link>
      </Text>
    </MainContent>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
  topContainer: {
    gap: 16,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    gap: 16,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  headerText: {
    fontSize: 30,
    fontFamily: Font.FontBold,
    lineHeight: 38,
    letterSpacing: -0.6,
    textAlign: "center",
    color: "#000",
  },
  subText: {
    fontFamily: Font.FontRegular,
    fontSize: 18,
    lineHeight: 28.8,
    letterSpacing: -0.18,
    color: hexToRGBA(colors.BLACK, 0.64),
    textAlign: "center",
  },
  footerText: {
    fontSize: 14,
    fontFamily: Font.FontBold,
    lineHeight: 28.8,
    letterSpacing: -0.18,
    textAlign: "center",
    color: hexToRGBA(colors.BLACK, 0.64),
  },
});
