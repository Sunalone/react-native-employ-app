import { COLORS, FONT, SIZES } from "@/constants/Theme";
import { View, Text, Image, StyleSheet } from "react-native";
import CompanyIcon from '@/assets/icons/apple.png'

const Company = ({ jobTitle, companyName, location }) => {
    return (
        <View style={styles.container}>
            <View style={styles.logoBox}>
                <Image
                    source={CompanyIcon}
                    style={styles.logoImage}
                />
            </View>

            <View style={styles.jobTitleBox}>
                <Text style={styles.jobTitle}>{jobTitle}</Text>
            </View>

            <View style={styles.companyInfoBox}>
                <Text style={styles.companyName}>{companyName} / </Text>
                <View style={styles.locationBox}>
                    <Image
                        source={CompanyIcon}
                        resizeMode='contain'
                        style={styles.locationImage}
                    />
                    <Text style={styles.locationName}>{location}</Text>
                </View>
            </View>
            <View style={styles.jobTitleBox}>
                <Text style={styles.jobHead}>岗位职责：</Text>
                <Text>1:参与公司React项目的开发和维护工作；</Text>
                <Text>2:负责React组件的设计、开发和测试工作；</Text>
                <Text>3:与团队成员紧密合作，完成项目的开发任务；</Text>
                <Text>4:不断优化和改进React应用的性能和用户体验；</Text>
                <Text>5:关注前端技术的发展趋势，不断学习和引入新的技术。</Text>
                <Text style={styles.jobHead}>岗位要求：</Text>
                <Text>1:熟悉React框架，有至少[X]年的React开发经验；</Text>
                <Text>2:熟练掌握JavaScript语言，了解ES6及以上版本的新特性；</Text>
                <Text>3:有良好的面向对象编程思想和代码规范意识；</Text>
                <Text numberOfLines={1}>4:熟悉常用的前端开发工具和技术，如Webpack、Babel、Redux等；</Text>
                <Text>5:有良好的团队合作精神和沟通能力；</Text>
                <Text style={styles.jobHead}>福利待遇：</Text>
                <Text>1:有竞争力的薪酬和福利待遇；</Text>
                <Text>2:良好的职业发展空间和晋升机会；</Text>
                <Text>3:优秀的工作环境和团队氛围；</Text>
                <Text>4:丰富的培训和学习机会。</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    logoBox: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        borderRadius: SIZES.large,
    },
    logoImage: {
        width: "80%",
        height: "80%",
    },
    jobTitleBox: {
        gap: 8,
        padding: SIZES.small
    },
    jobTitle: {
        fontSize: SIZES.large,
        color: COLORS.primary,
        fontFamily: FONT.bold,
        textAlign: "center",
    },
    companyInfoBox: {
        marginTop: SIZES.small / 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    companyName: {
        fontSize: SIZES.medium - 2,
        color: COLORS.primary,
        fontFamily: FONT.medium,
    },
    locationBox: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    locationImage: {
        width: 14,
        height: 14,
        tintColor: COLORS.gray,
    },
    locationName: {
        fontSize: SIZES.medium - 2,
        color: COLORS.gray,
        fontFamily: FONT.regular,
        marginLeft: 2,
    },
    jobHead: {
        fontSize: SIZES.large,
        color: COLORS.primary,
        fontFamily: FONT.bold,
        textAlign: "left",
    }
})

export default Company;
