import { SET_TOP_CUSTOMER_SAVINGS} from '../../constants/actionTypes';

export function dispatchTopCustomerSavings(data) {
  return (dispatch) => {
    dispatch({
      type: SET_TOP_CUSTOMER_SAVINGS,
      payload: data,
    });
  };
}