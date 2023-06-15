const initialState = {
    nations : [],
    leagues : [],
    teams: [],
    showedLeagues: [],
    showedTeams : [],
    detailLeague: []
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

        default:
            return state;
    }
}

export default reducer;