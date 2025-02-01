import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextField from 'react-native-ui-lib/textField'
import { TextFieldProps } from 'react-native-ui-lib'
import { Font } from '@/constants/theme';

type Props = TextFieldProps;
const Input = (props: Props) => {
    return (
        <TextField fieldStyle={[styles.inputField, props.fieldStyle]} style={[styles.inputText, props.style]} labelStyle={[styles.labelStyle, props.labelStyle]} placeholderTextColor={"#ccc"}  {...props} />
    )
}

export default Input

export const styles = StyleSheet.create({
    inputField: {
        backgroundColor: "#f9fafc",
        padding: 15,
        borderRadius: 10,
    },
    inputText: {
        fontFamily: Font.FontRegular,
        fontSize: 12
    },

    labelStyle: {
        fontFamily: Font.FontRegular,
        fontSize: 11,
        // color: "#666",
        marginBottom: 5
    }
})