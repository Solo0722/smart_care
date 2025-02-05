import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextField from 'react-native-ui-lib/textField'
import { TextFieldProps } from 'react-native-ui-lib'
import { colors, Font } from '@/constants/theme';

type Props = TextFieldProps;
const Input = (props: Props) => {
    return (
        <TextField placeholderTextColor={"#ccc"}  {...props} fieldStyle={[styles.inputField, props.fieldStyle]} style={[styles.inputText, props.style]} labelStyle={[styles.labelStyle, props.labelStyle]} />
    )
}

export default Input

export const styles = StyleSheet.create({
    inputField: {
        backgroundColor: colors.ACCENT_BACKGROUND,
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
        color: colors.ACCENT_FOREGROUND,
        marginBottom: 5
    }
})