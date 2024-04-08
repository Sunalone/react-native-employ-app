import { View, ScrollView, SafeAreaView } from "react-native"
import { Stack } from "expo-router"
import { HeaderLeftButton, HeaderRightButton, Welcome, PopularJobs, NearbyJobs } from '@/components/home'

const Home = () => {
    return (
        <SafeAreaView>
            <Stack.Screen options={{
                title: "",
                headerLeft: () => <HeaderLeftButton />,
                headerRight: () => <HeaderRightButton />
            }} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: 8,
                    backgroundColor: "#fff",
                    gap: 8
                }}>
                    <Welcome />
                    <PopularJobs />
                    <NearbyJobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home