import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MainContent from "@/components/MainContent";
import { colors, Font } from "@/constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { hexToRGBA } from "@/services/uiService";
import Iconify from "react-native-iconify";
import ButtonUI from "@/components/Button";
import { router } from "expo-router";

const AvatarSetup = () => {
  const insets = useSafeAreaInsets();
  return (
    <MainContent
      isPadded
      isSafeArea
      showTopNav
      showTitle
      title="Avatar Setup"
      style={{ backgroundColor: colors.WHITE }}
    >
      <View style={styles.avatarSetupContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Select Your Avatar</Text>
          <Text style={styles.headerSubText}>
            We have a set of customizable avatar. Or you can upload your own
            image from your local file.
          </Text>
        </View>
        <View style={styles.uploadContainer}>
          <TouchableOpacity style={styles.uploadBtn}>
            <Iconify
              icon="solar:add-circle-bold"
              color={colors.BLACK}
              size={16}
            />
          </TouchableOpacity>
          <Text style={styles.uploadText}>Or upload your avatar</Text>
        </View>
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
          onPress={() => router.push("/signup-completion")}
        />
      </View>
    </MainContent>
  );
};

export default AvatarSetup;

const styles = StyleSheet.create({
  avatarSetupContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 32,
    gap: 40,
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  headerText: {
    fontSize: 24,
    fontFamily: Font.FontBold,
    color: colors.BLACK,
    letterSpacing: -0.24,
    textAlign: "center",
  },
  headerSubText: {
    fontSize: 16,
    fontFamily: Font.FontRegular,
    color: hexToRGBA("#1F160F", 0.64),
    letterSpacing: -0.16,
    lineHeight: 28.8,
    textAlign: "center",
    maxWidth: "70%",
  },
  uploadContainer: {
    gap: 16,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadBtn: {
    width: 96,
    height: 96,
    borderRadius: 1234,
    borderColor: colors.BLACK,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
  },
  uploadText: {
    color: hexToRGBA("#1F160F", 0.48),
    fontSize: 16,
    fontFamily: Font.FontBold,
    letterSpacing: -0.16,
    textAlign: "center",
  },
});
