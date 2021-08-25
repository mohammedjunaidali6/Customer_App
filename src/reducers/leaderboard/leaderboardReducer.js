import {SET_TOP_CUSTOMER_SAVINGS, GET_LEADERBOARD, GET_LEADERBOARD_OTHERS_PLAYING } from '../../constants/actionTypes';

const initialState = {
    leaderboard: null,
    leaderboardOthersPlaying: null
};
const LeaderBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_CUSTOMER_SAVINGS: {
      const newState = { ...state };
      newState.topCustomersSavings = action.payload ? action.payload: null;
      return newState;
    }
    case GET_LEADERBOARD: {
      const newState = { ...state };
      newState.leaderboard = action.payload ? action.payload: null;
      return newState;
    }
    case GET_LEADERBOARD_OTHERS_PLAYING: {
        const newState = { ...state };
        newState.leaderboardOthersPlaying = action.payload ? action.payload: null;
        return newState;
      }
    default: {
      return state;
    }
  }
};
export default LeaderBoardReducer;
