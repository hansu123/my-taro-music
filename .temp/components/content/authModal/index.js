import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Button } from '@tarojs/components';
import PropTypes from "prop-types";
import { AtModal, AtModalHeader, AtModalContent, AtModalAction } from "taro-ui";
class AuthModal extends Taro.Component {

  static PropTypes = {
    isOpened: PropTypes.bool
  };
  static defaultProps = {
    isOpened: false
  };
  constructor(props) {
    super(props);
  }

  render() {
    return <View>
                <AtModal isOpened={this.props.isOpened}>
                    <AtModalHeader>授权提示</AtModalHeader>
                    <AtModalContent>
                        Taro电商邀您完成授权
                    </AtModalContent>
                    <AtModalAction> 
                        <Button onClick={this.props.handleCancel}>取消</Button> 
                        <Button openType="getUserInfo" onGetuserinfo={this.props.handleConfirm} onClick={this.props.handleCancel}>确认授权</Button> 
                    </AtModalAction>
                </AtModal>
            </View>;
  }
}

export default AuthModal;