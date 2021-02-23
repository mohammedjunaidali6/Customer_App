import {GET_STATUS} from '../../constants/actionTypes';

export function Status(data){
    return (dispatch =>{
        dispatch({
            type: GET_STATUS,
            payload: data
        })
    });
}