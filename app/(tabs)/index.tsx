import React from "react";
import MainContent from "@/components/MainContent";
import Iconify from "react-native-iconify";
import { colors, Font } from "@/constants/theme";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Text from "@/components/Text";

const HomeTopNav = () => (
  <View style={styles.toolbarContainer}>
    <TouchableOpacity style={styles.iconBtn}>
      <Iconify icon="solar:bell-outline" size={22} color={colors.TEAL} />
    </TouchableOpacity>
    <View style={{ flex: 1, marginLeft: 10 }}>
      <Text style={styles.greetingText}>Good Morning 👋</Text>
      <Text style={styles.subText}>Welcome back!</Text>
    </View>
    <TouchableOpacity>
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
        style={styles.avatar}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  toolbarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
    paddingVertical: 2,
    marginBottom: 8,
    marginTop: 8,
  },
  iconBtn: {
    backgroundColor: colors.LIGHT_GRAY,
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  greetingText: {
    fontFamily: Font.FontSemibold,
    fontSize: 16,
    color: colors.BLACK,
  },
  subText: {
    fontFamily: Font.FontRegular,
    fontSize: 12,
    color: colors.GRAY,
    marginTop: 2,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: colors.LIGHT_GRAY,
  },
});

const Home = () => {
  return (
    <MainContent
      isPadded
      isSafeArea
      showTopNav
      showTitle
      toolbar={<HomeTopNav />}
    ></MainContent>
  );
};

export default Home;
