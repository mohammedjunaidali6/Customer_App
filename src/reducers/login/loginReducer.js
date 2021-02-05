import { LOGIN } from '../../constants/actionTypes';

const initialState = {
    loginUser: undefined
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      const newState = { ...state };
      newState.loginUser = action.payload ? action.payload: null;
      return newState;
    }
    default: {
      return state;
    }
  }
};
export default LoginReducer;
