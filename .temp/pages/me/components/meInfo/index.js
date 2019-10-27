import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { AtList, AtListItem, AtAvatar, AtIcon } from "taro-ui";

import storage from "../../../../utils/helpers/storage";
import styles from './me.module.scss';

class Me extends Taro.Component {

  config = {
    navigationBarTitleText: '个人中心'
  };

  state = {
    userInfo: storage.get('userInfo') || {},
    token: storage.get('token') || '',
    isOpened: false
  };

  handleCancel = () => {
    this.setState({
      isOpened: false
    });
  };

  componentDidShow() {
    console.log(storage.get('userInfo'));
  }

  render() {
    const mewrapperStyle = {
      position: "absolute",
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      background: 'url(' + this.state.userInfo.avatarUrl + ')',
      backgroundSize: 'cover',
      filter: "blur(10px)",
      zIndex: "-2"
    };
    return <View className={styles.me_wrapper}>
        <View style={mewrapperStyle}></View>
        <View className={styles.me_header}>
          <View className={styles.meInfo_container}>
            <View className={styles.meInfo_desc}>
              <AtAvatar circle image={this.state.userInfo.avatarUrl}></AtAvatar>
              <View className={styles.meInfo_desc_nickname}>
                <Text>{this.state.userInfo.nickname}</Text>
              </View>
            </View>
            <View className={styles.meInfo_subTag}>
              <View className={styles.meInfo_subTag_item}>
                <Text>动态</Text>
                <Text>{this.state.userInfo.eventCount}</Text>
              </View>
              <View className={styles.meInfo_subTag_item}>
                <Text>粉丝</Text>
                <Text>{this.state.userInfo.followeds}</Text>
              </View>
              <View className={styles.meInfo_subTag_item}>
                <Text>关注</Text>
                <Text>{this.state.userInfo.follows}</Text>
              </View>
              <View className={styles.meInfo_subTag_item}>
                <AtIcon value="edit"></AtIcon>
                <Text>编辑资料</Text>
              </View>
            </View>


          </View>
        </View>
        <View className="me_list">
          <AtList>
            <AtListItem title="我的收藏" arrow="right" iconInfo={{
            size: 25, value: 'star'
          }} />
            <AtListItem title="我的电台" arrow="right" iconInfo={{
            size: 25, value: 'sound'
          }} />
          </AtList>
          
        </View>
      </View>;
  }
}

export default Me;