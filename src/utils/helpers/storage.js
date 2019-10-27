import Taro from "@tarojs/taro"
class Storage{
 get(key){
    try{
        return JSON.parse(Taro.getStorageSync(key))
    }
    catch(err){
        return Taro.getStorageSync(key)
    }
 }
 set(key,value){
   if(typeof value === "object"){
       value=JSON.stringify(value)
   }
   Taro.setStorageSync(key,value)
 }
}
export default new Storage()