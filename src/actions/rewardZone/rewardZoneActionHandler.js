import { SET_ENGAGEMENTS, SELECTED_ENGAGEMENT } from '../../constants/actionTypes';

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
