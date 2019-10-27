import { SET_PLAYSTATUS,SET_PLAYLIST,SET_CURRENTINDEX,SET_CURRENTSONG} from '../constants/actionTypes'

const INITIAL_STATE = {
   playStatus:"pause",
   playList:{},
   currentIndex:undefined,
   currentSong:{}
}

export default (state = INITIAL_STATE, action) => {
  let { type,payload } = action
  switch (type) {
    case SET_PLAYSTATUS:
    return {...state, playStatus:payload}
    case SET_PLAYLIST:
    return {...state, playList:{...payload}}
    case SET_CURRENTINDEX:
    return {...state, currentIndex:payload}
    case SET_CURRENTSONG:
    return {...state, currentSong:{...payload}}
    default:
    return state
  }
}
