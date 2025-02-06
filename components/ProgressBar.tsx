import { colors } from '@/constants/theme';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
    return (
        <View style={styles.container}>
            <View style={styles.progressContainer}>
                {Array.from({ length: totalSteps }, (_, index) => (
                    <View
                        key={index}
                        style={[styles.step, index < currentStep ? styles.activeStep : styles.inactiveStep]}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        alignItems: 'center',
    },
    progressContainer: {
        flexDirection: 'row',
        gap: 4,
    },
    step: {
        height: 4,
        flex: 1,
        borderRadius: 2,
    },
    activeStep: {
        backgroundColor: colors.PRIMARY,
    },
    inactiveStep: {
        backgroundColor: colors.ACCENT_BACKGROUND,
    },
});
