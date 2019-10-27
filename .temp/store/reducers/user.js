import { SET_USERINFO } from '../constants/actionTypes';

const INITIAL_STATE = {
  userInfo: []
};

export default ((state = INITIAL_STATE, action) => {
  let { type, payload } = action;
  switch (type) {
    case SET_USERINFO:
      return { ...state, userInfo: { ...payload } };
    default:
      return state;
  }
});