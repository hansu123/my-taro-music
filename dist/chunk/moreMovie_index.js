(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"115":function(e,t,n){"use strict";n.d(t,"a",function(){return setNavigationBarTitle});var o=n(1);function setNavigationBarTitle(e){var t=Object(o.j)(e);if(!t.res){var n={"errMsg":"setNavigationBarTitle"+t.msg};return console.error(n.errMsg),Promise.reject(n)}var r=e.title,a=e.success,i=e.fail,s=e.complete,c={"errMsg":"setNavigationBarTitle:ok"};return r&&"string"==typeof r?(document.title!==r&&(document.title=r),"function"==typeof a&&a(c),"function"==typeof s&&s(c),Promise.resolve(c)):(c.errMsg=Object(o.d)({"name":"setNavigationBarTitle","para":"title","correct":"String","wrong":r}),console.error(c.errMsg),"function"==typeof i&&i(c),"function"==typeof s&&s(c),Promise.reject(c))}},"144":function(e,t,n){e.exports={"movie_wrapper":"more-module__movie_wrapper___3-PO5","movie_container":"more-module__movie_container___3f68K","movie_item":"more-module__movie_item___wxBBr","movie_item_body_rate":"more-module__movie_item_body_rate___1nqz1"}},"170":function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(165),a=n(2),i=n(115),s=n(32),c=n(11),u=n(117),l=n(88),p=n.n(l),f=n(5),m=n.n(f),v=n(87),h=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var _=function(e){function AtRate(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtRate),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtRate.__proto__||Object.getPrototypeOf(AtRate)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtRate,v["a"]),h(AtRate,[{"key":"handleClick","value":function handleClick(){var e;(e=this.props).onChange.apply(e,arguments)}},{"key":"render","value":function render(){for(var e=this,t=this.props,n=t.customStyle,r=t.className,i=t.value,s=t.max,l=t.size,p=t.margin,f={"marginRight":a.a.pxTransform(p)},v={"fontSize":l?l+"px":""},h=[],_=Math.floor(i),d=Math.ceil(i),y=0;y<s;y++)_>y?h.push("at-rate__icon at-rate__icon--on"):d-1===y?h.push("at-rate__icon at-rate__icon--half"):h.push("at-rate__icon at-rate__icon--off");return o.j.createElement(c.a,{"className":m()("at-rate",r),"style":n},h.map(function(t,n){return o.j.createElement(c.a,{"className":t,"key":n,"style":f,"onClick":e.handleClick.bind(e,n+1)},o.j.createElement(u.a,{"className":"at-icon at-icon-star-2","style":v}),o.j.createElement(c.a,{"className":"at-rate__left"},o.j.createElement(u.a,{"className":"at-icon at-icon-star-2","style":v})))}))}}]),AtRate}();_.defaultProps={"isTest":!1,"customStyle":"","className":"","size":0,"value":0,"max":5,"margin":5,"onChange":function onChange(){}},_.propTypes={"customStyle":p.a.oneOfType([p.a.object,p.a.string]),"className":p.a.oneOfType([p.a.array,p.a.string]),"size":p.a.oneOfType([p.a.string,p.a.number]),"value":p.a.number,"max":p.a.number,"margin":p.a.number,"onChange":p.a.func};var d=n(164),y=n(89),g=n(144),b=n.n(g),w=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),j=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0};function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(o,r){try{var a=t[o](r),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}var M=function(e){function moreMovie(e){var t=this;!function moreMovie_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,moreMovie);var n,o,i=function moreMovie_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(moreMovie.__proto__||Object.getPrototypeOf(moreMovie)).call(this,e));return i.config={"navigationBarTitleText":"豆瓣电影"},i.handleClick=function(){},i.getList=(n=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e){var n;return regeneratorRuntime.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return Object(r.b)({"title":"loading"}),t.next=3,e();case 3:n=t.sent,i.setState({"movieList":n.data.subjects},function(){Object(r.a)()});case 5:case"end":return t.stop()}},_callee,t)})),function(e){return n.apply(this,arguments)}),i.getMoreList=(o=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e,n){var o;return regeneratorRuntime.wrap(function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:return i.setState({"showLoadMore":!0,"status":"loading"}),t.next=3,e(n);case 3:o=t.sent,i.setState({"movieList":i.state.movieList.concat(o.data.subjects)},function(){o.data.subjects.length<20?i.setState({"status":"noMore"}):i.setState({"showLoadMore":!1,"status":""})});case 5:case"end":return t.stop()}},_callee2,t)})),function(e,t){return o.apply(this,arguments)}),i.loadMore=function(){i.setState({"start":i.state.start+20},function(){var e={"start":i.state.start,"count":20};i.getMoreList(y.a.movieModel.GetHotList,e)})},i.showDetail=function(e){a.a.navigateTo({"url":"/pages/movieDetail/index?id="+e})},i.state={"title":"","movieList":[],"start":0,"status":"","showLoadMore":!1},i}return function moreMovie_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(moreMovie,a["a"].Component),w(moreMovie,[{"key":"componentWillMount","value":function componentWillMount(){var e=this;this.setState({"title":this.$router.params.title},function(){switch(e.state.title){case"正在热映":e.getList(y.a.movieModel.GetHotList)}})}},{"key":"componentDidMount","value":function componentDidMount(){Object(i.a)({"title":this.state.title})}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){console.log(this.props,e)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){}},{"key":"onReachBottom","value":function onReachBottom(){"noMore"!==this.state.status&&this.loadMore()}},{"key":"render","value":function render(){var e=this;return o.j.createElement(c.a,{"className":b.a.movie_wrapper},o.j.createElement(c.a,{"className":b.a.movie_container},this.state.movieList?this.state.movieList.map(function(t){return o.j.createElement(c.a,{"key":t.id,"className":b.a.movie_item,"onClick":function onClick(){e.showDetail(t.id)}},o.j.createElement("image",{"src":t.images.medium}),t.rating.average?o.j.createElement(c.a,{"className":b.a.movie_item_body_rate},o.j.createElement(_,{"size":"10","value":t.rating.average/2}),o.j.createElement(u.a,null,t.rating.average.toFixed(1))):o.j.createElement(c.a,{"className":b.a.movie_item_body_rate},o.j.createElement(u.a,null,"暂无评分")),o.j.createElement(u.a,{"style":{"fontWeight":"bold"}},t.title))}):"暂无数据"),o.j.createElement(c.a,null,this.state.showLoadMore?o.j.createElement(d.a,{"status":this.state.status,"noMoreText":"已无更多数据"}):""))}},{"key":"componentDidShow","value":function componentDidShow(){j(moreMovie.prototype.__proto__||Object.getPrototypeOf(moreMovie.prototype),"componentDidShow",this)&&j(moreMovie.prototype.__proto__||Object.getPrototypeOf(moreMovie.prototype),"componentDidShow",this).call(this),this._offReachBottom=Object(s.a)({"callback":this.onReachBottom,"ctx":this,"onReachBottomDistance":void 0})}},{"key":"componentDidHide","value":function componentDidHide(){j(moreMovie.prototype.__proto__||Object.getPrototypeOf(moreMovie.prototype),"componentDidHide",this)&&j(moreMovie.prototype.__proto__||Object.getPrototypeOf(moreMovie.prototype),"componentDidHide",this).call(this),this._offReachBottom&&this._offReachBottom()}}]),moreMovie}();t.default=M},"89":function(e,t,n){"use strict";var o=n(156);function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(o,r){try{var a=t[o](r),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}var r,a,i=function request(e,t,n){return new Promise(function(r,a){Object(o.a)({"url":"http://49.235.18.58:7700/"+e,"data":n,"method":t,"header":{"content-type":"application/json"},"success":function success(e){r(e.data)}})})},s=(r=_asyncToGenerator(regeneratorRuntime.mark(function _callee(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return regeneratorRuntime.wrap(function _callee$(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,i(e,"GET",n);case 2:return t=o.sent,o.abrupt("return",t);case 4:case"end":return o.stop()}},_callee,void 0)})),function get(e){return r.apply(this,arguments)}),c=(a=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return regeneratorRuntime.wrap(function _callee2$(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,i(e,"POST",n);case 2:return t=o.sent,o.abrupt("return",t);case 4:case"end":return o.stop()}},_callee2,void 0)})),{"GetMusicDetail":function GetMusicDetail(e){return s("playlist/detail",e)},"GetSongDetail":function GetSongDetail(e){return s("song/detail",e)},"GetSongUrl":function GetSongUrl(e){return s("song/url",e)}}),u={"GetHotList":function GetHotList(e){return s("search/hot/detail",e)},"GetSuggestList":function GetSuggestList(e){return s("search/suggest",e)}},l={"GetBannerList":function GetBannerList(){return s("banner")},"GetRecommendList":function GetRecommendList(){return s("personalized")}},p={"GetUserInfo":function GetUserInfo(e){return s("login/cellphone",params)}};t.a={"songModel":c,"searchModel":u,"homeModel":l,"userModel":p}}}]);