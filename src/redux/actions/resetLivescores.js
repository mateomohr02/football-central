import { RESET_LIVESCORES } from "./actions-type";

export const resetLivescores = () => {
  return {
    type: RESET_LIVESCORES,
    payload: [],
  };
};
