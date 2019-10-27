import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import styles from './index.module.scss'

class MyLoading extends Component {

  render() {
    const { hide } = this.props
    return (
        <View className={[styles.loading_components,styles.fullScreen,hide?'':styles.hide]}/>
    )
  }
}

export default  MyLoading