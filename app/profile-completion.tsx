import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as yup from 'yup'
import MainContent from '@/components/MainContent';
import { styles as SignUpStyles } from './signup';
import { ErrorLabel, FormControl } from '@/components/Form';
import Input from '@/components/Input';
import ButtonUI from '@/components/Button';
import { Link, router, useNavigation } from 'expo-router';
import Iconify from 'react-native-iconify';
import { Form, useFormik } from 'formik';
import { colors, Font } from '@/constants/theme';
import Select from '@/components/Select';
import { DateTimePicker, Picker } from 'react-native-ui-lib';
import moment from 'moment';
import { resetNavigation } from '@/services/uiService';

const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    gender: yup.string().oneOf(['male', 'female']).required("Gender is required"),
    dateOfBirth: yup.date().required("Date of birth is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required("Confirm Password is required"),
});


const ProfileCompletion = () => {
    const navigation = useNavigation();
    const formik = useFormik({
        validationSchema: schema,
        initialValues: {
            fullName: '',
            gender: '',
            dateOfBirth: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: () => resetNavigation(navigation, [{ name: '(tabs)', key: "(tabs)" }])
    })


    return (
        <MainContent isPadded>
            <View style={styles.header}>
                <Text style={styles.headerText}>Complete profile</Text>
                <Text style={styles.subText}>Sign in to create an account and get started.Sign up to get started.</Text>
            </View>
            <View style={styles.formContainer}>
                <FormControl>

                    <FormControl>
                        <Input placeholder="John Doe" label='Your full name' textContentType='name' onChangeText={formik.handleChange('fullName')} onBlur={formik.handleBlur('fullName')} value={formik.values.fullName} />
                        {
                            formik.touched?.fullName && formik.errors?.fullName && <ErrorLabel>{formik.errors.fullName}</ErrorLabel>
                        }
                    </FormControl>
                    <FormControl>
                        <Select pickerProps={{
                            placeholder: "Select your gender",
                            label: "Your gender",
                            items: [
                                {
                                    label: "Male",
                                    value: "male"
                                },
                                {
                                    label: "Female",
                                    value: "female"
                                }
                            ],
                            mode: Picker.modes.SINGLE,
                            value: formik.values.gender,
                            onChange: (value) => formik.setFieldValue('gender', value as unknown as string)
                        }} />
                        {
                            formik.touched?.gender && formik.errors?.gender && <ErrorLabel>{formik.errors.gender}</ErrorLabel>
                        }
                    </FormControl>
                    <FormControl>
                        <DateTimePicker
                            label='Your date of birth'
                            migrateDialog
                            containerStyle={{ marginVertical: 20 }}
                            renderInput={({ value }) => <Input value={value} label={'Your date of birth'} placeholder={moment().format('MMM D, YYYY')} />}
                            mode={"date"}
                            onChange={(value: Date) => formik.setFieldValue('dateOfBirth', value)}
                            dateTimeFormatter={(value: Date) =>
                                moment(value).format('MMM D, YYYY')
                            }
                        />
                    </FormControl>
                    <FormControl>
                        <Input placeholder="**********" label='Your password' textContentType='newPassword' onChangeText={formik.handleChange('password')} onBlur={formik.handleBlur('password')} value={formik.values.password} secureTextEntry />
                        {
                            formik.touched?.password && formik.errors?.password && <ErrorLabel>{formik.errors.password}</ErrorLabel>
                        }
                    </FormControl>
                    <FormControl>
                        <Input placeholder="**********" label='Confirm password' textContentType='password' onChangeText={formik.handleChange('confirmPassword')} onBlur={formik.handleBlur('confirmPassword')} value={formik.values.confirmPassword} secureTextEntry />
                        {
                            formik.touched?.confirmPassword && formik.errors?.confirmPassword && <ErrorLabel>{formik.errors.confirmPassword}</ErrorLabel>
                        }
                    </FormControl>
                    <FormControl>
                        <ButtonUI label="Sign in" backgroundColor={colors.PRIMARY} onPress={formik.handleSubmit} />
                    </FormControl>
                </FormControl>
            </View>
        </MainContent>
    )
}

export default ProfileCompletion

const styles = StyleSheet.create({ ...SignUpStyles })