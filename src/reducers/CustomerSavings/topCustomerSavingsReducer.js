import {SET_TOP_CUSTOMER_SAVINGS } from '../../constants/actionTypes';

const initialState = {
  topCustomersSavings:null,
};
const TopCustomerSavingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_CUSTOMER_SAVINGS: {
      const newState = { ...state };
      newState.topCustomersSavings = action.payload ? action.payload: null;
      return newState;
    }
    default: {
      return state;
    }
  }
};
export default TopCustomerSavingsReducer;
