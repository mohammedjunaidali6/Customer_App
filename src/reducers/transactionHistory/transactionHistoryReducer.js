import { GET_TRANSACTION_HISTORY } from '../../constants/actionTypes';

const initialState = {
    transactionHistory: null
};
const TransactionHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTION_HISTORY: {
      const newState = { ...state };
      newState.transactionHistory = action.payload ? action.payload: null;
      return newState;
    }
    default: {
      return state;
    }
  }
};
export default TransactionHistoryReducer;
