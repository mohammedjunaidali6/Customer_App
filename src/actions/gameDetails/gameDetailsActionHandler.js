import { GET_GAME_DETAIL } from '../../constants/actionTypes';

export function dispatchGameDetail(data) {
  return (dispatch) => {
    dispatch({
      type: GET_GAME_DETAIL,
      payload: data,
    });
  };
}
