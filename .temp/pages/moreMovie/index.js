import Nerv from "nervjs";
import Taro, { showLoading as _showLoading, hideLoading as _hideLoading, setNavigationBarTitle as _setNavigationBarTitle } from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { AtRate, AtLoadMore } from "taro-ui";
import API from "../../apis/index";
import styles from "./more.module.scss";

class moreMovie extends Taro.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      movieList: [],
      start: 0,
      status: '',
      showLoadMore: false
    };
  }

  config = {
    navigationBarTitleText: '豆瓣电影'
  };

  handleClick = () => {};

  getList = async api => {
    _showLoading({
      title: 'loading'
    });
    let d = await api();
    this.setState({
      movieList: d.data.subjects
    }, () => {
      _hideLoading();
    });
  };

  getMoreList = async (api, query) => {
    this.setState({
      showLoadMore: true,
      status: 'loading'
    });
    let d = await api(query);
    this.setState({
      movieList: this.state.movieList.concat(d.data.subjects)
    }, () => {
      if (d.data.subjects.length < 20) {
        this.setState({
          status: 'noMore'
        });
      } else {
        this.setState({
          showLoadMore: false,
          status: ''
        });
      }
    });
  };

  loadMore = () => {
    this.setState({
      start: this.state.start + 20
    }, () => {
      let query = {
        start: this.state.start,
        count: 20
      };
      this.getMoreList(API.movieModel.GetHotList, query);
    });
  };

  showDetail = id => {
    Taro.navigateTo({
      url: `/pages/movieDetail/index?id=${id}`
    });
  };

  componentWillMount() {
    this.setState({
      title: this.$router.params.title
    }, () => {
      switch (this.state.title) {
        case "正在热映":
          this.getList(API.movieModel.GetHotList);break;
      }
    });
  }

  componentDidMount() {
    _setNavigationBarTitle({
      title: this.state.title
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  onReachBottom() {
    this.state.status !== 'noMore' && this.loadMore();
  }

  render() {
    return <View className={styles.movie_wrapper}>
                <View className={styles.movie_container}>
                    {this.state.movieList ? this.state.movieList.map(movie => {
          return <View key={movie.id} className={styles.movie_item} onClick={() => {
            this.showDetail(movie.id);
          }}>
                                <image src={movie.images.medium}></image>
                                {movie.rating.average ? <View className={styles.movie_item_body_rate}>
                                    <AtRate size="10" value={movie.rating.average / 2} />
                                    <Text>{movie.rating.average.toFixed(1)}</Text>
                                </View> : <View className={styles.movie_item_body_rate}>
                                        <Text>暂无评分</Text>
                                    </View>}
                                <Text style={{ fontWeight: "bold" }}>{movie.title}</Text>
                            </View>;
        }) : "暂无数据"}
                </View>
                <View>
                    {this.state.showLoadMore ? <AtLoadMore status={this.state.status} noMoreText="已无更多数据" /> : ''}
                </View>
            </View>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
    this._offReachBottom = Taro.onReachBottom({
      callback: this.onReachBottom,
      ctx: this,
      onReachBottomDistance: undefined
    });
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
    this._offReachBottom && this._offReachBottom();
  }

}

export default moreMovie;