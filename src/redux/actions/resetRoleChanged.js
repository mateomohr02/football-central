import { RESET_CHANGED_ROLE } from "./actions-type"

export function resetChangedRole(){
    return async function(dispatch){
        dispatch({
            type: RESET_CHANGED_ROLE
        })
    }
}