import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RewardZone from '../../components/rewardZone/rewardZone';
import * as actions from '../../actions/rewardZone/rewardZoneAction';
import * as actionsHandler from '../../actions/rewardZone/rewardZoneActionHandler';
import * as routeActionsHandler from '../../actions/routeActionHandler';

const mapStateToProps = state => ({
  engagements: state.RewardZoneReducer.engagements,
  selectedEngagement: state.RewardZoneReducer.selectedEngagement,
  playerSummary: state.RewardZoneReducer.playerSummary,
  engagementRuleAmounts:state.RewardZoneReducer.engagementRuleAmounts,
  purchaseRuleValue:state.RewardZoneReducer.purchaseRuleValue,
  engagementSummary: state.RewardZoneReducer.engagementSummary
});

const mapDispatchToProps = dispatch => ({
  rewardZoneAction: bindActionCreators(actions, dispatch),
  rewardZoneActionHandler: bindActionCreators(actionsHandler, dispatch),
  routeActionHandler:bindActionCreators(routeActionsHandler,dispatch)
});

const RewardZoneContatiner = connect(mapStateToProps, mapDispatchToProps)(RewardZone);
export default RewardZoneContatiner;
