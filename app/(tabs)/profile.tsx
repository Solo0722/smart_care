import {
  DefaultSectionT,
  Dimensions,
  SectionList,
  SectionListData,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import MainContent from "@/components/MainContent";
import { Avatar, Switch } from "react-native-ui-lib";
import Iconify from "react-native-iconify";
import ButtonUI from "@/components/Button";
import { colors, Font } from "@/constants/theme";
import Text from "@/components/Text";

type SectionItem = {
  title: string;
  subTitle?: string;
  icon?: string;
  trailingAccessory?: React.ReactNode;
  showTrailingAccessory?: boolean;
  onPress?: () => void;
  color?: string;
};

const Profile = () => {
  const sectionList: SectionListData<SectionItem, DefaultSectionT>[] = [
    {
      title: "My account",
      data: [
        {
          title: "Personal info",
          showTrailingAccessory: true,
          icon: "solar:user-id-outline",
        },
        {
          title: "Health records",
          showTrailingAccessory: true,
          icon: "solar:medical-kit-outline",
        },
      ],
    },
    {
      title: "Settings and preferences",
      data: [
        {
          title: "Notifications",
          showTrailingAccessory: true,
          icon: "solar:bell-outline",
        },
        {
          title: "Language",
          showTrailingAccessory: true,
          icon: "solar:global-outline",
        },
        {
          title: "Dark mode",
          showTrailingAccessory: true,
          icon: "solar:moon-outline",
          trailingAccessory: (
            <Switch style={{ backgroundColor: colors.PRIMARY }} value={true} />
          ),
        },
      ],
    },
    {
      title: "About us",
      data: [
        {
          title: "Help center",
          showTrailingAccessory: true,
          icon: "solar:question-square-outline",
        },
        {
          title: "Report a bug",
          showTrailingAccessory: true,
          icon: "solar:flag-outline",
        },
        {
          title: "Rate us",
          showTrailingAccessory: true,
          icon: "solar:like-outline",
        },
        {
          title: "Privacy policy",
          showTrailingAccessory: true,
          icon: "solar:shield-keyhole-outline",
        },
        {
          title: "Terms & conditions",
          showTrailingAccessory: true,
          icon: "solar:diploma-verified-outline",
        },
      ],
    },
  ];

  const logoutItem = {
    title: "Log out",
    icon: "solar:logout-3-outline",
    onPress: () => console.log("logout"),
    showTrailingAccessory: false,
    color: "red",
  };

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <View style={styles.avatarContainer}>
        <Avatar
          size={100}
          backgroundColor={colors.PRIMARY}
          source={{
            uri: "https://a0.anyrgb.com/pngimg/226/368/user-profile-profile-avatar-heroes-user-male-silhouette-monochrome-black-icons.png",
          }}
        />
        <TouchableOpacity style={styles.avatarPlusBtn}>
          <Iconify icon="solar:pen-outline" color={colors.WHITE} size={12} />
        </TouchableOpacity>
      </View>
      <Text style={styles.nameText}>SOLOMON OWUSU-ANSAH</Text>
      <View style={styles.emailContainer}>
        <Iconify icon="solar:verified-check-bold" color="#08ce07" size={20} />
        <Text style={styles.emailText}>owusuansahsolomon39@gmail.com</Text>
        <TouchableOpacity>
          <Iconify icon="solar:pen-outline" color={colors.PRIMARY} size={16} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderItem = ({ item }: { item: SectionItem }) => {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={item.onPress}>
        <View style={{ gap: 7, flexDirection: "row", alignItems: "center" }}>
          <Iconify
            icon={item.icon ?? "solar:user-id-outline"}
            color={item.color ?? colors.BLACK}
            size={16}
          />
          <Text
            style={{ ...styles.itemTitle, color: item.color ?? colors.BLACK }}
          >
            {item.title}
          </Text>
        </View>
        <View>
          {item.showTrailingAccessory ? (
            item.trailingAccessory ? (
              item.trailingAccessory
            ) : (
              <Iconify
                icon="solar:alt-arrow-right-outline"
                color={item.color ?? colors.BLACK}
                size={16}
              />
            )
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <MainContent isPadded style={{ paddingTop: 0 }}>
      <SectionList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader()}
        sections={sectionList}
        fadingEdgeLength={30}
        SectionSeparatorComponent={({ leadingItem }) =>
          leadingItem ? (
            <View
              style={{
                height: 1,
                backgroundColor: colors.LIGHT_GRAY,
                marginVertical: 20,
              }}
            />
          ) : null
        }
        renderSectionHeader={({ section }) => (
          <Text style={{ ...styles.emailText, fontSize: 11, marginBottom: 7 }}>
            {section.title}
          </Text>
        )}
        renderItem={renderItem}
        ListFooterComponent={() => renderItem({ item: logoutItem })}
      />
    </MainContent>
  );
};

export default Profile;

const styles = StyleSheet.create({
  headerContainer: {
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  avatarContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarPlusBtn: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    right: Dimensions.get("window").width * 0.01,
    backgroundColor: colors.PRIMARY,
    padding: 7,
    borderRadius: 50,
  },
  emailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  nameText: {
    fontFamily: Font.FontSemibold,
  },
  emailText: {
    fontSize: 12,
    color: colors.ACCENT_2,
  },
  itemTitle: {
    fontSize: 12,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
});
