import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '@/store/actions/music'
import MyBanner from "@/components/common/banner"
import MyRecommend from "@/components/common/recommend"
import styles from './home.module.scss'
import { AtIcon, AtSearchBar } from 'taro-ui';
import { bindActionCreators } from "redux"
import MyLoading from "@/components/common/MyLoading"
import MySearch from "@/components/content/MySearch"
@connect(({ music: { bannerList, recommendList } }) => ({
  bannerList,
  recommendList
}), dispatch => bindActionCreators(actions, dispatch))
//dispatch=thunk({getState})(dispatch)
//thunk({getState})= dispatch=>action=>{如果action是函数就action(dispatch,getState)}
//dispatch=action=>{如果action是函数就action(dispatch,getState)}

class Index extends Component {

  constructor(props) {
    super(props)
    this.state={
      isShowSearch:false,
      keyword:""
    }
  }

  config = {
    navigationBarTitleText: '网易云音乐'
  }

  showDetail = (type) => {
    switch (type) {
      case "4": Taro.navigateTo({ url: '/pages/rank/index' })
    }
  }

  changeSearchStatus=()=>{
    console.log(1)
    this.setState({
      isShowSearch:!this.state.isShowSearch
    })
  }

  changeKeyword=value=>{
    console.log(value)
    this.setState({
      keyword:value
    })
  }


  componentDidMount() {
    if (!this.props.bannerList.length) {
      this.props.GetBannerListAction()
    }
    if (!this.props.recommendList.length) {
      this.props.GetRecommendListAction()
    }
  }

  render() {
    if (!this.props.recommendList.length && !this.props.recommendList.length)
      return <MyLoading hide={true}></MyLoading>
    return (
      <View className={styles.home_wrapper}>
        <AtSearchBar
          placeholder="易烊千玺"
          value={this.state.keyword}
          actionName="取消"
          onFocus={this.changeSearchStatus}
          onActionClick={this.changeSearchStatus}
          onChange={this.changeKeyword}
        />
        {this.state.isShowSearch?<View>
          <MySearch keyword={this.state.keyword}></MySearch>
        </View>:<View>
        <MyBanner list={this.props.bannerList}></MyBanner>
        <View className={styles.home_cate_wrapper}>
          <View className={styles.home_cate_item}>
            <View className={styles.home_cate_item_img}>
              <AtIcon value="calendar" color="#fff"></AtIcon>
            </View>
            <Text style={{ marginTop: "10px" }}>
              每日推荐
            </Text>
          </View>

          <View className={styles.home_cate_item}>
            <View className={styles.home_cate_item_img}>
              <AtIcon value="file-audio" color="#fff"></AtIcon>
            </View>
            <Text style={{ marginTop: "10px" }}>
              歌单
            </Text>
          </View>

          <View className={styles.home_cate_item}>
            <View className={styles.home_cate_item_img}>
              <AtIcon value="sound" color="#fff"></AtIcon>
            </View>
            <Text style={{ marginTop: "10px" }}>
              电台
            </Text>
          </View>

          <View className={styles.home_cate_item} onClick={() => { this.showDetail("4") }}>
            <View className={styles.home_cate_item_img}>
              <AtIcon value="align-center" color="#fff"></AtIcon>
            </View>
            <Text style={{ marginTop: "10px" }}>
              排行榜
            </Text>
          </View>

          <View className={styles.home_cate_item}>
            <View className={styles.home_cate_item_img}>
              <AtIcon value="video" color="#fff"></AtIcon>
            </View>
            <Text style={{ marginTop: "10px" }}>
              直播
            </Text>
          </View>
        </View>
        <MyRecommend movieList={this.props.recommendList}></MyRecommend>
      </View>}
      </View>
    )
  }
}

export default Index
