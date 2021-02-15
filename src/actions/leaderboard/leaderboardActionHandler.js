import { GET_LEADERBOARD, GET_LEADERBOARD_OTHERS_PLAYING } from '../../constants/actionTypes';

export function dispatchLeaderBoard(data) {
  return (dispatch) => {
    dispatch({
      type: GET_LEADERBOARD,
      payload: data,
    });
  };
}

export function dispatchLeaderBoardOthersPlaying(data) {
    return (dispatch) => {
      dispatch({
        type: GET_LEADERBOARD_OTHERS_PLAYING,
        payload: data,
      });
    };
  }
