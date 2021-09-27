import {SET_TOURNAMENTS } from '../../constants/actionTypes';

const initialState = {
  tournaments:[],
};
const TournamentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOURNAMENTS: {
      const newState = { ...state };
      newState.tournaments = action.payload ? action.payload: null;
      return newState;
    }
    default: {
      return state;
    }
  }
};
export default TournamentsReducer;
