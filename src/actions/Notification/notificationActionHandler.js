import {GET_NOTIFICATION} from '../../constants/actionTypes';

export function notification(data){
    return (dispatch=>{
        dispatch({
            type: GET_NOTIFICATION,
            payload: data
        })
    });
} 