import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Landing from '../components/landing/landing';
import * as actions from '../actions/landingActionHandler';
// import * as rewardZoneAction from '../actions/rewardZone/rewardZoneActionHandler';

const mapStateToProps = state => ({
  customerDetails:state.LandingReducer.customerDetails,
});

const mapDispatchToProps = dispatch => ({ 
  landingActionHandler : bindActionCreators(actions, dispatch),
  // rewardZoneActionHandler:bindActionCreators(rewardZoneAction,dispatch)
});

const LandingContainer = connect(mapStateToProps, mapDispatchToProps)(Landing);
export default LandingContainer;
