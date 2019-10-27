import '@tarojs/async-await';
import Taro, { Component } from "@tarojs/taro-h5";
import { Provider } from "@tarojs/redux-h5";

import configStore from "./store/index";

//样式
import './app.scss';
//taro
import 'taro-ui/dist/style/index.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

import Nerv from 'nervjs';
import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import { Router, createHistory, mountApis } from '@tarojs/router';
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});

const _taroHistory = createHistory({
  mode: "hash",
  basename: "/",
  customRoutes: {},
  firstPagePath: "/pages/index/index"
});

mountApis({
  "basename": "/",
  "customRoutes": {}
}, _taroHistory);
const store = configStore();

class App extends Component {
  state = {
    __tabs: {
      "color": "#000",
      "selectedColor": "#d44439",
      "list": [{
        "pagePath": "/pages/index/index",
        "text": "发现音乐",
        "iconPath": require("././assets/images/tabbar/wy.png"),
        "selectedIconPath": require("././assets/images/tabbar/wya.png")
      }, {
        "pagePath": "/pages/me/index",
        "text": "我的",
        "iconPath": require("././assets/images/tabbar/user.png"),
        "selectedIconPath": require("././assets/images/tabbar/usera.png")
      }],
      mode: "hash",
      basename: "/",
      customRoutes: {}
    }
  };


  config = {
    pages: ["/pages/index/index", "/pages/me/index", "/pages/moreMovie/index", "/pages/movieDetail/index", "/pages/player/index", "/pages/login/index", "/pages/rank/index"],
    tabBar: { "color": "#000", "selectedColor": "#d44439", "list": [{ "pagePath": "/pages/index/index", "text": "发现音乐", "iconPath": require("././assets/images/tabbar/wy.png"), "selectedIconPath": require("././assets/images/tabbar/wya.png") }, { "pagePath": "/pages/me/index", "text": "我的", "iconPath": require("././assets/images/tabbar/user.png"), "selectedIconPath": require("././assets/images/tabbar/usera.png") }], mode: "hash",
      basename: "/",
      customRoutes: {}
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#d44439',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    requiredBackgroundModes: ['audio']

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
  };render() {
    return <Provider store={store}>
          
        <TabbarContainer>
          
        <TabbarPanel>
          
                <Router mode={"hash"} history={_taroHistory} routes={[{
            path: '/pages/index/index',
            componentLoader: () => import( /* webpackChunkName: "index_index" */'./pages/index/index'),
            isIndex: true
          }, {
            path: '/pages/me/index',
            componentLoader: () => import( /* webpackChunkName: "me_index" */'./pages/me/index'),
            isIndex: false
          }, {
            path: '/pages/moreMovie/index',
            componentLoader: () => import( /* webpackChunkName: "moreMovie_index" */'./pages/moreMovie/index'),
            isIndex: false
          }, {
            path: '/pages/movieDetail/index',
            componentLoader: () => import( /* webpackChunkName: "movieDetail_index" */'./pages/movieDetail/index'),
            isIndex: false
          }, {
            path: '/pages/player/index',
            componentLoader: () => import( /* webpackChunkName: "player_index" */'./pages/player/index'),
            isIndex: false
          }, {
            path: '/pages/login/index',
            componentLoader: () => import( /* webpackChunkName: "login_index" */'./pages/login/index'),
            isIndex: false
          }, {
            path: '/pages/rank/index',
            componentLoader: () => import( /* webpackChunkName: "rank_index" */'./pages/rank/index'),
            isIndex: false
          }]} customRoutes={{}} />
                
        </TabbarPanel>
        <Tabbar conf={this.state.__tabs} homePage="pages/index/index" />
        </TabbarContainer>
        </Provider>;
  }

  constructor(props, context) {
    super(props, context);
    Taro._$app = this;
  }

  componentWillMount() {
    Taro.initTabBarApis(this, Taro);
  }

}

Nerv.render(<App />, document.getElementById('app'));