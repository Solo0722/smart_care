import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MainContent from '@/components/MainContent'
import { colors, Font } from '@/constants/theme'
import Text from '@/components/Text';
import { styles as SignUpStyles } from './signup';
import { ErrorLabel, FormControl } from '@/components/Form';
import Input from '@/components/Input';
import ButtonUI from '@/components/Button';
import { Link } from 'expo-router';
import Iconify from 'react-native-iconify';
import { useFormik } from 'formik';
import * as yup from 'yup';

const signinSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})

const Signin = () => {

    const formik = useFormik({
        validationSchema: signinSchema,
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: () => console.log("okay")
    })


    return (
        <MainContent isPadded>
            <View style={styles.header}>
                <Text style={styles.headerText}>Sign in</Text>
                <Text style={styles.subText}>Sign in to create an account and get started.Sign up to get started.</Text>
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
                        <Input placeholder="**********" label='Your password' textContentType='password' onChangeText={formik.handleChange('password')} onBlur={formik.handleBlur('password')} value={formik.values.password} secureTextEntry />
                        {
                            formik.touched?.password && formik.errors?.password && <ErrorLabel>{formik.errors.password}</ErrorLabel>
                        }
                        <Pressable><Text style={{ ...styles.footerText, textAlign: 'right', marginTop: 5, color: colors.PRIMARY }}>Forgot password?</Text></Pressable>
                    </FormControl>
                    <FormControl>
                        <ButtonUI label="Sign in" backgroundColor={colors.PRIMARY} onPress={formik.handleSubmit} />
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
                    <Text style={styles.footerText}>D'ont have an account? <Link href="/signup" style={{ color: colors.PRIMARY }}>Sign up</Link></Text>
                </FormControl>
            </View>
        </MainContent>
    )
}

export default Signin

const styles = StyleSheet.create({
    ...SignUpStyles
})