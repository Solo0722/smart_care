import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MainContent from '@/components/MainContent'
import { styles as SignupStyles } from '../signup';
import { ErrorLabel, FormControl } from '@/components/Form';
import ButtonUI from '@/components/Button';
import { colors, Font } from '@/constants/theme';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { BlurView as _BlurView } from "expo-blur";
import { NumberInput } from 'react-native-ui-lib';
import Input from '@/components/Input';
import { router } from 'expo-router';

export const weightSchema = yup.object().shape({
    weight: yup.string().required(),
})

const Weight = () => {
    const formik = useFormik({
        validationSchema: weightSchema,
        initialValues: {
            weight: "",
        },
        onSubmit: () => router.push("/(health-assessment-setup)/blood-type")
    })

    return (
        <MainContent isPadded>
            <View style={styles.header}>
                <Text style={styles.headerText}>Select your weight</Text>
                <Text style={styles.subText}>Please answer truthfully so our AI we can assess better..</Text>
            </View>
            <View style={styles.formContainer}>
                <FormControl>

                    <FormControl>
                        <Input placeholder="53" label='Your weight' textContentType='telephoneNumber' keyboardType='decimal-pad' onChangeText={formik.handleChange('weight')} onBlur={formik.handleBlur('weight')} value={formik.values.weight} trailingAccessory={<Text>KG</Text>} />
                        {
                            formik.touched?.weight && formik.errors?.weight && <ErrorLabel>{formik.errors.weight}</ErrorLabel>
                        }
                    </FormControl>
                    <FormControl style={{ marginTop: 20 }}>
                        <ButtonUI label="Continue" backgroundColor={colors.PRIMARY} onPress={formik.handleSubmit} />
                    </FormControl>
                </FormControl>
            </View>
        </MainContent>
    )
}

export default Weight

const styles = StyleSheet.create({
    ...SignupStyles
})