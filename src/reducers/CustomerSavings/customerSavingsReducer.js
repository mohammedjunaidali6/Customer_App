import { SET_CUSTOMER_SAVINGS } from '../../constants/actionTypes';

const initialState = {
    customerSavings: null
};
const CustomerSavingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CUSTOMER_SAVINGS: {
            const newState = { ...state };
            newState.customerSavings = action.payload ? action.payload : null;
            return newState;
        }
        default: {
            return state;
        }
    }
};
export default CustomerSavingsReducer;
