import { View, Text, TouchableOpacity, Image, Linking, StyleSheet } from "react-native";
import icon from '@/assets/icons/heart.png'
import { COLORS, FONT, SIZES } from "@/constants/Theme";

const Footer = ({ url }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.likeBtn}>
                <Image
                    source={icon}
                    resizeMode='contain'
                    style={styles.likeBtnImage}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.applyBtn}
                onPress={() => Linking.openURL(url)}
            >
                <Text style={styles.applyBtnText}>投递该职位</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: SIZES.small,
        paddingBottom: SIZES.large,
        backgroundColor: "#FFF",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
    },
    likeBtn: {
        width: 55,
        height: 55,
        borderWidth: 1,
        borderColor: "#444262",
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    likeBtnImage: {
        width: "40%",
        height: "40%",
        tintColor: "#444262",
    },
    applyBtn: {
        flex: 1,
        backgroundColor: "#444262",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: SIZES.medium,
        borderRadius: SIZES.medium,
    },
    applyBtnText: {
        fontSize: SIZES.medium,
        color: COLORS.white,
        fontFamily: FONT.bold,
    },
})

export default Footer;