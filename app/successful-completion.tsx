import { StyleSheet, View } from "react-native";
import React, { useRef } from "react";
import MainContent from "@/components/MainContent";
import LottieView from "lottie-react-native";
import ButtonUI from "@/components/Button";
import { colors, Font } from "@/constants/theme";
import Text from "@/components/Text";
import { resetNavigation } from "@/services/uiService";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { styles as SigninStyles } from "@/app/signin";
import Iconify from "react-native-iconify";

const SuccessfulCompletion = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const animation = useRef<LottieView>(null);
  const params = route?.params as any;
  return (
    <MainContent isPadded showTopNav showBackButton>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 300,
            height: 200,
            // backgroundColor: "red"
          }}
          source={require("../assets/animations/success.json")}
        />
        <Text style={styles.text}>
          {params?.message ??
            "Yayy. You're all set. Now let's get to know some of your health info. Click the button below to continue"}
        </Text>
        <ButtonUI
          label="Continue"
          backgroundColor={colors.TEAL}
          onPress={() =>
            resetNavigation(navigation, [
              {
                name: params?.routeName ?? "(health-assessment-setup)",
                key: params?.routeName ?? "(health-assessment-setup)",
              },
            ])
          }
          children={
            <Iconify
              icon="solar:arrow-right-bold"
              color={colors.WHITE}
              size={20}
              style={{ position: "absolute", right: 24 }}
            />
          }
          labelStyle={{
            marginRight: 24,
            fontSize: 14,
            fontFamily: Font.FontBold,
          }}
          style={styles.submitBtn}
        />
      </View>
    </MainContent>
  );
};

export default SuccessfulCompletion;

const styles = StyleSheet.create({
  ...SigninStyles,
  text: {
    fontSize: 12,
    width: "70%",
    textAlign: "center",
    color: colors.GRAY,
    marginTop: -20,
  },
});
