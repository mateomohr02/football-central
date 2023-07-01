import axios from 'axios';

export function getPlayersCountry(){
    return async function(dispatch){
        try {
            const response = await axios.get("/player");
            const players = response.data;
            console.log(players);
            
            const countryPlayers = players.filter(player => player.type === "country");
            console.log("paises", countryPlayers);
            dispatch({
                type: "FILTER_PLAYERSBYCOUNTRY",
                payload: countryPlayers,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export function getPlayersTeams(){
    return async function(dispatch){
        try {
            const response = await axios.get("/player");
            const players = response.data;
            console.log(players)
            
            const teamPlayers = players.filter(player => player.type === "team");
            console.log("equipos", teamPlayers);
            dispatch({
                type: "FILTER_PLAYERSBYTEAM",
                payload: teamPlayers,
            });
        } catch (error) {
            console.log(error);           
        }
    };
};

export function getPlayersHeight(){
    return async function(dispatch){
        try {
            const response = await axios.get("/player");
            const players = response.data;
            console.log(players)

            const heightPlayers = players.filter(player => player.type === "height");
            console.log("altura", heightPlayers);
            dispatch({
                type: "FILTER_PLAYERSBYHEIGHT",
                payload: heightPlayers,
            });
        } catch (error) {
            console.log(error);
        }
    };
};