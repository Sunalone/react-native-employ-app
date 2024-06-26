import { COLORS, FONT, SHADOWS, SIZES } from "@/constants/Theme";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import CompanyIcon from '@/assets/icons/apple.png'

const PopularJobsCard = ({ item, selectedJob, handleCardPress }) => {
    return (
        <TouchableOpacity
            style={styles.container(selectedJob, item)}
            onPress={() => handleCardPress(item)}
        >
            <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
                <Image
                    source={CompanyIcon}
                    resizeMode='cover'
                    style={styles.logoImage}
                />
            </TouchableOpacity>
            <Text style={styles.companyName} numberOfLines={1}>
                {item.employer_name}
            </Text>

            <View style={styles.infoContainer}>
                <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
                    {item.job_title}
                </Text>
                <View style={styles.infoWrapper}>
                    <Text style={styles.publisher(selectedJob, item)}>
                        {item?.job_publisher} -
                    </Text>
                    <Text style={styles.location}> {item.job_country}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: (selectedJob, item) => ({
        width: 250,
        padding: SIZES.xLarge,
        backgroundColor: selectedJob === item.job_id ? COLORS.secondary : "#FFF",
        borderRadius: SIZES.medium,
        justifyContent: "space-between",
        ...SHADOWS.medium,
        shadowColor: COLORS.gray,
    }),
    logoContainer: (selectedJob, item) => ({
        width: 50,
        height: 50,
        backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    }),
    logoImage: {
        width: "60%",
        height: "60%",
    },
    companyName: {
        fontSize: SIZES.medium,
        fontFamily: FONT.regular,
        color: "#B3AEC6",
        marginTop: SIZES.small / 1.5,
    },
    infoContainer: {
        marginTop: SIZES.large,
    },
    jobName: (selectedJob, item) => ({
        fontSize: SIZES.large,
        fontFamily: FONT.medium,
        color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
    }),
    infoWrapper: {
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    publisher: (selectedJob, item) => ({
        fontSize: SIZES.medium - 2,
        fontFamily: FONT.regular,
        color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
    }),
    location: {
        fontSize: SIZES.medium - 2,
        fontFamily: FONT.regular,
        color: "#B3AEC6",
    },
});

export default PopularJobsCard