import Nerv from "nervjs";
import Taro, { setNavigationBarTitle as _setNavigationBarTitle } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import MyLogin from "./components/login/index";
import MyMeInfo from "./components/meInfo/index";
import styles from './me.module.scss';
import { connect } from "@tarojs/redux-h5";

class Me extends Taro.Component {

  constructor(props) {
    super(props);
  }

  config = {
    navigationBarTitleText: '登陆'
  };

  componentWillMount() {
    console.log(this.props.userInfo);
    if (Object.keys(this.props.userInfo).length) {
      _setNavigationBarTitle({
        title: '个人中心'
      });
    }
  }

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View className={styles.me_wrapper}>
       {Object.keys(this.props.userInfo).length ? <MyMeInfo></MyMeInfo> : <MyLogin></MyLogin>}
      </View>;
  }

  componentDidMount() {
    super.componentDidMount && super.componentDidMount();
  }

}

const mapStateToProps = state => {
  return {
    userInfo: state.user.userInfo
  };
};
export default connect(mapStateToProps, null)(Me);