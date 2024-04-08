import { useState } from 'react'
import { useRouter } from 'expo-router'
import { COLORS, FONT, SIZES } from '@/constants/Theme'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import PopularJobsCard from './components/PopularJobsCard'

const mockData = [
    {
        job_id: "001",
        employer_name: "Prodware Solutions",
        job_title: "React工程师",
        job_country: "US",
        job_publisher: "Sunalone"
    },
    {
        job_id: "002",
        employer_name: "Prodware Solutions",
        job_title: "React工程师",
        job_country: "US",
        job_publisher: "Sunalone"
    }
]

const PopularJobs = () => {
    const router = useRouter()
    const [selectedJob, setSelectedJob] = useState("");

    const handleCardPress = (item) => {
        router.push(`/jobDetails/${item.job_id}`);
        setSelectedJob(item.job_id);
    };

    return (
        <View style={styles.space}>
            <View style={styles.header}>
                <Text style={styles.title}>推荐工作</Text>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>
                        查看所有
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardContainer}>
                <FlatList
                    data={mockData}
                    renderItem={({ item }) => (
                        <PopularJobsCard
                            item={item}
                            selectedJob={selectedJob}
                            handleCardPress={handleCardPress}
                        />
                    )}
                    keyExtractor={(item) => item.job_id}
                    contentContainerStyle={{ columnGap: SIZES.medium }}
                    horizontal
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    space: {
        gap: 8
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: SIZES.large,
        fontFamily: FONT.medium,
        color: COLORS.primary,
    },
    buttonText: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium,
        color: COLORS.gray,
    },
    cardContainer: {
        paddingBottom: 8
    }
})

export default PopularJobs