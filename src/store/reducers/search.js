import {SET_HOTLIST,SET_SEARCHLIST,SET_SUGGESTLIST} from "../constants/actionTypes"
const initState={
  hotList:[],
  searchList:[],
  suggestList:[]
}

export default (state=initState,action)=>{
  let {type,payload}=action
  switch(type){
      case SET_HOTLIST:
      return {...state,hotList:payload}
      case SET_SEARCHLIST:
      return {...state,searchList:payload}
      case SET_SUGGESTLIST:
      return {...state,suggestList:payload}
      default:return state;
  }
}