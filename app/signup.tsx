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
import { Link, router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const signupSchema = yup.object().shape({
    email: yup.string().email().required(),
})

const Signup = () => {
    const formik = useFormik({
        validationSchema: signupSchema,
        initialValues: {
            email: '',
        },
        onSubmit: () => router.push("/email-verification")
    })

    const insets = useSafeAreaInsets()

    return (
        <MainContent isPadded>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create an account</Text>
                <Text style={styles.subText}>Sign up to create an account and get started.Sign up to get started.</Text>
            </View>
            <View style={styles.formContainer}>
                <FormControl>

                    <FormControl>
                        <Input placeholder="johndoe@gmail.com" label='Your email' textContentType='emailAddress' onChangeText={formik.handleChange('email')} onBlur={formik.handleBlur('email')} value={formik.values.email} />
                        {
                            formik.touched?.email && formik.errors?.email && <ErrorLabel>{formik.errors.email}</ErrorLabel>
                        }
                    </FormControl>
                    <FormControl>
                        <ButtonUI label="Continue with email" backgroundColor={colors.PRIMARY} onPress={formik.handleSubmit} />
                    </FormControl>
                </FormControl>
                <FormControl>
                    <View style={styles.dividerContainer}>
                        <View style={styles.separator} />
                        <Text style={{ fontFamily: Font.FontRegular }}>or</Text>
                        <View style={styles.separator} />
                    </View>
                </FormControl>
                <FormControl>
                    <ButtonUI label="Continue with Google" outline style={{ borderColor: "#eee", backgroundColor: "#f9fafc" }} backgroundColor='#f9fafc' color='#666' children={<Iconify icon='logos:google-icon' style={{ marginRight: 10 }} size={16} />} />
                </FormControl>
                <FormControl>
                    <Text style={styles.footerText}>Already have an account? <Link href="/signin" replace style={{ color: colors.PRIMARY }}>Log in</Link></Text>
                </FormControl>
            </View>
        </MainContent>
    )
}

export default Signup

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
        color: colors.ACCENT_FOREGROUND,
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