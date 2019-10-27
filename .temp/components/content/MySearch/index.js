import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import styles from "./index.module.scss";
import { connect } from "@tarojs/redux-h5";
import * as actions from "../../../store/actions/search";
import { AtList, AtListItem, AtTag, AtIcon } from "taro-ui";
// import MyLoading from "@/components/common/MyLoading"

@connect(({ search: { hotList, suggestList } }) => ({
  hotList, suggestList
}), dispatch => ({
  asyncGetHotList() {
    return dispatch(actions.GetHotListAction());
  },
  asyncGetSuggestList(query) {
    return dispatch(actions.GetSuggestListAction(query));
  }
}))
class MySearch extends Taro.Component {

  constructor(props) {
    super(props);
    this.state = {
      showLoading: false,
      currentKeyword: ""
    };
  }

  config = {
    navigationBarTitleText: '歌单'
  };

  componentWillMount() {
    this.props.asyncGetHotList();
  }

  //监听关键词的变化
  componentWillReceiveProps(nextProps) {
    let { keyword: keywords } = nextProps;
    if (keywords && this.state.currentKeyword != keywords) {
      let query = {
        keywords,
        type: "mobile"
        //防抖
      };this.props.asyncGetSuggestList(query);
      this.setState({
        currentKeyword: keywords
      });
    }
  }

  render() {
    let { hotList, suggestList, keyword } = this.props;
    return <View className={styles.search_wrapper}>
                {keyword ? <View className={styles.search_container}>
                        
                            <View className={styles.search_suggest_content}>
                                <View className={styles.suggest_title}>
                                    <Text>搜索：<span style={{ color: "#d44439" }}>{keyword}</span></Text>
                                </View>
                                {suggestList.length ? <AtList>
                                    {suggestList.map((music, index) => {
              return <View className={styles.suggest_item_container} key={music.id}>
                                                <View style={{ display: "flex", justifyContent: "center", width: '10%' }}>
                                                    <AtIcon value="search" size="3"></AtIcon>
                                                </View>
                                                <View style={{ width: '90%' }}>
                                                    <AtListItem title={music.keyword} key={index} arrow="right" onClick={() => {
                    this.showDetail(index, music.id);
                  }} />
                                                </View>
                                            </View>;
            })}
                                </AtList> : ""}
                            </View>
                    </View> : <View className={styles.search_container}>
                        <View className={styles.search_history_content}>
                            <View className={styles.history_title}>
                                <Text>搜索历史</Text>
                            </View>
                            <View className={styles.history_body}>
                                <AtTag name="易烊千玺" circle>
                                    易烊千玺
                                </AtTag>

                                <AtTag name="薛之谦" circle>
                                    薛之谦
                                </AtTag>

                            </View>
                        </View>
                        <View className={styles.search_hotlist_content}>
                            <View className={styles.hotlist_title}>
                                <Text>热搜榜</Text>
                            </View>
                            <AtList>
                                {hotList.map((music, index) => {
              return <View className={styles.hotlist_item_container} key={music.id}>
                                            <View style={{ display: "flex", justifyContent: "center", width: '10%' }}>
                                                {++index}
                                            </View>
                                            <View style={{ width: '90%' }}>
                                                <AtListItem note={music.content} title={music.searchWord} key={index} arrow="right" onClick={() => {
                    this.showDetail(index, music.id);
                  }} />
                                            </View>
                                        </View>;
            })}
                            </AtList>
                        </View>
                    </View>}
            </View>;
  }
}

export default MySearch;