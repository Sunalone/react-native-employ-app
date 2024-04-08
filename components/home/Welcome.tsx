import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { FONT, COLORS, SIZES } from '@/constants/Theme'
import SearchIcon from '@/assets/icons/search.png'

const jobsTypes = ["推荐", "附近", "最新"]

const Welcome = () => {
    const [searchValue, setSearchValue] = useState("")
    const [activeTab, setActiveTab] = useState("推荐");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello Sunalone </Text>
            <Text style={styles.message}>找到只属于您的工作</Text>
            <View style={styles.searchSpace}>
                <View style={styles.inputSpace}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder='搜索'
                        value={searchValue}
                        onChangeText={(text) => setSearchValue(text)} />
                </View>
                <TouchableOpacity style={styles.searchButton}>
                    <Image style={styles.searchImg} source={SearchIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.tabsContainer}>
                <FlatList
                    data={jobsTypes}
                    renderItem={({ item }) => <TouchableOpacity style={styles.tab(activeTab, item)} onPress={() => {
                        setActiveTab(item);
                    }}>
                        <Text style={styles.tabText(activeTab, item)}>{item}</Text>
                    </TouchableOpacity>}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        gap: 8
    },
    title: {
        fontSize: SIZES.large,
        fontFamily: FONT.regular,
        color: COLORS.gray,
    },
    message: {
        fontSize: SIZES.xLarge,
        fontFamily: FONT.bold,
        color: COLORS.primary,
    },
    searchSpace: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: 50,
    },
    inputSpace: {
        flex: 1,
        backgroundColor: COLORS.white,
        marginRight: SIZES.small,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    searchInput: {
        fontFamily: FONT.regular,
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.medium,
    },
    searchButton: {
        width: 50,
        height: "100%",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    searchImg: {
        width: "50%",
        height: "50%",
        tintColor: COLORS.white,
    },
    tabsContainer: {
        width: "100%",
    },
    tab: (activeJobType: string, item: string) => ({
        paddingVertical: SIZES.small / 2,
        paddingHorizontal: SIZES.small,
        borderRadius: SIZES.medium,
        borderWidth: 1,
        borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
    tabText: (activeJobType: string, item: string) => ({
        fontFamily: FONT.medium,
        color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    }),
})

export default Welcome