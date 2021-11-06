import { 
  SET_ENGAGEMENTS, 
  SELECTED_ENGAGEMENT, 
  SET_PLAYER_SUMMARY ,
  SET_ENGAGEMENT_SUMMARY,
  SET_ENGAGEMENTS_RULE_AMOUNTS,
  SET_AMOUNT_TO_BE_PURCHASED
} from '../../constants/actionTypes';

const initialState = {
  engagements: null,
  selectedEngagement: null,
  engagementRuleAmounts:[],
  purchaseRuleValue: null
};
const RewardZoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ENGAGEMENTS: {
      const newState = { ...state };
      newState.engagements = action.payload ? action.payload : null;
      return newState;
    }
    case SET_ENGAGEMENT_SUMMARY: {
      const newState = { ...state };
      newState.engagementSummary = action.payload ? action.payload : null;
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
    case SET_ENGAGEMENTS_RULE_AMOUNTS:{
      const newState={...state};
      newState.engagementRuleAmounts=action.payload;
      return newState;
    }
    case SET_AMOUNT_TO_BE_PURCHASED:{
      // console.log("action : ",action.payload)
      const newState={...state};
      newState.purchaseRuleValue=action.payload ? action.payload : null;
      // console.log("Amount : ",newState.purchaseRuleValue.FormattedToBePurchasedToRuleAmount);
      // console.log("newState : "+newState.purchaseRuleValue)
      return newState;
    }
    default: {
      return state;
    }
  }
};
export default RewardZoneReducer;
