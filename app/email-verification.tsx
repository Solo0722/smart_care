import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import MainContent from '@/components/MainContent'
import { colors, Font } from '@/constants/theme'
import Input from '@/components/Input'
import ButtonUI from '@/components/Button'
import Text from '@/components/Text'
import { ErrorLabel, FormControl } from '@/components/Form'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Iconify } from 'react-native-iconify';
import { Link } from 'expo-router'
import { OtpInput } from "react-native-otp-entry";

const emailVerificationSchema = yup.object().shape({
    code: yup.string().min(6, 'Code must be 6 characters').required(),
})

const EmailVerification = () => {

    const formik = useFormik({
        validationSchema: emailVerificationSchema,
        initialValues: {
            code: '',
        },
        onSubmit: () => console.log("okay")
    })

    return (
        <MainContent isPadded>
            <View style={styles.header}>
                <Text style={styles.headerText}>Verify email</Text>
                <Text style={styles.subText}>Sign up to create an account and get started.Sign up to get started.</Text>
            </View>
            <View style={styles.formContainer}>
                <FormControl>
                    <FormControl>
                        {/* <Input placeholder="johndoe@gmail.com" label='Your verification code' textContentType='oneTimeCode' onChangeText={formik.handleChange('code')} onBlur={formik.handleBlur('code')} value={formik.values.code} /> */}
                        <OtpInput
                            onBlur={() => formik.handleBlur('code')}
                            onTextChange={formik.handleChange('code')}
                            numberOfDigits={6}
                            focusColor={colors.PRIMARY}
                            focusStickBlinkingDuration={500}
                            textInputProps={{
                                accessibilityLabel: "One-Time Password",
                            }}
                            theme={{
                                // containerStyle: styles.container,
                                pinCodeContainerStyle: {
                                    borderColor: colors.ACCENT_2,
                                },
                                pinCodeTextStyle: {
                                    color: colors.ACCENT,
                                    fontFamily: Font.FontRegular
                                },
                                // focusStickStyle: styles.focusStick,
                                // focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                            }}
                        />
                        {
                            formik.touched?.code && formik.errors?.code && <ErrorLabel>{formik.errors.code}</ErrorLabel>
                        }
                    </FormControl>
                    <FormControl>
                        <ButtonUI label="Verify" backgroundColor={colors.PRIMARY} onPress={formik.handleSubmit} />
                    </FormControl>
                </FormControl>
                <FormControl>
                    <Text style={styles.footerText}>Didn't get code? <Text style={{ color: colors.PRIMARY }}>Resend</Text></Text>
                </FormControl>
            </View>
        </MainContent>
    )
}

export default EmailVerification

export const styles = StyleSheet.create({
    header: {
        gap: 5
    },
    headerText: {
        fontSize: 24,
        fontFamily: Font.FontBold
    },
    subText: {
        fontFamily: Font.FontRegular,
        fontSize: 12,
        color: "#a09d9f",
        maxWidth: Dimensions.get('window').width * 0.8
    },
    formContainer: {
        paddingTop: 40,
        paddingBottom: 20,
        gap: 5
    },
    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    },
    separator: {
        height: 1,
        flexGrow: 1,
        // width: "100%",
        backgroundColor: "#eee"
    },
    footerText: {
        fontSize: 10,
        color: "#666",
        textAlign: "center"
    }
})