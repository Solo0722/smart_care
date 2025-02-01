import { StyleSheet, View } from 'react-native'
import React from 'react'
import MainContent from '@/components/MainContent'
import { colors, Font } from '@/constants/theme'
import ButtonUI from '@/components/Button'
import Text from '@/components/Text'
import { ErrorLabel, FormControl } from '@/components/Form'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { OtpInput } from "react-native-otp-entry";
import { styles as SignupStyles } from './signup';
import { router } from 'expo-router'

const emailVerificationSchema = yup.object().shape({
    code: yup.string().min(6, 'Code must be 6 characters').required(),
})

const EmailVerification = () => {

    const formik = useFormik({
        validationSchema: emailVerificationSchema,
        initialValues: {
            code: '',
        },
        onSubmit: () => router.push("/profile-completion")
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
    ...SignupStyles
})