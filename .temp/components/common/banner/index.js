import Nerv from "nervjs";
import Taro, { showToast as _showToast } from "@tarojs/taro-h5";
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import PropTypes from 'prop-types';
import styles from './banner.module.scss';

class Index extends Taro.Component {

  constructor(props) {
    super(props);
  }

  //数据校验
  static PropTypes = {
    list: PropTypes.array
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  showDetail = id => {
    if (id) {
      Taro.navigateTo({
        url: `/pages/player/index?id=${id}`
      });
    } else {
      _showToast({
        title: '页面暂未开发',
        icon: 'none'
      });
    }
  };

  render() {
    return <View>
        <Swiper className={styles.swiper_wrapper} indicatorColor="#eee" indicatorActiveColor="#DC143C" circular indicatorDots autoplay>
          {this.props.list ? this.props.list.map(banner => {
          return <SwiperItem key={banner._id} className={styles.swiper_item}>
                  <View className={styles.swiper_item_body} onClick={() => {
              this.showDetail(Number(banner.targetId));
            }}>
                    <Image src={banner.imageUrl} className={styles.item_img}></Image>
                  </View>
                </SwiperItem>;
        }) : ''}
        </Swiper>
      </View>;
  }
}

export default Index;