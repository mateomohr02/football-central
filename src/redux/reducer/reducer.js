const initialState = {
    nations : [],
    leagues : [],
    teams: [],
    showedLeagues: [],
    showedTeams : [],
    detailLeague: [],
    countryLeagues: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SEARCH_TEAM_LEAGUE':
            return {...state,
                showedTeams: action.payload
            }
        
        case 'DETAIL_LEAGUE':
            return{...state,
                detailLeague: action.payload
            }

        case 'GET_LEAGUES_COUNTRY':
            return{...state,
                countryLeagues: action.payload
            }

        case 'RESET_LEAGUES_COUNTRY':
            return{...state,
                countryLeagues: action.payload
            }
        default:
            return state;
    }
}

export default reducer;

//esto es para que reconozca los cambios