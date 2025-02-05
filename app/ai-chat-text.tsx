import { StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import MainContent from '@/components/MainContent'
import Input from '@/components/Input'
import ButtonUI from '@/components/Button'
import Iconify from 'react-native-iconify'
import { colors } from '@/constants/theme'
import { useNavigation } from 'expo-router'
const AIChatText = () => {
    const [toggleTabBar, setToggleTabBar] = React.useState(false);

    const navigation = useNavigation();
    const onToogleTabBar = useCallback(() => {
        navigation.setOptions({
            tabBarStyle: {
                display: toggleTabBar ? "flex" : "none",
            }
        })
    }, [toggleTabBar])

    useEffect(() => {
        onToogleTabBar();
    }, [toggleTabBar])

    return (
        <MainContent isPadded>
            <View style={{ flex: 1 }}>
                <ButtonUI label="Send" backgroundColor={colors.PRIMARY} onPress={() => setToggleTabBar(!toggleTabBar)} />
            </View>
            <View style={styles.sendContainer}>
                <View style={{ flexGrow: 1 }}>
                    <Input style={{ flexGrow: 1, width: "100%" }} placeholder='Type your message here' trailingAccessory={<Iconify icon="solar:plain-bold" color={colors.PRIMARY} size={20} />} />
                </View>
            </View>
        </MainContent>
    )
}

export default AIChatText

const styles = StyleSheet.create({
    sendContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
    }
})