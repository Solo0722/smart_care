import { StyleSheet, TextProps, Text as TextUI, View } from 'react-native'
import React from 'react'
import { Font } from '@/constants/theme'

const Text = (props: TextProps) => {
    return (
        <TextUI  {...props} style={{ fontFamily: Font.FontRegular, ...props.style }}>{props.children}</TextUI>
    )
}

export default Text

const styles = StyleSheet.create({})