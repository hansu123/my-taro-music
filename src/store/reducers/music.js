import { SET_BANNERLIST,SET_RECOMMENDLIST } from '../constants/actionTypes'

const INITIAL_STATE = {
  bannerList: [],
  recommendList: []
}

export default (state = INITIAL_STATE, action) => {
  let { type, payload } = action
  switch (type) {
    case SET_BANNERLIST:
    return {...state, bannerList: [...payload]}
    case SET_RECOMMENDLIST:
    return {...state,recommendList:[...payload]}
    default:
      return state
  }
}
