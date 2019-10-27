import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon} from "taro-ui"

class MyIcon extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (<View style={{display:'flex',alignItems:"center"}}>
            <AtIcon value={this.props.value} size={this.props.size} color={this.props.color}></AtIcon>
            <Text>
                {this.props.text}
            </Text>
        </View>)
    }

}

export default MyIcon
