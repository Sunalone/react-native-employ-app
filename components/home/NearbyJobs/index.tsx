import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';
import NearbyJobCard from "./components/NearbyJobCard";
import { COLORS, FONT, SIZES } from "@/constants/Theme";

const mockData = [
    {
        job_id: "jjj",
        job_title: "React工程师",
        job_employment_type: "远程"
    },
    {
        job_id: "jjj11",
        job_title: "React工程师",
        job_employment_type: "远程"
    },
    {
        job_id: "jjj12",
        job_title: "React工程师",
        job_employment_type: "全职"
    },
    {
        job_id: "jjj13",
        job_title: "React工程师",
        job_employment_type: "兼职"
    },
]

const NearbyJobs = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>附近工作</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>查看所有</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {(
                    mockData?.map((job) => (
                        <NearbyJobCard
                            job={job}
                            key={`nearby-job-${job.job_id}`}
                            handleNavigate={() => router.push(`/jobDetails/${job.job_id}`)}
                        />
                    ))
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.xLarge,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: SIZES.small,
    },
    headerTitle: {
        fontSize: SIZES.large,
        fontFamily: FONT.medium,
        color: COLORS.primary,
    },
    headerBtn: {
        fontSize: SIZES.medium,
        fontFamily: FONT.medium,
        color: COLORS.gray,
    },
    cardsContainer: {
        marginTop: SIZES.medium,
        gap: SIZES.small,
    },
});

export default NearbyJobs