import { StyleSheet } from 'react-native'
import React from 'react'
import { Button, ButtonProps } from 'react-native-ui-lib'
import { Font } from '@/constants/theme';

type Props = ButtonProps & {
    isLoading?: boolean;
};
const ButtonUI = (props: Props) => {
    return (
        <Button {...props} labelStyle={[styles.labelStyle, props.labelStyle]} borderRadius={props.borderRadius ?? 10} disabled={props.isLoading} label={props.isLoading ? "Loading..." : props.label} />
    )
}

export default ButtonUI

const styles = StyleSheet.create({
    labelStyle: {
        fontFamily: Font.FontMedium,
        fontSize: 12
    }
})