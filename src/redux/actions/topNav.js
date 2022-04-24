import { MOBILE_OPEN} from "../../_helper/constant";

export const toggleMobileOpen = (state) => {
    return {
        type: MOBILE_OPEN,
        payload: state
    }
}