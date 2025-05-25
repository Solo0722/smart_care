import { Pressable, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
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
import { styles as SignInStyles } from './signin';
import FreudArc from '@/assets/images/freud-arc.svg';
import { hexToRGBA } from '@/services/uiService'
import { oAuths } from '@/constants/constants'
import { Checkbox } from 'react-native-ui-lib'

const signupSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6, 'Password must be at least 6 characters').required(),
    termsAccepted: yup.bool().oneOf([true], 'You must accept the terms and conditions')
})

const Signup = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    useEffect(() => {
        StatusBar.setBackgroundColor(colors.GREEN);
        StatusBar.setTranslucent(true);
        StatusBar.setBarStyle("light-content");
        StatusBar.setHidden(false);
    }, [])

    const formik = useFormik({
        validationSchema: signupSchema,
        initialValues: {
            email: '',
            password: '',
            termsAccepted: false
        },
        onSubmit: () => router.push("/profile-setup")
    })

    return (
        <MainContent style={{ backgroundColor: colors.LIGHT_BG, paddingBottom: 20 }}>
            <FreudArc />
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Sign up to freud.ai</Text>
                    <Text style={styles.subHeaderText}>Sign up to create an account and get started.</Text>
                </View>
                <View style={styles.formContainer}>
                    <FormControl>
                        <Input
                            leadingAccessory={
                                <Iconify icon="solar:letter-outline" style={{ marginRight: 10 }} size={16} color={colors.BROWN} />
                            }
                            placeholder="johndoe@gmail.com"
                            label='Email Address' textContentType='emailAddress'
                            onChangeText={formik.handleChange('email')}
                            onBlur={formik.handleBlur('email')}
                            value={formik.values.email}
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
                            formik.touched?.email && formik.errors?.email && <ErrorLabel>{formik.errors.email}</ErrorLabel>
                        }
                    </FormControl>
                    <FormControl>
                        <Input
                            leadingAccessory={
                                <Iconify icon="solar:lock-keyhole-outline" style={{ marginRight: 10 }} size={16} color={colors.BROWN} />
                            }
                            trailingAccessory={
                                <Pressable onPress={() => setShowPassword(!showPassword)}>
                                    <Iconify icon={showPassword ? "solar:eye-closed-outline" : "solar:eye-outline"} size={16} color={colors.BROWN} />
                                </Pressable>
                            }
                            placeholder="**********"
                            label='Password'
                            textContentType='password'
                            onChangeText={formik.handleChange('password')}
                            onBlur={formik.handleBlur('password')}
                            value={formik.values.password}
                            secureTextEntry={!showPassword}
                            cursorColor={colors.BROWN}
                            placeholderTextColor={hexToRGBA(colors.BROWN, 0.64)}
                            labelStyle={styles.inputLabel}
                            fieldStyle={styles.input}
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
                            formik.touched?.password && formik.errors?.password && <ErrorLabel>{formik.errors.password}</ErrorLabel>
                        }
                    </FormControl>
                    <FormControl>
                        <Checkbox
                            //@ts-expect-error from label
                            label={<Text style={styles.checkboxLabel}>I agree to the <Text style={{ color: colors.GREEN, fontFamily: Font.FontBold }}>Terms of Service</Text> and <Text style={{ color: colors.GREEN, fontFamily: Font.FontBold }}>Privacy Policy</Text></Text>}
                            children={<Text style={styles.checkboxLabel}>I agree to the <Text style={{ color: colors.GREEN }}>Terms of Service</Text> and <Text style={{ color: colors.GREEN }}>Privacy Policy</Text></Text>}
                            value={formik.values.termsAccepted}
                            onValueChange={() => formik.setFieldValue('termsAccepted', !formik.values.termsAccepted)}
                            labelStyle={styles.checkboxLabel}
                            style={styles.checkbox}
                            color={colors.BROWN}
                            onBlur={formik.handleBlur('termsAccepted')}
                            iconColor={colors.BROWN}
                            outline

                        />
                        {
                            formik.touched?.termsAccepted && formik.errors?.termsAccepted && <ErrorLabel>{formik.errors.termsAccepted}</ErrorLabel>
                        }
                    </FormControl>
                    <FormControl>
                        <ButtonUI
                            label="Sign up"
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
                <View style={styles.oAuthContainer}>
                    {
                        oAuths.map(oAuth => {
                            return (
                                <TouchableOpacity key={oAuth.id} onPress={oAuth.onPress} style={styles.oAuthBtn} >
                                    <Iconify icon={oAuth.icon} size={24} color={"#926247"} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
            <View>
                <Text style={styles.footerLinkText}>Already have an account? <Link href="/signin" style={{ color: colors.ORANGE }}>Sign in</Link></Text>
            </View>
        </MainContent>
    )
}

export default Signup

export const styles = StyleSheet.create({
    ...SignInStyles,
    checkbox: {
        borderColor: colors.BROWN,
        borderRadius: 1000
    },
    checkboxLabel: {
        fontSize: 14,
        fontFamily: Font.FontBold,
        color: colors.BROWN,
        marginLeft: 8,
        flexShrink: 1
    }
})