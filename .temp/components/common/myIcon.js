import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
import { AtIcon } from "taro-ui";

class MyIcon extends Taro.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <View style={{ display: 'flex', alignItems: "center" }}>
            <AtIcon value={this.props.value} size={this.props.size} color={this.props.color}></AtIcon>
            <Text>
                {this.props.text}
            </Text>
        </View>;
  }

}

export default MyIcon;