class Router {
  constructor(options = {}) {
    // this.beforeEach = () => { }
    // this.options = options  //存储路由映射表
    // this.routesMap = {}
    return new Proxy(this, {
      get(target, key) {
        if (["back"].includes(key)) {
          return target[key];
        }
        return (...args) => {
          if (key === "push") {
            key = "navigateTo";
          }
          target.beforeEach(key, ...args);
        };
      },
      set(target, key, value) {
        if (value instanceof Function) {
          target[key] = value;
          return true;
        } else {
          throw new TypeError('beforeEach must a function');
        }
      }
    });
  }

  //back和以上区分是因为，back不需要地址和参数只需要传入回退几层即可
  back(params) {
    Taro.navigateBack({
      ...params
    });
  }

}