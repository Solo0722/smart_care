import { Platform, Pressable, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import MainContent from '@/components/MainContent'
import { colors, Font } from '@/constants/theme'
import Text from '@/components/Text';

import { ErrorLabel, FormControl } from '@/components/Form';
import Input from '@/components/Input';
import ButtonUI from '@/components/Button';
import { Link } from 'expo-router';
import Iconify from 'react-native-iconify';
import { useFormik } from 'formik';
import * as yup from 'yup';
import FreudArc from '@/assets/images/freud-arc.svg';
import { hexToRGBA } from '@/services/uiService';
import { oAuths } from '@/constants/constants';

const signinSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})

const Signin = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    useEffect(() => {
        StatusBar.setBackgroundColor(colors.GREEN);
        StatusBar.setTranslucent(true);
        StatusBar.setBarStyle("light-content");
        StatusBar.setHidden(false);
    }, [])


    const formik = useFormik({
        validationSchema: signinSchema,
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: () => console.log("okay")
    })


    return (
        <MainContent style={{ backgroundColor: colors.LIGHT_BG, paddingBottom: 20 }}>
            <FreudArc />
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Sign in to freud.ai</Text>
                    <Text style={styles.subHeaderText}>Sign in to continue from where you left off.</Text>
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
                        <ButtonUI
                            label="Sign in"
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
            <View style={{ gap: 5 }}>
                <Text style={styles.footerLinkText}>Don't have an account? <Link href="/signup" style={{ color: colors.ORANGE }}>Sign up</Link></Text>
                <Text style={{ ...styles.footerLinkText, color: colors.ORANGE }}><Link href="/signin">Forgot Password?</Link></Text>
            </View>
        </MainContent>
    )
}

export default Signin

export const styles = StyleSheet.create({
    // ...SignUpStyles,
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        gap: 48
    },
    headerContainer: {
        gap: 12,
        width: "100%"

    },
    headerText: {
        textAlign: 'center',
        fontFamily: Font.FontBold,
        fontSize: 30,
        lineHeight: 38,
        letterSpacing: -0.6,
        color: colors.BROWN
    },
    subHeaderText: {
        // maxWidth: "80%",
        fontFamily: Font.FontRegular,
        fontSize: 18,
        lineHeight: 28.8,
        letterSpacing: -0.18,
        color: hexToRGBA("#1F160F", 0.64),
        textAlign: "center",
    },
    formContainer: {
        gap: 24,
        width: "100%",
    },
    footerText: {
        fontSize: 10,
        color: "#666",
        textAlign: "center"
    },
    inputLabel: {
        fontFamily: Font.FontBold,
        fontSize: 14,
        color: colors.BROWN,
        letterSpacing: -0.14
    },
    input: {
        backgroundColor: colors.WHITE,
        borderRadius: 1234,
        paddingHorizontal: 16,
        paddingVertical: 16,
        color: colors.BROWN,
        fontFamily: Font.FontBold,
        fontSize: 14,
    },
    submitBtn: {
        borderRadius: 1000,
        backgroundColor: colors.BROWN,
        paddingVertical: 16,
        paddingHorizontal: 24,
    },
    footerLinkText: {
        fontSize: 14,
        fontFamily: Font.FontBold,
        lineHeight: 28.8,
        letterSpacing: -0.18,
        textAlign: "center",
        color: hexToRGBA("#1F160F", 0.64)
    },
    oAuthContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    oAuthBtn: {
        borderRadius: 1234,
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#E8DDD9"
    }
})