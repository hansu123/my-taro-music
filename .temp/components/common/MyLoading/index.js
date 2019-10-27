import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import styles from './index.module.scss';

class MyLoading extends Taro.Component {

  render() {
    const { hide } = this.props;
    return <View className={[styles.loading_components, styles.fullScreen, hide ? '' : styles.hide]} />;
  }
}

export default MyLoading;