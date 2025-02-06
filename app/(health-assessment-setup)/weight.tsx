import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MainContent from '@/components/MainContent'
import { styles as SignupStyles } from '../signup';
import { ErrorLabel, FormControl } from '@/components/Form';
import ButtonUI from '@/components/Button';
import { colors, Font } from '@/constants/theme';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Iconify from 'react-native-iconify';
import Carousel from 'react-native-reanimated-carousel';
import Animated, { interpolate, SharedValue, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { BlurView as _BlurView } from "expo-blur";
import { parallaxLayout } from '@/services/uiService';

const BlurView = Animated.createAnimatedComponent(_BlurView);

export const weightSchema = yup.object().shape({
    weight: yup.number().required(),
})


const WINDOW_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = 10; // Width of each pipe (small lines)
const TOTAL_STEPS = 1000; // 100 whole numbers, each with 10 decimal steps

const Weight = () => {
    const formik = useFormik({
        validationSchema: weightSchema,
        initialValues: {
            weight: 52,
        },
        onSubmit: () => console.log("Heyy")
    })

    const weightData = Array.from({ length: TOTAL_STEPS + 1 }, (_, i) => i / 10);

    const renderWeightItem = (item: number, animationValue) => {
        return (
            <Animated.View style={{ width: 10, flex: 1, height: 190, paddingHorizontal: 20, marginHorizontal: 20, backgroundColor: "green" }} ><Text>{item}</Text></Animated.View>
        )
    }


    return (
        <MainContent isPadded>
            <View style={styles.header}>
                <Text style={styles.headerText}>Select your weight</Text>
                <Text style={styles.subText}>Please answer truthfully so our AI we can assess better..</Text>
            </View>
            <View style={styles.formContainer}>
                <FormControl>

                    <FormControl>
                        <View style={styles.formItemContainer}>
                            <Carousel
                                loop={true}
                                width={WINDOW_WIDTH / 2}

                                data={weightData}
                                style={{
                                    width: WINDOW_WIDTH,
                                    height: 240,
                                    marginLeft: -20,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "red"
                                }}
                                // snapEnabled={true} 
                                panGestureHandlerProps={{ activeOffsetX: [-10, 10] }}
                                scrollAnimationDuration={400}
                                renderItem={({ item, index, animationValue }) => renderWeightItem(item, animationValue)}
                            />

                        </View>
                        {/* <View
                            style={{
                                position: "absolute",
                                top: 50,
                                width: 3,
                                height: 80,
                                backgroundColor: "red",
                            }}
                        /> */}

                        {
                            formik.touched?.weight && formik.errors?.weight && <ErrorLabel>{formik.errors.weight}</ErrorLabel>
                        }
                    </FormControl>
                    <FormControl style={{ marginTop: 20 }}>
                        <ButtonUI label="Continue" backgroundColor={colors.PRIMARY} onPress={formik.handleSubmit} />
                    </FormControl>
                </FormControl>
            </View>
        </MainContent>
    )
}

export default Weight

const styles = StyleSheet.create({
    ...SignupStyles, bloodTypeItemContainer: {
        flex: 1,
        height: 190,
        minWidth: 150,
        padding: 16,
        borderRadius: 24,
        gap: 10,
        backgroundColor: colors.ACCENT_BACKGROUND,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10
    },
    bloodTypeItemSelectedContainer: {
        borderWidth: 1,
        borderColor: colors.PRIMARY,
        backgroundColor: `${colors.PRIMARY}60`
    },
    bloodTypeText: {
        fontFamily: Font.FontBold,
        fontSize: 100,
        color: colors.FOREGROUND,
        lineHeight: 188,
        letterSpacing: -0.7
    },
    bloodTypeIcon: {
        position: "absolute",
        top: 16,
        right: 16
    },
    formItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
    }
})