import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text, Image } from '@tarojs/components';
import { AtIcon, AtLoadMore, AtList, AtListItem } from "taro-ui";
import styles from "./index.module.scss";
import { countFilter } from "../../../utils/lodash";
class Recommend extends Taro.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      start: 0,
      status: '',
      showLoadMore: false
    };
  }

  showDetail = id => {
    Taro.navigateTo({
      url: `/pages/movieDetail/index?id=${id}`
    });
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  render() {
    return <View className={styles.movie_wrapper}>
                <AtList hasBorder={false}>
                    <AtListItem title="推荐歌单" hasBorder={false} />
                </AtList>
                <View className={styles.movie_container}>
                    {this.props.movieList ? this.props.movieList.map(movie => {
          return <View key={movie.id} className={styles.movie_item} onClick={() => {
            this.showDetail(movie.id);
          }}>
                               <Image src={movie.picUrl} className={styles.item_img}></Image>

                                <Text style={{ fontWeight: "bold", height: '40px' }}>{movie.name}</Text>
                                <View className={styles.movie_item_playCount}>
                                    <AtIcon value="play" size="10" color="#fff"></AtIcon>
                                    <Text style={{ color: '#fff' }}>{countFilter(movie.playCount)}</Text>
                                </View>
                            </View>;
        }) : "暂无数据"}
                </View>
                <View>
                    {this.state.showLoadMore ? <AtLoadMore status={this.state.status} noMoreText="已无更多数据" /> : ''}
                </View>
            </View>;
  }
}

export default Recommend;