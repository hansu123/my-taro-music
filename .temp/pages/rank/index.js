import Nerv from "nervjs";

import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';

import styles from "./index.module.scss";

class movieDetail extends Taro.Component {

  constructor(props) {
    super(props);
    this.state = {
      musicInfo: {}
    };
  }

  config = {
    navigationBarTitleText: '排行榜'
  };

  componentDidMount() {}

  render() {

    return <View className={styles.rank_wrapper}>
                <View>
                    <View>官方榜</View>
                    <View>
                        <image src="https://6861-hansu-m3yf1-1259159710.tcb.qcloud.la/youhuo/common/forward.jpeg?sign=1db7af02bd08eb88f785474c77ba8145&t=1571152570" />
                    </View>
                    <View>
                        <Text>

                        </Text>
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

export default movieDetail;