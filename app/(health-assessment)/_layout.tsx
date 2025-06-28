import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const HealthAssessmentLayout = () => {
    return (
        <Stack initialRouteName='index' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="stress-level" />
            <Stack.Screen name="blood-type" />
            <Stack.Screen name="sleep-quality" />
            <Stack.Screen name="fitness-level" />
            <Stack.Screen name="medical-conditions" />
            <Stack.Screen name="medications-question" />
            <Stack.Screen name="medications" />
        </Stack>
    )
}

export default HealthAssessmentLayout

const styles = StyleSheet.create({})