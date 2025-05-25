import { Image, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import MainContent from '@/components/MainContent'
import { colors, Font } from '@/constants/theme'
import ProfileArc from '@/assets/images/profile-arc.svg'
import { hexToRGBA } from '@/services/uiService'
import Iconify from 'react-native-iconify'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { ErrorLabel, FormControl } from '@/components/Form'
import Input from '@/components/Input'
import { styles as SigninStyles } from '@/app/signin'
import ButtonUI from '@/components/Button'
import { router } from 'expo-router'

export const profileSetupSchema = yup.object().shape({
    fullName: yup.string().required(),
    gender: yup.string().required(),
    location: yup.string().required(),
    dateOfBirth: yup.string().required(),
})

const ProfileSetup = () => {

    const formik = useFormik({
        validationSchema: profileSetupSchema,
        initialValues: {
            fullName: '',
            gender: '',
            location: '',
            dateOfBirth: ''
        },
        onSubmit: () => router.push("/signup-completion")
    })

    useEffect(() => {
        StatusBar.setBackgroundColor(colors.GREEN);
        StatusBar.setTranslucent(true);
        StatusBar.setBarStyle("light-content");
        StatusBar.setHidden(false);
    }, [])

    return (
        <MainContent isPadded isSafeArea showBackButton showTopNav showTitle title="Profile Setup" style={{
            backgroundColor: colors.LIGHT_BG, width: "100%"
        }} backBtnIconColor={colors.WHITE} backBtnStyle={{ borderColor: colors.WHITE }} titleStyle={{ color: colors.WHITE }}>
            <ProfileArc style={{ width: "100%", position: "absolute", top: 0, left: 0 }} />
            <View style={styles.profileImageContainer}>
                <Image source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/041/899/329/small_2x/ai-generated-graceful-african-little-girl-ballet-portrait-generate-ai-photo.jpg" }} style={styles.profileImage} />
                <TouchableOpacity style={styles.profileEditButton}>
                    <Iconify icon="solar:pen-outline" color={colors.WHITE} size={24} />
                </TouchableOpacity>
            </View>
            <View style={styles.formContainer}>
                <FormControl>
                    <Input
                        leadingAccessory={
                            <Iconify icon="solar:letter-outline" style={{ marginRight: 10 }} size={16} color={colors.BROWN} />
                        }
                        placeholder="John Doe"
                        label='Full Name'
                        onChangeText={formik.handleChange('fullName')}
                        onBlur={formik.handleBlur('fullName')}
                        value={formik.values.fullName}
                        labelStyle={styles.inputLabel}
                        fieldStyle={styles.input}
                        cursorColor={colors.BROWN}
                        placeholderTextColor={hexToRGBA(colors.BROWN, 0.64)}
                        dynamicFieldStyle={({ isFocused }) => ({
                            outlineColor: isFocused ? colors.GREEN : colors.LIGHT_BG,
                            outlineWidth: 1,
                            // shadowColor: isFocused ? hexToRGBA("#9BB068", 0.25) : 'transparent',
                            // ...(Platform.OS === 'ios' ? {
                            //     shadowOffset: { width: 1, height: 1 },
                            //     shadowRadius: 4,
                            //     shadowOpacity: 1,
                            // } : {
                            //     elevation: isFocused ? 4 : 0,
                            // }),
                        })}
                    />
                    {
                        formik.touched?.fullName && formik.errors?.fullName && <ErrorLabel>{formik.errors.fullName}</ErrorLabel>
                    }
                </FormControl>
                <FormControl>
                    <Input
                        leadingAccessory={
                            <Iconify icon="solar:letter-outline" style={{ marginRight: 10 }} size={16} color={colors.BROWN} />
                        }
                        placeholder="John Doe"
                        label='Gender'
                        onChangeText={formik.handleChange('gender')}
                        onBlur={formik.handleBlur('gender')}
                        value={formik.values.gender}
                        labelStyle={styles.inputLabel}
                        fieldStyle={styles.input}
                        cursorColor={colors.BROWN}
                        placeholderTextColor={hexToRGBA(colors.BROWN, 0.64)}
                        dynamicFieldStyle={({ isFocused }) => ({
                            outlineColor: isFocused ? colors.GREEN : colors.LIGHT_BG,
                            outlineWidth: 1,
                            // shadowColor: isFocused ? hexToRGBA("#9BB068", 0.25) : 'transparent',
                            // ...(Platform.OS === 'ios' ? {
                            //     shadowOffset: { width: 1, height: 1 },
                            //     shadowRadius: 4,
                            //     shadowOpacity: 1,
                            // } : {
                            //     elevation: isFocused ? 4 : 0,
                            // }),
                        })}
                    />
                    {
                        formik.touched?.gender && formik.errors?.gender && <ErrorLabel>{formik.errors.gender}</ErrorLabel>
                    }
                </FormControl>
                <FormControl>
                    <Input
                        leadingAccessory={
                            <Iconify icon="solar:letter-outline" style={{ marginRight: 10 }} size={16} color={colors.BROWN} />
                        }
                        placeholder="John Doe"
                        label='Date of Birth'
                        onChangeText={formik.handleChange('dateOfBirth')}
                        onBlur={formik.handleBlur('dateOfBirth')}
                        value={formik.values.dateOfBirth}
                        labelStyle={styles.inputLabel}
                        fieldStyle={styles.input}
                        cursorColor={colors.BROWN}
                        placeholderTextColor={hexToRGBA(colors.BROWN, 0.64)}
                        dynamicFieldStyle={({ isFocused }) => ({
                            outlineColor: isFocused ? colors.GREEN : colors.LIGHT_BG,
                            outlineWidth: 1,
                            // shadowColor: isFocused ? hexToRGBA("#9BB068", 0.25) : 'transparent',
                            // ...(Platform.OS === 'ios' ? {
                            //     shadowOffset: { width: 1, height: 1 },
                            //     shadowRadius: 4,
                            //     shadowOpacity: 1,
                            // } : {
                            //     elevation: isFocused ? 4 : 0,
                            // }),
                        })}
                    />
                    {
                        formik.touched?.dateOfBirth && formik.errors?.dateOfBirth && <ErrorLabel>{formik.errors.dateOfBirth}</ErrorLabel>
                    }
                </FormControl>
                <FormControl>
                    <Input
                        leadingAccessory={
                            <Iconify icon="solar:letter-outline" style={{ marginRight: 10 }} size={16} color={colors.BROWN} />
                        }
                        placeholder="John Doe"
                        label='Location'
                        onChangeText={formik.handleChange('location')}
                        onBlur={formik.handleBlur('location')}
                        value={formik.values.location}
                        labelStyle={styles.inputLabel}
                        fieldStyle={styles.input}
                        cursorColor={colors.BROWN}
                        placeholderTextColor={hexToRGBA(colors.BROWN, 0.64)}
                        dynamicFieldStyle={({ isFocused }) => ({
                            outlineColor: isFocused ? colors.GREEN : colors.LIGHT_BG,
                            outlineWidth: 1,
                            // shadowColor: isFocused ? hexToRGBA("#9BB068", 0.25) : 'transparent',
                            // ...(Platform.OS === 'ios' ? {
                            //     shadowOffset: { width: 1, height: 1 },
                            //     shadowRadius: 4,
                            //     shadowOpacity: 1,
                            // } : {
                            //     elevation: isFocused ? 4 : 0,
                            // }),
                        })}
                    />
                    {
                        formik.touched?.location && formik.errors?.location && <ErrorLabel>{formik.errors.location}</ErrorLabel>
                    }
                </FormControl>


                <FormControl>
                    <ButtonUI
                        label="Continue"
                        backgroundColor={colors.PRIMARY}
                        onPress={formik.handleSubmit}
                        style={styles.submitBtn}
                        labelStyle={{ marginRight: 24, fontSize: 14, fontFamily: Font.FontBold }}
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
        </MainContent>
    )
}

export default ProfileSetup

const styles = StyleSheet.create({
    ...SigninStyles,
    profileImageContainer: {
        position: 'absolute',
        top: 141,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 128,
        height: 128,
        borderRadius: 122.88,
        borderWidth: 1,
        borderColor: hexToRGBA("#1F160F", 0.32)
    },
    profileEditButton: {
        position: "absolute",
        backgroundColor: colors.BROWN,
        width: 40,
        height: 40,
        borderRadius: 1000,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: -16,
    },
    formContainer: {
        paddingTop: 20,
        paddingBottom: 20,
        gap: 24,
        width: "100%",
        marginTop: "auto"
    }
})