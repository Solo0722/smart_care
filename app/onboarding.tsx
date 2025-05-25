import { Dimensions, StatusBar, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import MainContent from '@/components/MainContent'
import Iconify from 'react-native-iconify'
import { colors, Font } from '@/constants/theme'
import { onboardingSteps } from '@/constants/constants'
import Svg, { Path } from 'react-native-svg'
import Text from '@/components/Text'
import ButtonUI from '@/components/Button'
import { router } from 'expo-router'

const height = 100;
const { width } = Dimensions.get('window');

const Onboarding = () => {
    const totalSteps = 4
    const [currentStep, setCurrentStep] = React.useState(0)
    const currentStepData = onboardingSteps[currentStep]

    useEffect(() => {
        StatusBar.setBackgroundColor(currentStepData.fillColor);
        StatusBar.setTranslucent(true);
        StatusBar.setBarStyle("dark-content");
        StatusBar.setHidden(false);
    }, [currentStep])

    const onNext = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        }
        else {
            router.push("/signup");
        }
    }

    return (
        <MainContent style={{ backgroundColor: currentStepData.fillColor, position: "relative" }}>

            <View style={styles.stepperContainer}>
                {Array.from({ length: totalSteps }, (_, index) => {
                    const isActive = index <= currentStep;

                    return (
                        <View
                            key={index}
                            style={{ ...styles.dot, ...(isActive ? styles.activeDot : {}) }}
                        />
                    );
                })}
            </View>
            <View style={{ ...styles.onboardingContainer, backgroundColor: currentStepData.fillColor }}>
                <currentStepData.svg style={{ flex: 1 }} />
            </View>
            <View style={styles.contentWrapper}>
                {/* Arc on top of content */}
                <Svg
                    width={width}
                    height={80}
                    viewBox={`0 0 ${width} 80`}
                    style={{
                        position: 'absolute',
                        top: -80,
                        zIndex: 2,
                    }}
                >
                    <Path
                        d={`M0,80 Q${width / 2},0 ${width},80 L${width},80 L0,80 Z`}
                        fill={colors.LIGHT_BG}
                    />
                </Svg>

                {/* Actual content */}
                <View style={styles.content}>
                    <View style={{ ...styles.tagContainer, backgroundColor: currentStepData.tagFillColor }}>
                        <Text style={styles.tag}>{currentStepData.tag}</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 4, flexWrap: "wrap" }}>
                        {currentStepData.text.split(' ').map(text => {
                            const isTextInHighlighted = currentStepData.textsToHighlight.includes(text.trim().toLowerCase());
                            return (
                                <Text key={text} style={{ ...styles.mainText, color: isTextInHighlighted ? currentStepData.textColor : colors.BROWN }}>{text}</Text>
                            );
                        })}
                    </View>

                    <ButtonUI
                        backgroundColor={"#4B3425"}
                        children={<Iconify icon="solar:arrow-right-bold" color={colors.WHITE} size={20} />}
                        avoidInnerPadding
                        avoidMinWidth
                        style={{
                            width: 60,
                            height: 60,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 1000
                        }}
                        onPress={onNext}
                    />
                </View>
            </View>

        </MainContent>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    stepperContainer: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        position: "absolute",
        top: 50,
        zIndex: 100000,
    },
    onboardingContainer: {
        flex: 1
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 1234,
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: colors.BROWN,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeDot: {
        backgroundColor: colors.BROWN,
    },

    container: {
        backgroundColor: colors.LIGHT_BG,
    },
    content: {
        backgroundColor: colors.LIGHT_BG,
        gap: 24,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        paddingHorizontal: 22,
        paddingVertical: 30
    },
    tagContainer: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100
    },
    tag: {
        fontFamily: Font.FontBold,
        fontSize: 12,
        letterSpacing: 1.2,
        textAlign: "center",
        textTransform: "uppercase"
    },
    mainText: {
        fontSize: 30,
        fontFamily: Font.FontBold,
        lineHeight: 38,
        letterSpacing: -0.6,
        textAlign: "center",
    },
    contentWrapper: {
        position: "relative",
        backgroundColor: colors.LIGHT_BG,
        zIndex: 2,
    },
})