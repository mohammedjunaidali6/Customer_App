import { SHOW_FIRSTDATA_ALL } from '../../constants/actionTypes';

const initialState = {
  firstRecord: null
};
const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FIRSTDATA_ALL: {
      const newState = { ...state };
      newState.firstRecord = (action.payload && action.payload['data']) ? action.payload['data']: null;
      return newState;
    }
    default: {
      return state;
    }
  }
};
export default firstReducer;
