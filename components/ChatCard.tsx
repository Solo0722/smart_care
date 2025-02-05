import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/theme'
import Iconify from 'react-native-iconify'
import Text from './Text'

const ChatCard = () => {
    return (
        <TouchableOpacity style={styles.card}>
            <View style={{ gap: 10, width: "70%", flexDirection: "row", alignItems: "center" }}>
                <View style={styles.iconContainer}>
                    <Iconify icon={"solar:user-id-outline"} color={colors.ACCENT} size={16} />
                </View>
                <Text style={{ ...styles.cardTitle }}>Five potential symptoms of a diabetic patient Five potential symptoms of a diabetic patientn</Text>
            </View>
            <View>
                <Iconify icon="solar:alt-arrow-right-outline" color={colors.BLACK} size={12} />
            </View>
        </TouchableOpacity>
    )
}

export default ChatCard

const styles = StyleSheet.create({
    card: {
        height: 60,
        width: "100%",
        borderRadius: 10,
        // backgroundColor: colors.ACCENT_FOREGROUND,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },
    iconContainer: {
        // padding: 10,
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: colors.ACCENT_2,
        alignItems: "center",
        justifyContent: "center"
    },
    cardTitle: {
        fontSize: 11
    }
})