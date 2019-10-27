import { get } from "../../utils/helpers/request";
export default {
  //获取热搜榜
  GetHotList(params) {
    return get("search/hot/detail", params);
  },
  GetSuggestList(params) {
    return get("search/suggest", params);
  }
};