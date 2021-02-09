import { GET_REWARDS } from '../../constants/actionTypes';

export function getRewards(data) {
  return (dispatch) => {
    dispatch({
      type: GET_REWARDS,
      payload: data,
    });
  };
}
