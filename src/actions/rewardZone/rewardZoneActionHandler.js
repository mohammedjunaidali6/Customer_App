import { SET_ENGAGEMENTS, SELECTED_ENGAGEMENT, SET_PLAYER_SUMMARY } from '../../constants/actionTypes';

export function setEngagements(data) {
  return (dispatch) => {
    dispatch({
      type: SET_ENGAGEMENTS,
      payload: data,
    });
  };
}

export function pushSelectedEngagement(data) {
  return (dispatch) => {
    dispatch({
      type: SELECTED_ENGAGEMENT,
      payload: data,
    });
  };
}

export function setPlayerSummary(data) {
  return (dispatch) => {
    dispatch({
      type: SET_PLAYER_SUMMARY,
      payload: data,
    })
  }
}
