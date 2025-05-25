import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ProgressBar } from '@/components/ProgressBar'
import { colors, Font } from '@/constants/theme'
import MainContent from '@/components/MainContent'
import Text from '@/components/Text'
import ProfileArc from '@/assets/images/profile-arc.svg'
import * as yup from 'yup'
import { router } from 'expo-router'
import { useFormik } from 'formik'
import Animated, { SharedValue, useAnimatedStyle, interpolate, useSharedValue } from 'react-native-reanimated'
import { ErrorLabel, FormControl } from '@/components/Form'
import Carousel from 'react-native-reanimated-carousel'

type bloodTypeProps = {
    label: string,
    subText: string,
    value: string
}

const WINDOW_WIDTH = Dimensions.get("window").width;

export const bloodTypeSchema = yup.object().shape({
    bloodType: yup.string().oneOf(['a-', 'a+', 'b-', 'b+', 'o-', 'o+', 'ab-', 'ab+']).required(),
})


const BloodTypeAssessment = () => {

    const formik = useFormik({
        validationSchema: bloodTypeSchema,
        initialValues: {
            bloodType: '',
        },
        onSubmit: () => router.push("/(health-assessment-setup)/medical-conditions")
    })

    const bloodTypes: bloodTypeProps[] = [
        { label: "A-", subText: "-", value: "a-" },
        { label: "A+", subText: "+", value: "a+" },
        { label: "B-", subText: "-", value: "b-" },
        { label: "B+", subText: "+", value: "b+" },
        { label: "O-", subText: "-", value: "o-" },
        { label: "O+", subText: "+", value: "o+" },
        { label: "AB-", subText: "-", value: "ab-" },
        { label: "AB+", subText: "+", value: "ab+" },
    ]

    const renderbloodTypeItem = (bloodType: bloodTypeProps, animationValue: SharedValue<number>) => {
        const animatedStyle = useAnimatedStyle(() => {
            const scale = interpolate(animationValue.value, [-1, 0, 1], [0.8, 1, 0.8]);
            return { transform: [{ scale }] };
        });
        return <Animated.View style={[styles.bloodTypeItemContainer, animatedStyle, bloodType.value === formik.values.bloodType && styles.bloodTypeItemSelectedContainer]} key={bloodType.value}
        >
            <TouchableOpacity onPress={() => formik.setFieldValue('bloodType', bloodType.value)}
            >
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.bloodTypeText}>{bloodType.label.substring(0, bloodType.label.length - 1)}</Text>
                    <Text style={{
                        color: "#F43F5E", fontSize: 50, fontFamily: Font.FontBold, marginTop: 20
                    }}>{bloodType.subText}</Text>
                </View>
            </TouchableOpacity>
        </Animated.View>
    }
    const progress = useSharedValue<number>(0);


    return (
        <MainContent
            isPadded
            isSafeArea
            style={{ backgroundColor: colors.LIGHT_BG, flex: 1 }}
            showTopNav
            showTitle
            title={"Assessment"}
            backBtnIconColor={colors.WHITE} backBtnStyle={{ borderColor: colors.WHITE }} titleStyle={{ color: colors.WHITE }}
            showBackButton
            toolbar={<ProgressBar currentStep={2} totalSteps={7} />}
        >
            <ProfileArc style={{ width: "100%", position: "absolute", top: 0, left: 0 }} />
            <View style={styles.bloodTypeAssessmentContainer}>
                <Text style={styles.headerText}>What's your official blood type?</Text>
                <FormControl>
                    <View style={styles.formItemContainer}>
                        <Carousel
                            loop={true}
                            style={{
                                width: WINDOW_WIDTH,
                                height: 240,
                                marginLeft: -20,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            width={WINDOW_WIDTH / 2}
                            data={bloodTypes}
                            renderItem={({ item, index, animationValue }) => {
                                return (
                                    renderbloodTypeItem(item, animationValue)
                                );
                            }}
                        />
                    </View>

                    {
                        formik.touched?.bloodType && formik.errors?.bloodType && <ErrorLabel>{formik.errors.bloodType}</ErrorLabel>
                    }
                </FormControl>
            </View>
        </MainContent>
    )
}

export default BloodTypeAssessment

const styles = StyleSheet.create({
    bloodTypeAssessmentContainer: {
        gap: 64,
        marginTop: "auto"
    },
    headerText: {
        fontSize: 30,
        fontFamily: Font.FontBold,
        lineHeight: 38,
        letterSpacing: -0.9,
        textAlign: "center",
        color: colors.BROWN,
    },
    bloodTypeItemContainer: {
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