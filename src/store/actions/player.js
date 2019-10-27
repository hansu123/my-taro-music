import API from "@/apis"
import {SET_PLAYSTATUS,SET_PLAYLIST,SET_CURRENTSONG,SET_MODEL,SET_CURRENTINDEX,SET_CURRENTSONGURL} from "@/store/constants/actionTypes"

export const SetPlayStatusAction=status=>{
    console.log("isPlay",status)
    return {
        type:SET_PLAYSTATUS,
        payload:status
    }
}

//获取列表详情
export const GetPlayListAction=(query)=>{
    return async dispatch=>{
        let { playlist } = await API.songModel.GetMusicDetail(query)
        let action={
            type:SET_PLAYLIST,
            payload:playlist
        }
        dispatch(action)
    }
}

export const GetCurrentSongAction=id=>{
    return async dispatch=>{
        let {songs} = await API.songModel.GetSongDetail({ ids:id })
        let {data} =await API.songModel.GetSongUrl({ id })
        if(data[0].url){
            songs[0].url=data[0].url
        }
        else{
            songs[0].url="VIP"
        }
        let action={
            type:SET_CURRENTSONG,
            payload:songs[0]
        }
        console.log(songs[0])
        return dispatch(action)
    }
}

export const SetCurrentIndexAction=index=>{
    return {
        type:SET_CURRENTINDEX,
        payload:index
    }
}





