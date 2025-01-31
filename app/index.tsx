import React from 'react'
import MainContent from '@/components/MainContent'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { colors, Font } from '@/constants/theme'
import { Button } from 'react-native-ui-lib'

const Welcome = () => {

    return (
        <MainContent isPadded>
            <View style={styles.welcomeContainer}>
                <View style={{ flex: 1, width: "100%", paddingVertical: 20 }}>
                    <View style={styles.imageContainer}>
                        <Image source={require('@/assets/images/doctor.jpeg')} style={styles.image} />
                    </View>
                </View>
                <Link href="/signup" asChild>
                    <Button style={styles.button} center label="Get Started" labelStyle={styles.buttonText} />
                </Link>
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
    },
    infoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    imageContainer: {
        width: "100%",
        height: 350,
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
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
