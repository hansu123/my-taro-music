import Taro, { getStorageSync as _getStorageSync, setStorageSync as _setStorageSync } from "@tarojs/taro-h5";
class Storage {
  get(key) {
    try {
      return JSON.parse(_getStorageSync(key));
    } catch (err) {
      return _getStorageSync(key);
    }
  }
  set(key, value) {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    _setStorageSync(key, value);
  }
}
export default new Storage();