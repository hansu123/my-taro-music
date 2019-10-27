//函数
import { get } from "../../utils/helpers/request";
export default {
  GetMusicDetail(params) {
    return get("playlist/detail", params);
  },
  GetSongDetail(params) {
    return get("song/detail", params); //ids:id
  },
  GetSongUrl(params) {
    return get("song/url", params);
  }
};