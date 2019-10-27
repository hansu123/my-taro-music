import Taro, { request as _request } from "@tarojs/taro-h5";
const baseURL = 'http://49.235.18.58:7700/';
let request = (url, method, data) => {
  return new Promise((resolve, reject) => {
    _request({
      url: baseURL + url,
      data,
      method,
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        resolve(res.data);
      }
    });
  });
};

export const get = async (url, params = {}) => {
  let d = await request(url, "GET", params);
  return d;
};

export const post = async (url, data = {}) => {
  let d = await request(url, "POST", data);
  return d;
};