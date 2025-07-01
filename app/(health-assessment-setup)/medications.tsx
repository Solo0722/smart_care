import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import MainContent from "@/components/MainContent";
import { ProgressBar } from "@/components/ProgressBar";
import { styles as SigninStyles } from "../signin";
import { colors, Font } from "@/constants/theme";
import ButtonUI from "@/components/Button";
import { FormControl, ErrorLabel } from "@/components/Form";
import Iconify from "react-native-iconify";
import * as yup from "yup";
import { useFormik } from "formik";
import { router } from "expo-router";
import Input from "@/components/Input";
import { medications as medicationsList } from "@/constants/medications";
import { hexToRGBA } from "@/services/uiService";
import Text from "@/components/Text";

export const medicationsSchema = yup.object().shape({
  medications: yup.array().of(yup.string()).min(1).required(),
});

const Medications = () => {
  const formik = useFormik<{ medications: string[] }>({
    validationSchema: medicationsSchema,
    initialValues: {
      medications: [],
    },
    onSubmit: () =>
      router.push(
        {
          pathname: "/successful-completion",
          params: {
            message:
              "You've successfully completed your health assessment setup. You can now start tracking your health data and get insights into your well-being.",
            routeName: "(tabs)",
          },
        },
        {}
      ),
  });

  const [search, setSearch] = React.useState("");

  // Filter medications by search
  const filteredMedications = React.useMemo(() => {
    if (!search.trim()) return medicationsList;
    return medicationsList.filter((med) =>
      med.toLowerCase().includes(search.trim().toLowerCase())
    );
  }, [search]);

  // Handler for selecting/deselecting
  const toggleMedication = (med: string) => {
    const current = formik.values.medications;
    if (current.includes(med)) {
      formik.setFieldValue(
        "medications",
        current.filter((m) => m !== med)
      );
    } else {
      formik.setFieldValue("medications", [...current, med]);
    }
  };

  return (
    <MainContent
      isPadded
      showTopNav
      showBackButton
      scroll
      keyboardAware
      toolbar={<ProgressBar currentStep={6} totalSteps={6} />}
    >
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            Specify current{" "}
            <Text style={{ ...styles.headerText, color: colors.ORANGE }}>
              medications
            </Text>{" "}
            you take
          </Text>
          <Text style={styles.subHeaderText}>
            Please answer truthfully so our AI we can assess better
          </Text>
        </View>
        <View style={styles.formContainer}>
          <FormControl>
            <Input
              placeholder="Search medications..."
              value={search}
              onChangeText={setSearch}
              labelStyle={styles.inputLabel}
              fieldStyle={styles.input}
              placeholderTextColor={hexToRGBA(colors.BLACK, 0.64)}
              leadingAccessory={
                <Iconify
                  icon="solar:minimalistic-magnifer-outline"
                  style={{ marginRight: 10 }}
                  size={16}
                  color={colors.BLACK}
                />
              }
            />
            <FlatList
              data={filteredMedications}
              keyExtractor={(item) => item}
              style={{
                maxHeight: 240,
                borderRadius: 10,
                marginTop: 10,
                backgroundColor: colors.LIGHT_GRAY,
              }}
              renderItem={({ item: med }) => {
                const selected = formik.values.medications.includes(med);
                return (
                  <TouchableOpacity
                    onPress={() => toggleMedication(med)}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingVertical: 12,
                      paddingHorizontal: 16,
                    }}
                  >
                    <Text
                      style={{
                        flex: 1,
                        color: colors.GRAY,
                        fontFamily: Font.FontRegular,
                        fontSize: 15,
                      }}
                    >
                      {med}
                    </Text>
                    <View
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        borderWidth: 2,
                        borderColor: selected ? colors.ORANGE : colors.TEAL,
                        backgroundColor: selected
                          ? colors.WHITE
                          : "transparent",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {selected && (
                        <View
                          style={{
                            width: 12,
                            height: 12,
                            borderRadius: 3,
                            backgroundColor: colors.TEAL,
                          }}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                );
              }}
              ListEmptyComponent={
                <Text
                  style={{
                    textAlign: "center",
                    color: colors.GRAY,
                    padding: 16,
                  }}
                >
                  No medications found
                </Text>
              }
            />
            {/* Selected tags */}
            {formik.values.medications.length > 0 && (
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                  marginTop: 12,
                }}
              >
                {formik.values.medications.map((med) => (
                  <View
                    key={med}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: hexToRGBA(colors.TEAL, 0.16),
                      borderRadius: 8,
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      marginRight: 8,
                      marginBottom: 8,
                    }}
                  >
                    <Text
                      style={{
                        color: colors.TEAL,
                        fontSize: 9,
                        fontFamily: Font.FontBold,
                      }}
                    >
                      {med}
                    </Text>
                    <TouchableOpacity
                      onPress={() => toggleMedication(med)}
                      style={{ marginLeft: 6 }}
                    >
                      <Text
                        style={{
                          color: colors.ORANGE,
                          fontFamily: Font.FontBold,
                        }}
                      >
                        ×
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            )}
            {formik.touched?.medications && formik.errors?.medications && (
              <ErrorLabel>{formik.errors.medications}</ErrorLabel>
            )}
          </FormControl>
          <FormControl>
            <ButtonUI
              label="Continue"
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
    </MainContent>
  );
};

export default Medications;

const styles = StyleSheet.create({
  ...SigninStyles,
});
