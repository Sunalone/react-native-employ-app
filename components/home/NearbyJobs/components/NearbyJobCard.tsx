import { COLORS, SHADOWS, SIZES } from "@/constants/Theme";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import CompanyIcon from '@/assets/icons/apple.png'

const NearbyJobCard = ({ job, handleNavigate }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={handleNavigate}>
            <TouchableOpacity style={styles.logoContainer}>
                <Image
                    source={CompanyIcon}
                    resizeMode='cover'
                    style={styles.logImage}
                />
            </TouchableOpacity>

            <View style={styles.textContainer}>
                <Text style={styles.jobName} numberOfLines={1}>
                    {job?.job_title}
                </Text>

                <Text style={styles.jobType}>{job?.job_employment_type}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: "#FFF",
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    },
    logoContainer: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    logImage: {
        width: "70%",
        height: "70%",
    },
    textContainer: {
        flex: 1,
        marginHorizontal: SIZES.medium,
    },
    jobName: {
        fontSize: SIZES.medium,
        fontFamily: "DMBold",
        color: COLORS.primary,
    },
    jobType: {
        fontSize: SIZES.small + 2,
        fontFamily: "DMRegular",
        color: COLORS.gray,
        marginTop: 3,
        textTransform: "capitalize",
    },
});


export default NearbyJobCard