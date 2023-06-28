import { RESET_STANDINGS } from "./actions-type";

export function resetStandingsLeague (){
    return {
        type: RESET_STANDINGS,
        payload: []
    }
}