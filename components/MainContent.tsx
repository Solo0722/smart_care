import React from 'react'
import { View, ViewProps } from 'react-native';

type Props = ViewProps & { isPadded?: boolean };
const MainContent = (props: Props) => {
    return (
        <View style={[{ flex: 1, width: "100%", height: "100%", padding: props.isPadded ? 20 : 0 }, props.style]}>
            {props.children}
        </View>
    )
}


export default MainContent

