import { Dimensions, FlatList, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React, { useCallback } from 'react'
import MainContent from '@/components/MainContent'
import Text from '@/components/Text'
import { Avatar, Card } from 'react-native-ui-lib'
import { useFocusEffect, useNavigation } from 'expo-router'
import { colors, Font } from '@/constants/theme'
import Input from '@/components/Input'
import Iconify from 'react-native-iconify'
import ButtonUI from '@/components/Button'
import Banner from '@/components/Home/Banner'
import QuickActionCard from '@/components/Home/QuickActionCard'

const Home = () => {

  const navigation = useNavigation();

  const navOptions = useCallback(() => {
    navigation.setOptions({
      headerLeft: () => <View style={{ width: "100%", flexDirection: "row", gap: 5, alignItems: "center" }}>
        <Avatar size={36} source={{ uri: "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg" }} />
        <View>
          <Text style={styles.nameText}>Good morning</Text>
          <Text style={styles.greetingText}>Owusu-Ansah Solomon</Text>
        </View>
      </View>,
      headerLeftContainerStyle: styles.greetingContainer,
      headerTitle: "",
      headerRight: () => <View>
        <Pressable style={{ backgroundColor: colors.ACCENT_BACKGROUND, padding: 7, borderRadius: 10 }}>
          <Iconify icon="solar:bell-outline" color={colors.ACCENT_FOREGROUND} size={16} />
        </Pressable>
      </View>,
      headerRightContainerStyle: styles.avatarContainer
    })
  }, [navigation])

  useFocusEffect(() => {
    navOptions()
  })

  const qucikActions = [
    {
      name: ""
    }
  ]


  return (
    <MainContent isPadded style={{ paddingTop: 10 }}>
      <ScrollView style={{ gap: 10, columnGap: 10, rowGap: 10 }} >
        <Input placeholder='Search actions...' style={{ paddingLeft: 10 }} fieldStyle={{ paddingVertical: 10, backgroundColor: colors.WHITE, shadowColor: colors.ACCENT_2, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 2, elevation: 2 }} leadingAccessory={<Iconify icon="solar:minimalistic-magnifer-outline" color={colors.ACCENT_2} size={16} />} />
        <View style={{ marginTop: 13, paddingVertical: 3 }}>
          <Banner />
        </View>
        <View style={{ marginTop: 13, paddingVertical: 3 }}>
          <FlatList horizontal data={[...new Array(5)]} style={{ paddingVertical: 3 }} ItemSeparatorComponent={() => <View style={{ width: 10 }} />} renderItem={() => <Card style={{ height: 40, width: 100, borderRadius: 10 }}></Card>} />
        </View>
        <View style={{ marginTop: 13, paddingVertical: 3, gap: 4 }}>
          <Text style={{ fontSize: 12, fontFamily: Font.FontSemibold }}>Quick Actions</Text>
          <FlatList data={[...new Array(4)]} renderItem={() => <QuickActionCard />} style={{ paddingVertical: 3 }} ItemSeparatorComponent={() => <View style={{ width: 10 }} />} horizontal />
        </View>
      </ScrollView>
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
    color: colors.ACCENT_FOREGROUND,
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