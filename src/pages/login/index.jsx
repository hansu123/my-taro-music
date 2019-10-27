import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtButton, AtInput, AtForm } from "taro-ui"
import { connect } from "@tarojs/redux"
import styles from './index.module.scss'
import { GetUserInfoAction } from '@/store/actions/user';

@connect(({ userInfo }) => ({
    userInfo
}), (dispatch) => ({
    asyncGetUserInfo(query) {
        return dispatch(GetUserInfoAction(query))
    }
}))
class Login extends Component {

    config = {
        navigationBarTitleText: '登陆'
    }

    constructor(props) {
        super(props)
        this.state = {
            phoneValue: '',
            pwdValue: ''
        }
    }
    handlePhoneChange = value => {
        this.setState({
            phoneValue: value
        })
    }
    handlePwdChange = value => {
        this.setState({
            pwdValue: value
        })
    }

    onSubmit() {
        let { phoneValue, pwdValue } = this.state
        this.handleLogin(phoneValue, pwdValue)
    }

    handleLogin = async (phone, password) => {
        let query = {
            phone,
            password
        }
        let code=await this.props.asyncGetUserInfo(query)
        if(code===200){
            Taro.switchTab({url:"/pages/me/index"})
        }
    }

    render() {
        return (
            <View>
                <AtForm
                    onSubmit={this.onSubmit.bind(this)}
                >
                    <AtInput
                        name='value'
                        title='手机号'
                        type='text'
                        placeholder='输入手机号'
                        value={this.state.phoneValue}
                        onChange={this.handlePhoneChange}
                    /><AtInput
                        name='value'
                        title='密码'
                        type='password'
                        placeholder='输入密码'
                        value={this.state.pwdValue}
                        onChange={this.handlePwdChange}
                    />
                    <Button style={{border:'none',borderRadius:'100px',marginTop:"10px"}}>提交</Button>
                </AtForm>
            </View>
        )
    }
}


export default Login
