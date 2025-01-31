import { StyleSheet, TextProps, View, ViewProps } from 'react-native'
import React from 'react'
import Text from './Text';
import capitalize from 'lodash/capitalize';

export const FormControl = (props: ViewProps) => (
    <View style={styles.formControl}  {...props}></View>
)


export const ErrorLabel = (props: TextProps) => (
    <Text style={styles.errorLabel} {...props}>{capitalize(props.children)}</Text>
)

const styles = StyleSheet.create({
    formControl: {
        marginVertical: 10
    },
    errorLabel: {
        color: "#ff0000",
        marginTop: 2,
        fontSize: 10
    }
})