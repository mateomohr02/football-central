import {RESET_SHOWED_TEAMS } from "./actions-type";

export function resetShowedTeams (){
    return {
        type: RESET_SHOWED_TEAMS,
        payload: []
    }
}