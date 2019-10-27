import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtList, AtListItem } from "taro-ui"
import MyIcon from "@/components/common/myIcon"
import styles from "./index.module.scss";
import { countFilter } from "@/utils/lodash"
import { connect } from '@tarojs/redux';
import { SetCurrentIndexAction } from "@/store/actions/player"
@connect(({
    player: { playStatus, currentIndex }
}) => ({ playStatus, currentIndex }), (dispatch) => ({
    asyncSetCurrentIndex(index) {
        dispatch(SetCurrentIndexAction(index))
    }
}))
class PlayMusicList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentIndex: -1
        }
    }

    showDetail = (index, id) => {
        this.props.asyncSetCurrentIndex(index)
        Taro.navigateTo({
            url: `/pages/player/index?index=${index}&id=${id}`,
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentIndex: nextProps.currentIndex
        }, () => {
            console.log(this.state.currentIndex)
        })
    }


    render() {
        const { currentIndex } = this.state
        if (!this.props.playList || !this.props.playList.tracks) { console.log(1, this.props); return }
        return (
            <View className={styles.list_wrapper} id="playList_wrapper">
                <View className={styles.list_header} id="list_header">
                    <View className={styles.list_header_left}>
                        <MyIcon value="play" size="15" color="#000" text={`播放全部(${this.props.playList.tracks.length}首)`}></MyIcon>
                    </View>
                    <View className={styles.list_header_right}>
                        <MyIcon value="add" size="15" color="#fff" text={`收藏(${countFilter(this.props.playList.subscribedCount)})`}></MyIcon>
                    </View>
                </View>
                <View>
                    <AtList>
                        {this.props.playList.tracks.map((music, index) => {
                            return (
                                <View className={styles.music_item_container} key={music.id}>
                                    <View style={{ display: "flex", justifyContent: "center", width: '10%' }}>
                                        {index === currentIndex ? (<MyIcon value="volume-plus" color="#d44439"></MyIcon>) : (index + 1)}
                                    </View>
                                    <View style={{ width: '90%' }}>
                                        <AtListItem
                                            arrow='play'
                                            note={music.ar[0].name}
                                            title={music.name}
                                            key={music.id}
                                            arrow="right"
                                            onClick={() => { this.showDetail(index, music.id) }}
                                        />
                                    </View>
                                </View>
                            )
                        })}
                    </AtList>
                </View>
            </View>
        )
    }
}

export default PlayMusicList
