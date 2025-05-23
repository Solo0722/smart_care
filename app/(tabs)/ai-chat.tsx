import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import MainContent from '@/components/MainContent'
import { Card } from 'react-native-ui-lib'
import Text from '@/components/Text'
import { colors, Font } from '@/constants/theme'
import ChatCard from '@/components/ChatCard'
import Iconify from 'react-native-iconify'

type HeaderItem = {
    icon?: string;
    color?: string;
    title: string;
    onPress?: () => void,
}
const AIChat = () => {

    const renderHeader = () => (
        <>
            <View style={styles.headerContainer}>
                <Card style={{ backgroundColor: "black", width: "100%", height: "100%", flex: 1 }}>
                </Card>
                <View style={styles.chatCardsContainer}>
                    <Card style={{ flex: 1, }}>
                        {renderHeaderItem({
                            icon: "solar:user-id-outline", title: "Start New Chat",
                        })}
                    </Card>
                    <Card style={{ flex: 1, }}>
                        {renderHeaderItem({
                            icon: "solar:user-id-outline", title: "Search By Image"
                        })}
                    </Card>
                </View>
            </View>
            <View><Text style={styles.listTitle}>Recent chats</Text></View>
        </>
    )

    const renderHeaderItem = (item: HeaderItem) => (
        <View style={{ ...styles.headerChatCard, backgroundColor: `${item.color}60` }} >
            <View style={{ ...styles.iconContainer, backgroundColor: item.color }}>
                <Iconify icon={"solar:user-id-outline"} color={colors.BLACK} size={20} />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={styles.headerChatCardTitle}>{item.title}</Text>
                <Iconify icon="solar:alt-arrow-right-outline" color={colors.BLACK} size={16} />
            </View>
        </View >
    )

    return (
        <MainContent isPadded style={{ paddingTop: 0 }}>
            <FlatList
                data={[...new Array(5).keys()]}
                showsVerticalScrollIndicator={false}
                fadingEdgeLength={30}
                ListHeaderComponent={renderHeader}
                ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
                renderItem={({ item }) => <ChatCard />}
            />
        </MainContent>
    )
}

export default AIChat

const styles = StyleSheet.create({
    headerContainer: {
        marginBottom: 40,
        height: 260,
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    },
    headerChatCard: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.ACCENT_FOREGROUND,
        justifyContent: "space-between"
    },
    chatCardsContainer: {
        height: "100%",
        width: "100%",
        gap: 10,
        flex: 1,
        // backgroundColor: "orange"
    },
    iconContainer: {
        width: 40,
        height: 40,
        padding: 7,
        borderRadius: 50,
        backgroundColor: colors.ACCENT_2,
        alignItems: "center",
        justifyContent: "center"
    },
    headerChatCardTitle: {
        fontSize: 14,
        width: "60%",
        fontFamily: Font.FontSemibold,
    },
    listTitle: {
        color: colors.ACCENT_FOREGROUND,
        fontSize: 11,
        marginBottom: 10
    }
})