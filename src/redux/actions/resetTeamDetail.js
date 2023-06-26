import { RESET_DETAIL_TEAM } from "./actions-type";

export function resetTeamDetail (){
    return {
        type: RESET_DETAIL_TEAM,
        payload: []
    }
}