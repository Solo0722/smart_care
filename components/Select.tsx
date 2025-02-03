import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Incubator, PanningProvider, Picker, PickerProps, RenderCustomModalProps } from 'react-native-ui-lib';
import { DialogProps } from 'react-native-ui-lib/src/incubator';
import { Iconify } from 'react-native-iconify';
import Input, { styles as InputStyles } from './Input';
import { colors } from '@/constants/theme';

type Props = {
    pickerProps?: PickerProps,
    dialogProps?: DialogProps
}

const Select = (props: Props) => {

    const renderDialog: PickerProps['renderOverlay'] = (modalProps: RenderCustomModalProps) => {
        const { visible, children, toggleModal, onDone } = modalProps;
        return (
            <Incubator.Dialog
                visible={visible}
                onDismiss={() => {
                    onDone();
                    toggleModal();
                }}
                width="90%"
                // height="45%"
                useSafeArea
                direction={PanningProvider.Directions.DOWN}
                center
                centerV
                {...props.dialogProps}
            >
                <ScrollView>{children}</ScrollView>
            </Incubator.Dialog>
        );
    };
    return (
        <Picker
            renderInput={(value, label) => <Input label={props.pickerProps?.label} value={label} placeholder={props.pickerProps?.placeholder} />}
            // renderOverlay={renderDialog}
            {...props.pickerProps}
        />
    )
}

export default Select

const styles = StyleSheet.create({
    ...InputStyles
})