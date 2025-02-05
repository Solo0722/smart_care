import React from 'react'
import MainContent from '@/components/MainContent'
import { Image, StyleSheet, View } from 'react-native'
import { Link } from 'expo-router'
import { colors, Font } from '@/constants/theme'
import { Button } from 'react-native-ui-lib'
import Text from '@/components/Text'

const Welcome = () => {

    return (
        <MainContent isPadded>
            <View style={styles.welcomeContainer}>
                <View style={{ flex: 1, width: "100%", paddingVertical: 20, alignItems: "center", justifyContent: "center" }}>
                    <View style={styles.imageContainer}>
                        <Image source={require('@/assets/images/medical-kit.png')} style={styles.image} />
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.headerText}>Welcome {"\n"}to SmartCare</Text>
                    <Text style={styles.subText}>Unlock the power of intelligent health metrics tailored just for you only</Text>
                    <Link href="/signup" asChild>
                        <Button style={styles.button} center label="Get Started" labelStyle={styles.buttonText} />
                    </Link>
                </View>
            </View>
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
    imageContainer: {
        width: "100%",
        marginTop: 40
        // height: 350,
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "contain"
    },
    headerText: {
        fontSize: 30,
        fontFamily: Font.FontBold,
        lineHeight: 38,
        letterSpacing: -0.9,
        textAlign: "center"
    },
    subText: {
        fontSize: 14,
        lineHeight: 25.6,
        letterSpacing: -0.2,
        textAlign: "center",
        fontFamily: Font.FontRegular,
        color: colors.ACCENT_FOREGROUND
    },
    textContainer: {
        gap: 20,
        width: "100%",

    },
    button: {
        backgroundColor: colors.PRIMARY,
        padding: 200,
        height: 60,
        borderRadius: 16,
        width: "100%"
    },
    buttonText: {
        fontFamily: Font.FontMedium,
    }

})
