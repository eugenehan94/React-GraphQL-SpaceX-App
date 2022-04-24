import produce from "immer";

import {MOBILE_OPEN} from "../../_helper/constant";

const initialState = {
    mobileOpen: false
}

export const topNavReducer = (state = initialState, action) => {
    switch(action.type){
        case MOBILE_OPEN:
            return produce(state, (draftState) => {
                draftState.mobileOpen = action.payload
            })

    default:
        return state;
    }
}