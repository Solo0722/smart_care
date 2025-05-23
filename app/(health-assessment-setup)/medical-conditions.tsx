import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { styles as SignupStyles } from '../signup';
import MainContent from '@/components/MainContent';
import { ErrorLabel, FormControl } from '@/components/Form';
import ButtonUI from '@/components/Button';
import { colors } from '@/constants/theme';
import { router } from 'expo-router';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { diseases } from '@/shared/shared';
import Text from '@/components/Text';
import { truncate } from 'lodash';

export const medicalConditionsSchema = yup.object().shape({
    medicalConditions: yup.array().of(yup.string()).min(1).required(),
})
const MedicalConditions = () => {

    const formik = useFormik<{ medicalConditions: string[] }>({
        validationSchema: medicalConditionsSchema,
        initialValues: {
            medicalConditions: [],
        },
        onSubmit: () => router.push("/(health-assessment-setup)/allergies")
    })
    console.log(formik.values.medicalConditions)
    const [searchTerm, setSearchTerm] = useState("");

    const diseasesData = useMemo(() => {
        return diseases.filter(data => data.filter(d => d.toLowerCase().includes(searchTerm.toLowerCase())).length > 0)
    }, [searchTerm])

    const checkIsSelected = (item: string) => {
        return formik.values.medicalConditions.includes(item)
    }

    const handleItemPress = (item: string) => {
        console.log(item)
        if (formik.values.medicalConditions.includes(item)) {
            formik.setFieldValue('medicalConditions', formik.values.medicalConditions.filter((i) => i !== item))
        } else {
            formik.setFieldValue('medicalConditions', [...formik.values.medicalConditions, item])
        }

    }

    const renderItem = ({ item }: { item: string }) => (
        <TouchableOpacity key={item} style={[styles.itemContainer, checkIsSelected(item) && styles.itemSelectedContainer]} onPress={() => handleItemPress(item)}>
            <Text style={{ ...styles.subText, color: checkIsSelected(item) ? colors.PRIMARY : colors.ACCENT_FOREGROUND }}>{truncate(item, { length: 20 })}</Text>
        </TouchableOpacity>
    )

    return (
        <MainContent isPadded>
            <View style={styles.header}>
                <Text style={styles.headerText}>Specify current medical conditions</Text>
                <Text style={styles.subText}>Sign up to create an account and get started.Sign up to get started.</Text>
            </View>
            <View style={styles.formContainer}>
                <FormControl>

                    <FormControl>
                        <ScrollView horizontal contentContainerStyle={{ alignItems: "center", justifyContent: "center" }} style={{ marginHorizontal: -20 }}>
                            <View>
                                {
                                    diseasesData.map(data => (
                                        <View key={data[0]} style={{ flexDirection: "row", flexWrap: "wrap" }}>
                                            {
                                                data.flat(1).map((item, index) => (
                                                    renderItem({ item })
                                                ))
                                            }
                                        </View>
                                    ))


                                }

                            </View>
                        </ScrollView>
                        {
                            formik.touched?.medicalConditions && formik.errors?.medicalConditions && <ErrorLabel>{formik.errors.medicalConditions}</ErrorLabel>
                        }
                    </FormControl>
                    <FormControl>
                        <ButtonUI label="Continue" backgroundColor={colors.PRIMARY} onPress={formik.handleSubmit} />
                    </FormControl>
                </FormControl>
            </View>
        </MainContent >
    )
}

export default MedicalConditions

const styles = StyleSheet.create({
    ...SignupStyles, itemContainer: {
        borderRadius: 12,
        backgroundColor: colors.ACCENT_BACKGROUND,
        height: 48,
        // width: 77,
        paddingVertical: 8,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 4,
        borderWidth: 1,
        borderColor: colors.ACCENT_BACKGROUND
    },
    itemSelectedContainer: {
        borderWidth: 1,
        borderColor: colors.PRIMARY,
        backgroundColor: `${colors.PRIMARY}60`
    },
})