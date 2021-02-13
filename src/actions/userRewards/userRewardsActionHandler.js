import { GET_USER_REWARDS } from '../../constants/actionTypes';

export function dispatchUserRewards(data) {
  return (dispatch) => {
    dispatch({
      type: GET_USER_REWARDS,
      payload: data,
    });
  };
}
