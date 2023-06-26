import axios from "axios";

export function getLeaguesCountry (countryId){
    return async function (dispatch) {
        try {
            const response = await axios.get(`/league/country/${countryId}`);
            const data = response.data;
            dispatch({ type: 'GET_LEAGUES_COUNTRY', payload: data });
          } catch (error) {
            console.log(error.message);
          }
        
        
        
        
        
        
    //     let leaguesCountry = await axios.get(`/league/country/${countryId}`)
    //     return dispatch({
    //         type: 'GET_LEAGUES_COUNTRY',
    //         payload: leaguesCountry.data
    //     })
    }
}