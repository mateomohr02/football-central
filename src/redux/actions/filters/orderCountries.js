import { ORDER_COUNTRIES } from "../actions-type";

export const orderCountries = (payload) => {
  return {
    type:ORDER_COUNTRIES,
    payload:payload
  }
}