import axios from 'axios';
import { PREMIUM } from './actions-type';

export const createSubscription = (subscriptionData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        'https://backpf-production-0f7e.up.railway.app/subscription', 
        subscriptionData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      dispatch({
        type: PREMIUM,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
