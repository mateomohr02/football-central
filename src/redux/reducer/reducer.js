import { GET_FIXTURE_TODAY,GET_FIXTURE_BY_DATE_RANGE } from "../actions/actions-type";

const initialState = {
    nations : [],
    leagues : [],
    teams: [],
    showedLeagues: [],
    showedTeams : [],
    detailLeague: [],
    standings: [],
    detailCup: [],
    countryLeagues: [],
    fixtureToday:[],
    fixtureByDateRange:[]
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
        case 'DETAIL_CUP':
            return {
                ...state,
                detailCup: action.payload
            }

        case 'GET_LEAGUES_COUNTRY':
            return{...state,
                countryLeagues: action.payload
            }

        case 'RESET_LEAGUES_COUNTRY':
            return{...state,
                countryLeagues: action.payload
            }
        case 'RESET_LEAGUE_DETAIL':
            return{...state,
                detailLeague: []
            }
        case 'RESET_CUP_DETAIL':
            return{
                ...state,
                detailCup: []
            }    
        case 'GET_STANDINGS_LEAGUE':
            return{
                ...state,
                standings: action.payload
            }
        case 'RESET_STANDINGS':
            return{
                ...state,
                standings: []
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
