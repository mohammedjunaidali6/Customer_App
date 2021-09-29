import { 
  SET_ENGAGEMENTS, 
  SELECTED_ENGAGEMENT, 
  SET_PLAYER_SUMMARY,
  SET_ENGAGEMENTS_PLAYERS_AND_AMOUNTS,
  SET_ENGAGEMENTS_RULE_AMOUNTS
 } from '../../constants/actionTypes';

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

export function setEngagementsPlayersAndAmounts(data) {
  return (dispatch) => {
    dispatch({
      type: SET_ENGAGEMENTS_PLAYERS_AND_AMOUNTS,
      payload: data,
    })
  }
}
export function setEngagementsRuleAmounts(data) {
  return (dispatch) => {
    dispatch({
      type: SET_ENGAGEMENTS_RULE_AMOUNTS,
      payload: data,
    })
  }
}
