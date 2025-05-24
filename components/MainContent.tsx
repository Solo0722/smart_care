import React from 'react'
import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = ViewProps & { isPadded?: boolean, isSafeArea?: boolean };
const MainContent = (props: Props) => {
    const insets = useSafeAreaInsets().top;
    // If isSafeArea is true, we add the top padding equal to the safe area insets
    return (
        <View style={[{ flex: 1, width: "100%", height: "100%", paddingHorizontal: props.isPadded ? 20 : 0, paddingTop: (props.isSafeArea || props.isPadded) ? insets : 0, paddingBottom: (props.isSafeArea || props.isPadded) ? 20 : 0 }, props.style]}>
            {props.children}
        </View>
    )
}


export default MainContent

