import { RESET_LEAGUES_COUNTRY } from "./actions-type";

export function resetLeaguesCountry() {
  return {
    type: RESET_LEAGUES_COUNTRY,
    payload: [],
  };
}
