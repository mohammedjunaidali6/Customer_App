import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../components/loading/loading';
import * as actions from '../actions/rewardZone/rewardZoneActionHandler';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({ 
  rewardZoneActionHandler : bindActionCreators(actions, dispatch)
});

const LoadingContainer = connect(mapStateToProps, mapDispatchToProps)(Loading);
export default LoadingContainer;
