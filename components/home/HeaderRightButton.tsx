import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Slack from '@/assets/icons/slack.png'

const HeaderRightButton = () => {
    return (
        <TouchableOpacity style={styles.btn} onPress={() => console.log('Todo....')
        }>
            <Image style={styles.img} source={Slack} resizeMode='cover' />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: wp(8),
        height: hp(8),

    },
    img: {
        width: "50%",
        height: "50%"
    }
})


export default HeaderRightButton