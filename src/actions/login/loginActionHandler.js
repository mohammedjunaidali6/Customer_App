import { LOGIN } from '../../constants/actionTypes';

export function login(data) {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
      payload: data,
    });
  };
}
