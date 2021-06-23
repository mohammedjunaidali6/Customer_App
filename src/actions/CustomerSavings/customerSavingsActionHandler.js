import { SET_CUSTOMER_SAVINGS } from '../../constants/actionTypes';

export function dispathCustomerSavings(data) {
    return (dispatch) => {
        dispatch({
            type: SET_CUSTOMER_SAVINGS,
            payload: data,
        });
    };
}
