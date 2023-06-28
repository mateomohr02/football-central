import { RESET_CUP_DETAIL } from "./actions-type";

export function resetDetailCup (){
    return {
        type: RESET_CUP_DETAIL,
        payload: []
    }
}