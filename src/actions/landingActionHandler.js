import { SET_CUSTOMER_DETAILS } from '../constants/actionTypes';

export function dispatchCustomerData(data) {
    return (dispatch) => {
        dispatch({
            type: SET_CUSTOMER_DETAILS,
            payload: data,
        });
    };
}