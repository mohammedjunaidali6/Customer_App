import { GET_USER_REWARDS } from '../../constants/actionTypes';

const initialState = {
    userRewards: null
};
const UserRewardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REWARDS: {
      const newState = { ...state };
      newState.userRewards = action.payload ? action.payload: null;
      return newState;
    }
    default: {
      return state;
    }
  }
};
export default UserRewardsReducer;
