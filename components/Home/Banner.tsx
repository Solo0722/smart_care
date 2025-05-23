import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/theme'
import { Card } from 'react-native-ui-lib'
import Svg, { Path } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

const Banner = () => {
    return (
        <Card style={styles.cardContainer}>
            <LinearGradient
                colors={["#13b8a7", "#0fa89b", "#0b8d89"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >

            </LinearGradient>
        </Card>
    )
}

export default Banner

const styles = StyleSheet.create({
    cardContainer: {
        height: 180,
        width: "100%",
        borderRadius: 16,
        // backgroundColor: colors.PRIMARY,
        overflow: "hidden",
    },
    gradient: {
        flex: 1,
        borderRadius: 10,
    },
})