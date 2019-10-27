import {get} from "@/utils/helpers/request"
export default {
    GetBannerList() {
        return get("banner")
    },
    GetRecommendList() {
        return get("personalized")
    }
}