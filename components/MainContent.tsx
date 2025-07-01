import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "./Text";
import { router } from "expo-router";
import { colors, Font } from "@/constants/theme";
import ChevronLeft from "@/assets/svgs/ChevronLeft";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Iconify from "react-native-iconify";

type Props = ViewProps & {
  isPadded?: boolean;
  isSafeArea?: boolean;
  showTopNav?: boolean;
  showBackButton?: boolean;
  showTitle?: boolean;
  title?: string;
  onBackPress?: () => void;
  titleStyle?: object;
  children?: React.ReactNode;
  backBtnStyle?: object;
  backBtnIconColor?: string;
  backBtnIconSize?: number;
  style?: object;
  toolbar?: React.ReactNode;
  scroll?: boolean;
  keyboardAware?: boolean;
  topNavStyles?: object;
};
const MainContent = (props: Props) => {
  const insets = useSafeAreaInsets().top;
  const {
    isPadded,
    showBackButton,
    showTitle,
    title,
    style,
    isSafeArea,
    showTopNav,
    children,
    titleStyle,
    backBtnStyle,
    onBackPress,
    backBtnIconColor,
    toolbar,
    scroll,
    keyboardAware,
    topNavStyles,
  } = props;
  // If isSafeArea is true, we add the top padding equal to the safe area insets
  const containerStyle = [
    {
      flex: 1,
      width: undefined,
      height: undefined,
      paddingHorizontal: isPadded ? 16 : 0,
      paddingTop: isSafeArea || isPadded ? insets : 0,
      paddingBottom: isSafeArea || isPadded ? 20 : 0,
    },
    style,
  ];

  const TopNav = showTopNav ? (
    <View style={{ ...styles.topNav, ...topNavStyles }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        {showBackButton && (
          <TouchableOpacity
            style={{ ...styles.backBtn, ...backBtnStyle }}
            onPress={
              onBackPress ?? router.canGoBack()
                ? () => router.back()
                : undefined
            }
          >
            {/* <ChevronLeft color={backBtnIconColor ?? colors.BLACK} /> */}
            <Iconify
              icon="solar:round-alt-arrow-left-outline"
              color={colors.BLACK}
              size={30}
            />
          </TouchableOpacity>
        )}
        {showTitle && (
          <Text style={{ ...styles.title, ...titleStyle }}>{title}</Text>
        )}
      </View>
      {toolbar}
    </View>
  ) : null;

  if (keyboardAware) {
    return (
      <KeyboardAwareScrollView
        style={containerStyle as any}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {TopNav}
        {children}
      </KeyboardAwareScrollView>
    );
  }
  if (scroll) {
    return (
      <ScrollView
        style={containerStyle as any}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {TopNav}
        {children}
      </ScrollView>
    );
  }
  return (
    <View style={containerStyle}>
      {TopNav}
      {children}
    </View>
  );
};

export default MainContent;

const styles = StyleSheet.create({
  topNav: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 16,
    zIndex: 10,
    marginBottom: 48,
  },
  backBtn: {
    alignItems: "center",
    justifyContent: "center",
    // width: 45,
    // height: 45,
    // borderRadius: 1234,
    // borderWidth: 1,
    // borderColor: colors.BLACK,
  },
  title: {
    fontSize: 20,
    fontFamily: Font.FontExtraBold,
    color: colors.BLACK,
    letterSpacing: -0.2,
  },
});
