import React, { useEffect } from 'react'
import MainContent from '@/components/MainContent'
import { StatusBar, StyleSheet, View } from 'react-native'
import { Link, useNavigation, useRouter } from 'expo-router'
import { colors, Font } from '@/constants/theme'
import { Button } from 'react-native-ui-lib'
import Text from '@/components/Text'
import Logo from '@/assets/svgs/Logo'
import { hexToRGBA } from '@/services/uiService'
import Toy from '@/assets/images/toy.svg'
import ButtonUI from '@/components/Button'
import Iconify from 'react-native-iconify'

const Welcome = () => {
    const router = useRouter()
    const navigation = useNavigation();
    useEffect(() => {
        StatusBar.setBackgroundColor(colors.LIGHT_BG);
        StatusBar.setTranslucent(true);
        StatusBar.setBarStyle("dark-content");
        StatusBar.setHidden(false);
    }, [])
    return (
        <MainContent isPadded style={{ backgroundColor: colors.LIGHT_BG }}>
            <View style={styles.welcomeContainer}>
                <View style={styles.topContainer}>
                    <Logo fillColor={colors.BROWN} dotColor='#fff' />
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>
                            Welcome to the ultimate <Text style={{ ...styles.headerText, color: "#926247" }}>freud</Text>  AI experience!
                        </Text>
                        <Text style={styles.subText}>
                            Your mindful mental health AI companion for everyone, anywhere 🍃</Text>
                    </View>
                </View>
                <Toy />
                <ButtonUI label='Get Started' backgroundColor={"#4B3425"} iconOnRight children={<Iconify icon="solar:arrow-right-bold" color={colors.WHITE} size={20} style={{ position: "absolute", right: 24 }} />} style={{ paddingHorizontal: 24, paddingVertical: 16, borderRadius: 1000 }} labelStyle={{ marginRight: 24, fontSize: 14, fontFamily: Font.FontBold }} onPress={() => router.push("/onboarding")} />
            </View>
            <Text style={styles.footerText}>Already have an account? <Link href="/signin" replace style={{ color: colors.ORANGE }}>Sign in</Link></Text>
        </MainContent>
    )
}

export default Welcome

const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32
    },
    topContainer: {
        gap: 16,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    headerContainer: {
        gap: 16,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontSize: 30,
        fontFamily: Font.FontBold,
        lineHeight: 38,
        letterSpacing: -0.6,
        textAlign: "center",
        color: colors.BROWN,
    },
    subText: {
        fontFamily: Font.FontRegular,
        fontSize: 18,
        lineHeight: 28.8,
        letterSpacing: -0.18,
        color: hexToRGBA("#1F160F", 0.64),
        textAlign: "center",
    },
    footerText: {
        fontSize: 14,
        fontFamily: Font.FontRegular,
        lineHeight: 28.8,
        letterSpacing: -0.18,
        textAlign: "center",
        color: hexToRGBA("#1F160F", 0.64)
    }
})
