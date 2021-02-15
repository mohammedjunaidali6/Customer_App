import { GET_GAME_DETAIL } from '../../constants/actionTypes';

const initialState = {
  gameDetail: null
};
const GameDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAME_DETAIL: {
      const newState = { ...state };
      newState.gameDetail = action.payload ? action.payload: null;
      return newState;
    }
    default: {
      return state;
    }
  }
};
export default GameDetailsReducer;
