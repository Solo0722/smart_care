import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
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
import { GridList } from 'react-native-ui-lib';

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

    const checkIsSelected = (item: string) => {
        return formik.values.medicalConditions.includes(item)
    }

    const renderItem = ({ item }: { item: string }) => (
        <TouchableOpacity style={[styles.itemContainer, checkIsSelected(item) && styles.itemSelectedContainer]} key={item} onPress={() => formik.setFieldValue('medicalConditions', [...formik.values.medicalConditions, item])}>
            <Text style={styles.subText}>{item}</Text>
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
                        <FlatList
                            data={diseases}
                            horizontal
                            keyExtractor={(_, index) => `col-${index}`}
                            ItemSeparatorComponent={() => <View style={{ marginHorizontal: 7 }} />}
                            // contentContainerStyle={{ alignItems: 'flex-start' }}
                            renderItem={({ item }) => (
                                <FlatList
                                    data={item}
                                    keyExtractor={(text) => text}
                                    renderItem={renderItem}
                                    contentContainerStyle={{ alignItems: 'flex-start', minWidth: 0 }}
                                    ItemSeparatorComponent={() => <View style={{ marginVertical: 7 }} />}
                                />
                            )}
                        />
                        {
                            formik.touched?.medicalConditions && formik.errors?.medicalConditions && <ErrorLabel>{formik.errors.medicalConditions}</ErrorLabel>
                        }
                    </FormControl>
                    <FormControl>
                        <ButtonUI label="Continue" backgroundColor={colors.PRIMARY} onPress={formik.handleSubmit} />
                    </FormControl>
                </FormControl>
            </View>
        </MainContent>
    )
}

export default MedicalConditions

const styles = StyleSheet.create({
    ...SignupStyles, itemContainer: {
        padding: 15,
        borderRadius: 10,
        width: "100%",
        backgroundColor: colors.ACCENT_BACKGROUND,
        alignItems: 'flex-start'
        // justifyContent: "center",
        // alignItems: "center"
    },
    itemSelectedContainer: {
        borderWidth: 1,
        borderColor: colors.PRIMARY,
        backgroundColor: `${colors.PRIMARY}60`
    },
})