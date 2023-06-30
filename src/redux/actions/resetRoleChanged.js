export function resetChangedRole(){
    return async function(dispatch){
        dispatch({
            type: 'RESET_CHANGED_ROLE'
        })
    }
}