import React from 'react'
import { StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Text from './Text';
import { router } from 'expo-router';
import { colors, Font } from '@/constants/theme';
import Iconify from 'react-native-iconify';
import ChevronLeft from '@/assets/svgs/ChevronLeft';

type Props = ViewProps & { isPadded?: boolean, isSafeArea?: boolean, showTopNav?: boolean, showBackButton?: boolean, showTitle?: boolean, title?: string, onBackPress?: () => void, titleStyle?: object, children?: React.ReactNode, backBtnStyle?: object, backBtnIconColor?: string, backBtnIconSize?: number, style?: object, toolbar?: React.ReactNode };
const MainContent = (props: Props) => {
    const insets = useSafeAreaInsets().top;
    const { isPadded, showBackButton, showTitle, title, style, isSafeArea, showTopNav, children, titleStyle, backBtnStyle, onBackPress, backBtnIconColor, backBtnIconSize, toolbar } = props;
    // If isSafeArea is true, we add the top padding equal to the safe area insets
    return (
        <View style={[{ flex: 1, width: "100%", height: "100%", paddingHorizontal: isPadded ? 16 : 0, paddingTop: (isSafeArea || isPadded) ? insets : 0, paddingBottom: (isSafeArea || isPadded) ? 20 : 0 }, style]}>
            {
                showTopNav &&
                <View style={styles.topNav}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: 'center',
                        gap: 12,
                    }}>
                        {
                            showBackButton && <TouchableOpacity style={{ ...styles.backBtn, ...backBtnStyle }} onPress={onBackPress ?? router.canGoBack() ? () => router.back() : undefined}>
                                <ChevronLeft color={backBtnIconColor ?? colors.BROWN} />
                            </TouchableOpacity>
                        }
                        {showTitle && <Text style={{ ...styles.title, ...titleStyle }}>{title}</Text>}
                    </View>
                    {toolbar}
                </View>
            }
            {children}
        </View>
    )
}


export default MainContent

const styles = StyleSheet.create({
    topNav: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingTop: 16,
        zIndex: 10,
        marginBottom: 48
    },
    backBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        height: 45,
        borderRadius: 1234,
        borderWidth: 1,
        borderColor: colors.BROWN
    },
    title: {
        fontSize: 20,
        fontFamily: Font.FontExtraBold,
        color: colors.BROWN,
        letterSpacing: -0.2
    }
});
