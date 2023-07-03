export function resetNewProduct(){
    return async function(dispatch){
        dispatch({
            type:'RESET_NEW_PRODUCT'
        })
    }
}