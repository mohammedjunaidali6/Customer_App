import { GET_TRANSACTION_HISTORY } from '../../constants/actionTypes';

export function dispatchTransactionHistory(data) {
  return (dispatch) => {
    dispatch({
      type: GET_TRANSACTION_HISTORY,
      payload: data,
    });
  };
}
