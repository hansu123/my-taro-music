import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import AuthModal from "@/components/content/authModal"
import { AtButton, AtList, AtListItem, AtGrid, AtAvatar } from "taro-ui"
import API from "@/apis"
import storage from "@/utils/helpers/storage"
import styles from './index.module.scss'

class Login extends Component {

    config = {
        navigationBarTitleText: '登陆'
    }

    handleLogin=()=>{
        Taro.navigateTo({
            url:"/pages/login/index"
        })
    }


    componentDidShow() {
        console.log(storage.get('userInfo'))
    }


    render() {
        return (
            <View className={styles.me_wrapper}>
                <View className={styles.login_header}>
                    <image src='https://6861-hansu-m3yf1-1259159710.tcb.qcloud.la/youhuo/common/music.png?sign=d2e65ac4b0df35131ad4d59fe126d429&t=1571151672'></image>
                </View>
                <View className={styles.login_content}>
                    <Button style={{ color: "#d44439" }} onClick={this.handleLogin}>手机登陆</Button>
                    <Button style={{ background: "#d44439", color: '#fff' }}>立即体验</Button>
                </View>

            </View>
        )
    }
}

export default Login
