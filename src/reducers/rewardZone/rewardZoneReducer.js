import { GET_REWARDS,SELECTED_REWARD  } from '../../constants/actionTypes';

const initialState = {
  rewards: null,
  selectedReward: null
};
const RewardZoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REWARDS: {
      const newState = { ...state };
      newState.rewards = action.payload ? action.payload: null;
      return newState;
    }
    case SELECTED_REWARD: {
      const newState = { ...state };
      newState.selectedReward = action.payload ? action.payload: null;
      return newState;
    }
    default: {
      return state;
    }
  }
};
export default RewardZoneReducer;
