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
import { allergies } from '@/shared/shared';
import Text from '@/components/Text';
import { truncate } from 'lodash';

export const schema = yup.object().shape({
    allergies: yup.array().of(yup.string()).min(1).required(),
})
const Allergies = () => {

    const formik = useFormik<{ allergies: string[] }>({
        validationSchema: schema,
        initialValues: {
            allergies: [],
        },
        onSubmit: () => router.push({
            pathname: "/successful-completion",
            params: {
                message: "Yayy. You're all set.  Click the button below to continue",
                routeName: "(tabs)"
            }
        })
    })
    const [searchTerm, setSearchTerm] = useState("");

    const allergiesData = useMemo(() => {
        return allergies.filter(data => data.filter(d => d.toLowerCase().includes(searchTerm.toLowerCase())).length > 0)
    }, [searchTerm])

    const checkIsSelected = (item: string) => {
        return formik.values.allergies.includes(item)
    }

    const handleItemPress = (item: string) => {
        if (formik.values.allergies.includes(item)) {
            formik.setFieldValue('allergies', formik.values.allergies.filter((i) => i !== item))
        } else {
            formik.setFieldValue('allergies', [...formik.values.allergies, item])
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
                <Text style={styles.headerText}>Specify current allergies</Text>
                <Text style={styles.subText}>Sign up to create an account and get started.Sign up to get started.</Text>
            </View>
            <View style={styles.formContainer}>
                <FormControl>

                    <FormControl>
                        <ScrollView horizontal contentContainerStyle={{ alignItems: "center", justifyContent: "center" }} style={{ marginHorizontal: -20 }}>
                            <View>
                                {
                                    allergiesData.map(data => (
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
                            formik.touched?.allergies && formik.errors?.allergies && <ErrorLabel>{formik.errors.allergies}</ErrorLabel>
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

export default Allergies

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