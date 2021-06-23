import { SET_ENGAGEMENTS, SELECTED_ENGAGEMENT, SET_PLAYER_SUMMARY } from '../../constants/actionTypes';

const initialState = {
  engagements: null,
  selectedEngagement: null
};
const RewardZoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ENGAGEMENTS: {
      const newState = { ...state };
      newState.engagements = action.payload ? action.payload : null;
      return newState;
    }
    case SELECTED_ENGAGEMENT: {
      const newState = { ...state };
      newState.selectedEngagement = action.payload ? action.payload : null;
      return newState;
    }
    case SET_PLAYER_SUMMARY: {
      const newState = { ...state };
      newState.playerSummary = action.payload ? action.payload : null;
      return newState;
    }
    default: {
      return state;
    }
  }
};
export default RewardZoneReducer;
