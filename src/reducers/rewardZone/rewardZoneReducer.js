import { 
  SET_ENGAGEMENTS, 
  SELECTED_ENGAGEMENT, 
  SET_PLAYER_SUMMARY ,
  SET_ENGAGEMENTS_PLAYERS_AND_AMOUNTS,
  SET_ENGAGEMENTS_RULE_AMOUNTS
} from '../../constants/actionTypes';

const initialState = {
  engagements: null,
  selectedEngagement: null,
  engagementPlayersAndAmounts:null,
  engagementRuleAmounts:[],
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
    case SET_ENGAGEMENTS_PLAYERS_AND_AMOUNTS: {
      const newState = { ...state };
      newState.engagementPlayersAndAmounts = action.payload;
      return newState;
    }
    case SET_ENGAGEMENTS_RULE_AMOUNTS:{
      const newState={...state};
      newState.engagementRuleAmounts=action.payload;
      return newState;
    }
    default: {
      return state;
    }
  }
};
export default RewardZoneReducer;
