import { GET_USERS } from '../../constants/actionTypes';

export function dispatchUsers(data) {
  return (dispatch) => {
    dispatch({
      type: GET_USERS,
      payload: data,
    });
  };
}
