import { SET_HOTLIST, SET_SUGGESTLIST } from "../constants/actionTypes";
import API from "../../apis/index";
export const GetHotListAction = () => {
  return async dispatch => {
    let { data } = await API.searchModel.GetHotList();
    let action = {
      type: SET_HOTLIST,
      payload: data
    };
    dispatch(action);
  };
};

export const GetSuggestListAction = query => {
  return async dispatch => {
    let { result: { allMatch } } = await API.searchModel.GetSuggestList(query);
    console.log(allMatch);
    let action = {
      type: SET_SUGGESTLIST,
      payload: allMatch ? allMatch : []
    };
    dispatch(action);
  };
};