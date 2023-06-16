import { GET_FIXTURE_TODAY } from "../actions/actions-type";

const initialState = {
    nations : [],
    leagues : [],
    teams: [],
    showedLeagues: [],
    showedTeams : [],
    fixtureToday:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SEARCH_TEAM_LEAGUE':
            return {...state,
                showedLeagues: action.payload
            }
        case GET_FIXTURE_TODAY:{
            return{
                ...state,
                fixtureToday:action.payload
            }
        }
        default:
            return state;
    }
}

export default reducer;