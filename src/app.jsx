import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'
import configStore from './store'

//样式
import './app.scss'
//taro
import 'taro-ui/dist/style/index.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()



class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/me/index',
      'pages/moreMovie/index',
      'pages/movieDetail/index',
      'pages/player/index',
      'pages/login/index',
      'pages/rank/index',
    ],
    tabBar: {
      "color":"#000",
      "selectedColor":"#d44439",
      "list": [{
        "pagePath": "pages/index/index",
        "text": "发现音乐",
        "iconPath":"./assets/images/tabbar/wy.png",
        "selectedIconPath":"./assets/images/tabbar/wya.png"
      }, {
        "pagePath": "pages/me/index",
        "text": "我的",
        "iconPath":"./assets/images/tabbar/user.png",
        "selectedIconPath":"./assets/images/tabbar/usera.png"
      }]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#d44439',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white',
    },
    requiredBackgroundModes:['audio']
  }


  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
