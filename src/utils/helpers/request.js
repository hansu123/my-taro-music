import Taro from '@tarojs/taro'
const baseURL='http://49.235.18.58:7700/'
let request=(url,method,data)=>{
    return new Promise((resolve,reject)=>{
        Taro.request({
        url: baseURL+url,
        data,
        method,
        header: {
            'content-type': 'application/json'
        },
        success (res) {
            resolve(res.data)
        }
        })
    })
}

export const get=async (url,params={})=>{
  let d=await request(url,"GET",params)
  return d
}

export const post=async (url,data={})=>{
    let d=await request(url,"POST",data)
    return d
}