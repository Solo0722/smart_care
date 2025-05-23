import { Pressable, StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect } from 'react'
import { Link, router, Stack, useFocusEffect, useNavigation, usePathname } from 'expo-router'
import Text from '@/components/Text'
import { colors } from '@/constants/theme'
import { ProgressBar } from '@/components/ProgressBar'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { healthRegScreens } from '@/constants/constants'


const HealthAssessmentLayout = () => {

    const healthReg = useSelector((state: RootState) => state.healthReg);
    const dispatch = useDispatch();
    const pathname = usePathname()

    const onSkip = () => {
        dispatch({
            type: "healthReg/incrementStep",
        })
        router.push(`/(health-assessment-setup)/${healthRegScreens[healthReg.currentStep - 1]}` as any);
    }

    console.log(pathname)
    const updateHealthRegStep = useCallback(() => {
        dispatch({
            type: "healthReg/setStep",
            payload: healthRegScreens.indexOf(pathname.replace(/\/(health-assessment-setup)\//, ''))
        })
    }, [pathname])

    useFocusEffect(updateHealthRegStep)

    return (
        <Stack initialRouteName='index' screenOptions={{
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            contentStyle: {
                backgroundColor: "#ffffff"
            },
            headerTitle: () => <View style={{ alignItems: "center", justifyContent: "center" }}><ProgressBar currentStep={healthReg.currentStep} totalSteps={healthReg.totalSteps} /></View>,
            headerRight: () => <View style={{ marginRight: 15 }}><Pressable onPress={onSkip}>
                <Text style={{ fontSize: 10, color: colors.PRIMARY }}>Skip</Text>
            </Pressable></View>,
        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="blood-type" />
            <Stack.Screen name="weight" />
            <Stack.Screen name="allergies" />
            <Stack.Screen name="date-of-birth" />
            <Stack.Screen name="medical-conditions" />
            <Stack.Screen name="medications" />
        </Stack>
    )
}

export default HealthAssessmentLayout

const styles = StyleSheet.create({})