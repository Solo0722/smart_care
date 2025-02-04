import { StyleSheet, View } from 'react-native'
import React, { useCallback } from 'react'
import MainContent from '@/components/MainContent'
import Text from '@/components/Text'
import { Avatar } from 'react-native-ui-lib'
import { useFocusEffect, useNavigation } from 'expo-router'
import { colors, Font } from '@/constants/theme'
import Input from '@/components/Input'
import Iconify from 'react-native-iconify'

const Home = () => {

  const navigation = useNavigation();

  const navOptions = useCallback(() => {
    navigation.setOptions({
      headerLeft: () => <View style={{ width: "100%" }}>
        <Text style={styles.nameText}>Hello, Solomon</Text>
        <Text style={styles.greetingText}>How are you doing today?</Text>
      </View>,
      headerLeftContainerStyle: styles.greetingContainer,
      headerTitle: "",
      headerRight: () => <View>
        <Avatar size={36} source={{ uri: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" }} />
      </View>,
      headerRightContainerStyle: styles.avatarContainer
    })
  }, [navigation])

  useFocusEffect(() => {
    navOptions()
  })


  return (
    <MainContent isPadded style={{ paddingVertical: 0 }}>
      <View>
        <Input placeholder='Search actions...' style={{ paddingLeft: 10 }} leadingAccessory={<Iconify icon="solar:minimalistic-magnifer-outline" color={colors.ACCENT_2} size={20} />} />
      </View>
    </MainContent>
  )
}

export default Home

const styles = StyleSheet.create({
  greetingContainer: {
    flexDirection: "row",
    paddingLeft: 20,
    width: "75%",
    flex: 1,
    flexGrow: 1,
    gap: 5,
  },
  nameText: {
    color: colors.ACCENT,
    fontSize: 10,
  },
  greetingText: {
    fontSize: 13,
    fontFamily: Font.FontSemibold
  },
  avatarContainer: {
    paddingHorizontal: 20
  },
})