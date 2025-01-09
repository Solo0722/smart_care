import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-ui-lib'
import { Link } from 'expo-router'

const Welcome = () => {
    return (
        <View style={styles.container}>
            <Link href="/signin" asChild>
                <TouchableOpacity>
                    <Text>Sign In</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})