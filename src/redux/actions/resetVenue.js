import { RESET_VENUE } from "./actions-type";

export function resetVenue (){
    return {
        type: RESET_VENUE,
        payload: {}
    }
}