import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import Text from '@/components/Text'
import { colors } from '@/constants/theme'
import { ProgressBar } from '@/components/ProgressBar'


const HealthAssessmentLayout = () => {

    return (
        <Stack initialRouteName='index' screenOptions={{
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            contentStyle: {
                backgroundColor: "#ffffff"
            },
            headerTitle: () => <View style={{ alignItems: "center", justifyContent: "center" }}><ProgressBar currentStep={1} totalSteps={7} /></View>,
            headerRight: () => <View style={{ marginRight: 15 }}><Link href="/signup" asChild><Pressable>
                <Text style={{ fontSize: 10, color: colors.PRIMARY }}>Skip</Text>
            </Pressable></Link></View>,
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