import axios from "axios";

export function getDetailLeague(id){

    return async function(dispatch) {

        return async function (dispatch) {
            try {
              const response = await axios.get(`/league/${id}`);
              const data = response.data;
              dispatch({ type: 'DETAIL_LEAGUE', payload: data });
            } catch (error) {
              console.log(error.message);
            }
          };



        // let leagueDetail = await axios.get(`/league/${id}`)

        // let league = leagueDetail.data

        // return dispatch({
        //     type: 'DETAIL_LEAGUE',
        //     payload: league
        // })
    }
}