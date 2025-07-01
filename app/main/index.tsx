import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import MainContent from "@/components/MainContent";
import Text from "@/components/Text";
import { styles as SigninStyles } from "@/app/signin";
import { colors, Font } from "@/constants/theme";
import Iconify from "react-native-iconify";

const Home = () => {
  return (
    <MainContent
      isPadded
      scroll
      keyboardAware
      showTopNav
      toolbar={<TopNav />}
      topNavStyles={{
        marginBottom: 30,
      }}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          Good{" "}
          <Text style={{ ...styles.headerText, color: colors.ORANGE }}>
            morning
          </Text>
        </Text>
        <Text style={styles.subHeaderText}>
          How can I make you feel better today?
        </Text>
      </View>
    </MainContent>
  );
};

export default Home;

const TopNav = () => {
  return (
    <View style={styles.topNavContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
          style={styles.avatar}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.nameText}>John Doe</Text>
          <Text style={styles.emailText}>john.doe@email.com</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.iconBtn}>
        <Iconify
          icon="solar:calendar-mark-bold"
          size={24}
          color={colors.GRAY}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ...SigninStyles,
  topNavContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.LIGHT_GRAY,
  },
  nameText: {
    fontFamily: Font.FontSemibold,
    fontSize: 15,
    color: colors.BLACK,
  },
  emailText: {
    fontFamily: Font.FontRegular,
    fontSize: 11,
    color: colors.GRAY,
    marginTop: 2,
  },
  iconBtn: {
    backgroundColor: colors.LIGHT_GRAY,
    borderRadius: 8,
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
