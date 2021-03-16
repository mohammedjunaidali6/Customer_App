import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RewardZone from '../../components/rewardZone/rewardZone';
import * as actions from '../../actions/rewardZone/rewardZoneAction';
import * as actionsHandler from '../../actions/rewardZone/rewardZoneActionHandler';

const mapStateToProps = state => ({
  selectedReward: state.RewardZoneReducer.selectedReward
});

const mapDispatchToProps = dispatch => ({ 
  rewardZoneAction : bindActionCreators(actions, dispatch),
  rewardZoneActionHandler : bindActionCreators(actionsHandler, dispatch)
});

const RewardZoneContatiner = connect(mapStateToProps, mapDispatchToProps)(RewardZone);
export default RewardZoneContatiner;
