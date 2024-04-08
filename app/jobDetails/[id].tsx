import {
    View,
    SafeAreaView,
    ScrollView,
    RefreshControl,
    StyleSheet
} from "react-native";
import { Company, JobFooter } from "@/components/jobDetails";
import { COLORS, SIZES } from "@/constants/Theme";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import { useState } from "react";
import { heightPercentageToDP } from "react-native-responsive-screen";

const tabs = ["About", "Qualifications", "Responsibilities"];

const mockData = [
    {
        job_id: "001",
        employer_name: "Prodware Solutions",
        job_title: "React工程师",
        job_country: "US",
        job_publisher: "Sunalone",
        job_google_link: "https://careers.google.com/jobs/results/"
    },
    {
        job_id: "002",
        employer_name: "Prodware Solutions",
        job_title: "React工程师",
        job_country: "US",
        job_publisher: "Sunalone"
    }
]

const JobDetails = () => {
    const params = useGlobalSearchParams();
    const router = useRouter();

    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [refreshing, setRefreshing] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerBackVisible: false,
                    headerTitle: "",
                }}
            />

            <>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} />}

                >
                    <View >
                        <Company
                            jobTitle={mockData[0].job_title}
                            companyName={mockData[0].employer_name}
                            location={mockData[0].job_country}
                        />
                    </View>
                </ScrollView>
                <JobFooter url={mockData[0]?.job_google_link ?? 'https://careers.google.com/jobs/results/'} />
            </>
        </SafeAreaView>
    );
};

export default JobDetails;
