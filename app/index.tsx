import React, { useEffect } from 'react'
import MainContent from '@/components/MainContent'
import { StatusBar, StyleSheet, View } from 'react-native'
import { Font } from '@/constants/theme'
import Text from '@/components/Text'
import { healthQuotes } from '@/constants/constants'
import Logo4 from '@/assets/images/logo4.svg'
import Logo from '@/assets/svgs/Logo'

const Welcome = () => {

    const [screenShake, setScreenShake] = React.useState(true);
    const [currentQuote, setCurrentQuote] = React.useState(0);

    // React.useEffect(() => {
    //     const shakeListener = () => {
    //         setScreenShake(true);
    //         setTimeout(() => {
    //             setScreenShake(false);
    //         }, 2000);
    //     };

    //     const subscription = DeviceMotion.addListener(shakeListener);

    //     return () => {
    //         subscription.remove();
    //     };
    // }, []);

    useEffect(() => {

        StatusBar.setBackgroundColor(screenShake ? "#FE814B" : "#9BB068");
        StatusBar.setTranslucent(true);
        StatusBar.setBarStyle("light-content");
        StatusBar.setHidden(false);

        const shakeListener = () => {
            setScreenShake(true);
            setTimeout(() => {
                setScreenShake(false);
            }, 2000);
        };

        const interval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % healthQuotes.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [screenShake, currentQuote])

    const renderQuotes = () => {
        return (
            <View style={styles.quoteContainer}>
                {/* <Logo4 width={64} height={64} /> */}
                <Logo />
                <Text style={styles.quote}>{healthQuotes[currentQuote].quote}</Text>
                <Text style={styles.quoteAuthor}>- {healthQuotes[currentQuote].author}</Text>
            </View>
        )
    }

    const renderFetchingData = () => {
        return (
            <View style={styles.textContainer}>
                <Text style={styles.topText}>Fetching data...</Text>
                <Text style={styles.bottomText}>Shake your screen to interact!</Text>
            </View>
        )
    }
    return (
        <MainContent isPadded style={{ ...styles.mainContent, backgroundColor: screenShake ? "#FE814B" : "#9BB068" }}>
            {screenShake ? renderQuotes() : renderFetchingData()}
        </MainContent>
    )
}

export default Welcome

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#9BB068"
    },
    textContainer: {
        gap: 12,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    topText: {
        fontSize: 36,
        fontFamily: Font.FontBold,
        lineHeight: 44,
        letterSpacing: 1.08,
        textAlign: "center",
        color: "#fff",
    },
    bottomText: {
        fontSize: 18,
        fontFamily: Font.FontRegular,
        lineHeight: 28.8,
        letterSpacing: -0.18,
        textAlign: "center",
        color: "#fff",
    },
    quoteContainer: {
        gap: 48,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",

    },
    quote: {
        fontSize: 24,
        fontFamily: Font.FontBold,
        lineHeight: 32,
        letterSpacing: -0.48,
        color: "#fff",
        textAlign: "center",

    },
    quoteAuthor: {
        fontSize: 14,
        fontFamily: Font.FontBold,
        letterSpacing: 1.4,
        textAlign: "center",
        color: "#fff",
    }
})
