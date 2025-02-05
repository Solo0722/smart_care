import { StyleSheet, TextProps, Text as TextUI, View } from 'react-native'
import React from 'react'
import { colors, Font } from '@/constants/theme'

const Text = (props: TextProps) => {
    return (
        <TextUI  {...props} style={{ fontFamily: Font.FontRegular, color: colors.FOREGROUND, ...props.style as object }}>{props.children}</TextUI>
    )
}

export default Text

const styles = StyleSheet.create({})