import API from "@/apis"
import storage from "@/utils/helpers/storage"
import { SET_USERINFO } from '../constants/actionTypes'

export const GetUserInfoAction=(query)=>{
    return async dispatch=>{
       let {data}=await API.userModel.GetUserInfo(query)
       if(data.code==200){
        storage.set("userInfo",data.profile)
       }
       let action={
           type:SET_USERINFO,
           payload:data.profile
       }
       dispatch(action)
       return data.code
    }
}