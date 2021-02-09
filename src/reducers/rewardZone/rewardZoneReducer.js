import { GET_REWARDS } from '../../constants/actionTypes';

const initialState = {
  rewards: undefined
};
const RewardZoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REWARDS: {
      const newState = { ...state };
      newState.rewards = action.payload ? action.payload: null;
      return newState;
    }
    default: {
      return state;
    }
  }
};
export default RewardZoneReducer;
