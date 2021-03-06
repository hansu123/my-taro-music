import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import PlayMusicList from "@/components/content/playMusicList"
import styles from "./index.module.scss";
import { connect } from "@tarojs/redux"
import { GetPlayListAction } from "@/store/actions/player"
import MyLoading from "@/components/common/MyLoading"
@connect(({ player: { playList } }) => ({
    playList
}), dispatch => ({
    asyncGetPlayList(query) {
        return dispatch(GetPlayListAction(query))
    }
}))
class movieDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showLoading: false
        }
    }

    config = {
        navigationBarTitleText: '歌单'
    }

    componentWillMount() {
        let query = {
            id: this.$router.params.id
        }
        this.setState({
            showLoading: true
        })
        this.props.asyncGetPlayList(query)
        this.setState({
            showLoading: false
        })
    }


    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps)
    }

    //不能在子组件中进行

    onPageScroll(e) {
        this.updateTitle()
        this.stickyTop()
    }

    stickyTop=()=>{

    }
    
    updateTitle = () => {
        Taro.createSelectorQuery().select('#sub_info_creator').boundingClientRect(rect=>{
              if(rect.top<0){
                  Taro.setNavigationBarTitle({
                      title:this.props.playList.name
                  })
              }
              else{
                Taro.setNavigationBarTitle({
                    title:"歌单"
                })
            }
          }).exec()
    }

    render() {
        const { playList } = this.props
        if(!playList.coverImgUrl) return 
        return (
            <View className={styles.detail_wrapper} >
                {
                    <View className={styles.detail_container}>
                        <Image src={playList.coverImgUrl} className={styles.bg_img}></Image>
                        <View className={styles.detail_header}>
                            <View className={styles.detail_header_info}>
                                <View className={styles.sub_info_cover}>
                                    <Image src={playList.coverImgUrl} className={styles.sub_info_img}/>
                                </View>
                                <View className={styles.sub_info_content}>
                                    <Text style={{ fontSize: "16px" }}>{playList.name}</Text>
                                    <View className={styles.sub_info_creator} id="sub_info_creator">
                                        <Image src={playList.creator.avatarUrl} className={styles.sub_info_creator_img}></Image>
                                        <Text style={{ fontSize: "14px", marginLeft: "10px" }}>{`${playList.creator.nickname}`}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ borderRadius: "30px", background: "#fff" }}>
                            <PlayMusicList playList={this.props.playList} stickyTop={this.stickyTop}></PlayMusicList>
                        </View>
                    </View>

                }
                {
                    this.state.showLoading ? <MyLoading hide={this.state.showLoading}></MyLoading> : ""
                }

            </View>
        )
    }
}

export default movieDetail
