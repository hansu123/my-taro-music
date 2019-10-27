import API from "@/apis"
import {SET_BANNERLIST,SET_RECOMMENDLIST} from "@/store/constants/actionTypes"
export const GetBannerListAction=()=>{
    return async dispatch=>{
        let {banners}=await API.homeModel.GetBannerList()
        let action={
            type:SET_BANNERLIST,
            payload:banners
        }
        dispatch(action)
    }
}

export const GetRecommendListAction=()=>{
    return async dispatch=>{
        let {result}=await API.homeModel.GetRecommendList()
        let action={
            type:SET_RECOMMENDLIST,
            payload:result
        }
        dispatch(action)
    }
}