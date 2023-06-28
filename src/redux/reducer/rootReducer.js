import { combineReducers } from "redux";
import teamReducer from "./teamReducer";
import leagueCupReducer from "./leagueCupReducer";
import userReducer from "./userReducer";
import standingsReducer from "./standingsReducer";
import fixtureReducer from "./fixtureReducer";
import livescoresReducer from "./livescoresReducer";
import venueReducer from "./venueReducer";
import playerReducer from "./playerReducer";
import newsReducer from "./newsReducer";

//all reducers get sent dispatch, only one acts on it
const rootReducer = combineReducers({
  team: teamReducer,
  leagueCup: leagueCupReducer,
  user: userReducer,
  standings: standingsReducer,
  fixture: fixtureReducer,
  livescores: livescoresReducer,
  venue: venueReducer,
  player: playerReducer,
  news: newsReducer
});

export default rootReducer;
