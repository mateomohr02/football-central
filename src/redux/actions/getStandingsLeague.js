import axios from "axios";

export function getStandingsLeague(id){
    
    return async function (dispatch){
    let url;

    if (id === '636'){
        url = `http://localhost:3001/standings/20873?league_id=${id}`
    }
    if (id === '82'){
        url = `http://localhost:3001/standings/19744?league_id=${id}`
    }
    if (id === '85'){
        url = `http://localhost:3001/standings/19743?league_id=${id}`
    }
    if (id === '8'){
        url = `http://localhost:3001/standings/21646?league_id=${id}`
    }
    
    try {
        let apiData = await axios.get(url);
        let standings = apiData.data;
  
        return dispatch({
          type: 'GET_STANDINGS_LEAGUE',
          payload: standings
        });
      } catch (error) {
        
        alert('No se puede acceder al detail de esta liga')
        
      }

    }
}