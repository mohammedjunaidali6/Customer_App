import { GET_USERS } from '../../constants/actionTypes';

const initialState = {
  allUsers: undefined
};
const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      const newState = { ...state };
      newState.allUsers = action.payload ? action.payload: null;
      return newState;
    }
    default: {
      return state;
    }
  }
};
export default HomeReducer;
