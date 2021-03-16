import { GET_REWARDS, SELECTED_REWARD } from '../../constants/actionTypes';

export function getRewards(data) {
  return (dispatch) => {
    dispatch({
      type: GET_REWARDS,
      payload: data,
    });
  };
}

export function pushSelectedReward(data) {
  return (dispatch) => {
    dispatch({
      type:SELECTED_REWARD,
      payload: data,
    });
  };
}
