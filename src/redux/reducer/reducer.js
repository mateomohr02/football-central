import { GET_FIXTURE_TODAY,GET_FIXTURE_BY_DATE_RANGE } from "../actions/actions-type";

const initialState = {
    nations : [],
    leagues : [],
    teams: [],
    showedLeagues: [],
    showedTeams : [],
    fixtureToday:[],
    fixtureByDateRange:[]
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
        case GET_FIXTURE_BY_DATE_RANGE:{
            return{
                ...state,
                fixtureByDateRange:action.payload
            }
        }
        default:
            return state;
    }
}

export default reducer;