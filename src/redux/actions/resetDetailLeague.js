import { RESET_LEAGUE_DETAIL } from "./actions-type";

export function resetDetailLeague (){
    return {
        type: RESET_LEAGUE_DETAIL,
        payload: []
    }
}