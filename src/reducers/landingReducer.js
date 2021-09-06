import { SET_CUSTOMER_DETAILS } from '../constants/actionTypes';

const initialState = {
    customerDetails: null,
};
const LandingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CUSTOMER_DETAILS: {
            const newState = { ...state };
            newState.customerDetails = action.payload || false;
            return newState;
        }
        default: {
            return state;
        }
    }
};
export default LandingReducer;

