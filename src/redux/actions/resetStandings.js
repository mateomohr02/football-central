import { RESET_STANDINGS } from "./actions-type";

export function resetStandings (){
    return {
        type: RESET_STANDINGS,
        payload: []
    }
}