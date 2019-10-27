import Nerv from "nervjs";
import Taro, { setNavigationBarTitle as _setNavigationBarTitle, showToast as _showToast } from "@tarojs/taro-h5";
import { View, Text, ScrollView, Image } from '@tarojs/components';
import MyIcon from "../../components/common/myIcon";
import { AtSlider, AtActionSheet, AtNavBar } from "taro-ui";
import styles from "./index.module.scss";
import { connect } from "@tarojs/redux-h5";
import { timeFilter } from "../../utils/lodash";
import { SetCurrentIndexAction, SetPlayStatusAction } from "../../store/actions/player";
import API from "../../apis/index";

@connect(({ player: { currentIndex, playList, playStatus } }) => ({
  currentIndex,
  playStatus,
  playList
}), dispatch => ({
  asyncSetCurrentIndex(index) {
    dispatch(SetCurrentIndexAction(index));
  },
  asyncSetPlayStatus(status) {
    dispatch(SetPlayStatusAction(status));
  }
}))
class MyPlayer extends Taro.Component {

  config = {
    navigationBarTitleText: '加载中...'
  };

  constructor(props) {
    super(props);
    this.state = {
      isPlay: false,
      currentTime: 0, //当前时间
      time: null,
      isFirst: true,
      isReady: false,
      isShowPlayList: false,
      currentSong: {},
      playModelIcon: "repeat-play",
      playModel: "loop"
    };
  }

  componentDidMount() {
    let { id } = this.$router.params;
    this.startSong(id, this.props.currentIndex);
  }

  componentWillUnmount() {
    let status = this.state.isPlay ? "play" : "pause";
    this.props.asyncSetPlayStatus(status);
  }

  startSong = (id, index) => {
    let { playList, currentIndex, asyncSetCurrentIndex } = this.props;
    if (index != currentIndex) {
      asyncSetCurrentIndex(index);
    }
    this.getSongUrl(id).then(url => {
      // if(url){
      this.setState({
        currentSong: { ...playList.tracks[index], url }
      }, () => {
        _setNavigationBarTitle({
          title: this.state.currentSong.name
        });
        console.log(this.state.currentSong);
        this.setState({
          isPlay: true
        }, () => {
          this.refs.audio.play();
        });
      });
      // }
      // else{
      //   Taro.showToast({
      //     title:"暂无权限",
      //     icon:"none"
      //   })
      // }
    });
  };

  getSongUrl = async id => {
    let { data } = await API.songModel.GetSongUrl({ id });
    return data[0].url;
  };

  //监听加载是否成功
  handleReady = () => {
    this.setState({
      isReady: true
    });
  };

  //监听报错
  handleError = () => {
    console.log(1);
    this.setState({
      isReady: true
    });
  };

  //监听结束
  handleEnd = () => {
    if (this.state.playModel === 'loop') {
      this.refs.audio.currentTime = 0;
      this.refs.audio.play();
    } else {
      this.handleNext();
    }
  };

  //监听进度
  handleUpdateTime = e => {
    this.setState({
      currentTime: e.target.currentTime
    });
  };

  // 列表中切换音乐
  changeMusic = index => {
    let id = this.props.playList.tracks[index].id;
    this.startSong(id, index);
    // this.props.asyncGetCurrentSong(id)
  };

  togglePlay = () => {
    if (!this.state.isReady) return;
    this.setState({
      isPlay: !this.state.isPlay
    }, () => {
      if (!this.state.isPlay) {
        this.refs.audio.pause();
      } else {
        this.refs.audio.play();
      }
    });
  };

  //下一首
  handleNext = () => {
    if (!this.state.isReady) return;
    let { playList: { tracks }, currentIndex: index, asyncSetCurrentIndex } = this.props;
    if (this.state.playModel === "random") {
      index = this.getDiffRandom(index, tracks.length);
    } else {
      if (index === tracks.length - 1) {
        index = 0;
      } else {
        ++index;
      }
    }
    let id = tracks[index].id;
    this.startSong(id, index);
    this.setState({
      isReady: false
    });
  };

  //上一首
  handlePrev = () => {
    if (!this.state.isReady) return;
    let { playList: { tracks }, currentIndex: index, asyncSetCurrentIndex } = this.props;
    if (this.state.playModel === "random") {
      index = this.getDiffRandom(index, tracks.length);
    } else {
      if (index === 0) {
        index = tracks.length - 1;
      } else {
        --index;
      }
    }
    let id = tracks[index].id;
    this.startSong(id, index);
    this.setState({
      isReady: false
    });
  };

  //切换播放模式
  changeModel = () => {
    switch (this.state.playModel) {
      case "order":
        this.setState({
          playModel: "loop",
          playModelIcon: "reload"
        }, () => {
          _showToast({
            title: "循环播放",
            icon: "none"
          });
        });break;
      case "loop":
        this.setState({
          playModel: "random",
          playModelIcon: "shuffle-play"
        }, () => {
          _showToast({
            title: "随机播放",
            icon: "none"
          });
        });break;
      case "random":
        this.setState({
          playModel: "order",
          playModelIcon: "repeat-play"
        }, () => {
          _showToast({
            title: "顺序播放",
            icon: "none"
          });
        });break;
    }
  };

  getDiffRandom = (index, max) => {
    let randomNum = ~~(Math.random() * max);
    return randomNum == index ? this.getDiffRandom(index, max) : randomNum;
  };

  changeProgress = ({ value }) => {
    this.refs.audio.currentTime = value;
    this.setState({
      currentTime: value
    });
    console.log(value);
  };

  showPlayList = () => {
    this.setState({
      isShowPlayList: !this.state.isShowPlayList
    });
  };

  render() {
    let { currentIndex } = this.props;
    let { currentSong } = this.state;
    const scrollStyle = {
      height: '60vh'
    };
    if (!currentSong.al) return;
    return <View>
        <AtNavBar onClickRgIconSt={this.handleClick} onClickRgIconNd={this.handleClick} onClickLeftIcon={this.handleClick} color="#000" title="NavBar 导航栏示例" leftText="返回" rightFirstIconType="bullet-list" rightSecondIconType="user" />
        <audio src={currentSong.url} ref="audio" onCanPlay={this.handleReady} onEnded={this.handleEnd} onError={this.handleError} onTimeUpdate={this.handleUpdateTime}></audio>
        <View className={styles.song_disc}>
          <Image src={currentSong.al.picUrl} className={styles.song_disc_img}></Image>
          <View className={styles.song_cover_container}>
            <View className={styles.song_cover_content}>
              <View className={styles.song_cover_line}></View>
              <View className={styles.song_record}>
                <View className={[styles.song_record_cover, this.state.isPlay ? styles.move : '']}>
                  <Image src={currentSong.al.picUrl} className={styles.song_cover_img}></Image>
                </View>
              </View>
            </View>

          </View>
          <View className={styles.music_control_wrapper}>
            <View className={styles.music_control_progress}>
              <Text className={styles.time}>
                {timeFilter(this.state.currentTime)}
              </Text>
              <AtSlider step={1} max={currentSong.dt / 1000} value={this.state.currentTime} activeColor="#d44439" backgroundColor="#BDBDBD" blockColor="#d44439" blockSize={2} onChange={this.changeProgress}></AtSlider>
              <Text className={styles.time}>
                {timeFilter(currentSong.dt / 1000)}
              </Text>
            </View>
            <View className={styles.music_control_content}>
              <View onClick={this.changeModel}>
                <MyIcon value={this.state.playModelIcon} color="#fff"></MyIcon>
              </View>
              <View onClick={this.handlePrev}>
                <MyIcon value="prev" color="#fff"></MyIcon>
              </View>
              <View onClick={() => {
              this.togglePlay();
            }}>
                {this.state.isPlay ? <MyIcon value="pause" color="#fff" size="40"></MyIcon> : <MyIcon value="play" color="#fff" size="40"></MyIcon>}
              </View>
              <View onClick={this.handleNext}>
                <MyIcon value="next" color="#fff"></MyIcon>
              </View>
              <View onClick={this.showPlayList}>
                <AtActionSheet isOpened={this.state.isShowPlayList} cancelText="关闭" title="播放列表">
                  <View>
                    <ScrollView scrollY scrollWithAnimation style={scrollStyle}>
                      {this.props.playList.tracks.map((song, index) => {
                      return <View key={song.id} className={styles.song_item} onClick={() => {
                        this.changeMusic(index);
                      }}>
                            <View style={{ display: "flex", alignItems: "center" }}>
                              {index === currentIndex ? <MyIcon value="volume-plus" color="#d44439"></MyIcon> : ""}
                              <View>
                                {song.name}<Text style={{ color: "#ccc", fontSize: "10px" }}>-{song.ar[0].name}</Text></View>
                            </View>
                            <MyIcon value="close" size="10"></MyIcon>
                          </View>;
                    })}
                    </ScrollView>
                  </View>
                </AtActionSheet>
                <MyIcon value="playlist" color="#fff"></MyIcon>
              </View>
            </View>
          </View>
        </View>
      </View>;
  }

  componentDidShow() {
    super.componentDidShow && super.componentDidShow();
  }

  componentDidHide() {
    super.componentDidHide && super.componentDidHide();
  }

}

export default MyPlayer;