import { StyleSheet, View } from 'react-native'
import React from 'react'
import * as yup from 'yup'
import MainContent from '@/components/MainContent';
import { styles as SignUpStyles } from '../signup';
import { ErrorLabel, FormControl } from '@/components/Form';
import Input from '@/components/Input';
import ButtonUI from '@/components/Button';
import { router } from 'expo-router';
import { useFormik } from 'formik';
import { colors } from '@/constants/theme';
import { DateTimePicker } from 'react-native-ui-lib';
import moment from 'moment';
import Text from '@/components/Text';

const schema = yup.object().shape({
    dateOfBirth: yup.date().required("Date of birth is required"),
});


const DateOfBirth = () => {
    const formik = useFormik({
        validationSchema: schema,
        initialValues: {
            dateOfBirth: ""
        },
        onSubmit: () => {
            router.push("/(health-assessment-setup)/weight")
        }
    })


    return (
        <MainContent isPadded>
            <View style={styles.header}>
                <Text style={styles.headerText}>Select date of birth</Text>
                <Text style={styles.subText}>Sign in to create an account and get started.Sign up to get started.</Text>
            </View>
            <View style={styles.formContainer}>
                <FormControl>
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
                        {
                            formik.touched?.dateOfBirth && formik.errors?.dateOfBirth && <ErrorLabel>{formik.errors.dateOfBirth}</ErrorLabel>
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

export default DateOfBirth

const styles = StyleSheet.create({
    ...SignUpStyles, countryCodeBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 10,
        marginLeft: -10
        // gap: 2
    }
})