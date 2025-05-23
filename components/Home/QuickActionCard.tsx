import { StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '@/constants/theme'
import { Card } from 'react-native-ui-lib'
import Iconify from 'react-native-iconify'
import Text from '../Text'

const QuickActionCard = () => {
    return (
        <Card style={styles.cardContainer} >
            <Iconify icon="solar:stethoscope-bold" color={colors.PRIMARY} size={30} />
            <Text style={{ textAlign: "center", marginTop: 10, fontSize: 10 }}>Cardio</Text>

        </Card>
    )
}

export default QuickActionCard

const styles = StyleSheet.create({
    cardContainer: {
        width: 100,
        height: 100,
        // backgroundColor: `${colors.PRIMARY}`,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center"
    },
})