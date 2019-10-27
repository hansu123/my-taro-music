import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import MyLogin from "./components/login"
import MyMeInfo from "./components/meInfo"
import styles from './me.module.scss'
import {connect} from "@tarojs/redux"

class Me extends Component {

  constructor(props){
    super(props)
  }

  config = {
    navigationBarTitleText: '登陆'
  }

  componentWillMount(){
    console.log(this.props.userInfo)
    if(Object.keys(this.props.userInfo).length){
      Taro.setNavigationBarTitle({
        title:'个人中心'
      })
    }
  }

  componentDidShow() {
   }

  componentDidHide() { }

  render() {
    return (
      <View className={styles.me_wrapper}>
       {Object.keys(this.props.userInfo).length?<MyMeInfo></MyMeInfo>:<MyLogin></MyLogin>}
      </View>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    userInfo:state.user.userInfo
  }
}
export default connect(mapStateToProps,null)(Me)
