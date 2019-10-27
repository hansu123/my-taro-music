
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PlayMusicList from "@/components/content/playMusicList"
import API from "@/apis"
import { countFilter } from "@/utils/lodash"
import styles from "./index.module.scss";


class movieDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            musicInfo: {}
        }
    }

    config = {
        navigationBarTitleText: '排行榜'
    }


    componentDidMount() {

    }



    render() {

        return (
            <View className={styles.rank_wrapper} >
                <View>
                    <View>官方榜</View>
                    <View>
                        <image src="https://6861-hansu-m3yf1-1259159710.tcb.qcloud.la/youhuo/common/forward.jpeg?sign=1db7af02bd08eb88f785474c77ba8145&t=1571152570"/>
                    </View>
                    <View>
                        <Text>

                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default movieDetail
