import { combineReducers } from 'redux'
import music from './music'
import player from './player'
import user from "./user"
import search from "./search"
export default combineReducers({
  music,
  player,
  user,
  search
})
