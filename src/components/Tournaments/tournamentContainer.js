import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tournaments from './tournaments';
import * as actionsHandler from './tournamentActionHandler';
import * as routeActionHandler from '../../actions/routeActionHandler'
import * as rewardZoneActionHandler from '../../actions/rewardZone/rewardZoneActionHandler';

const mapStateToProps = state => ({
    tournaments: state.TournamentsReducer.tournaments
});

const mapDispatchToProps = dispatch => ({ 
  tournamentctionHandler: bindActionCreators(actionsHandler, dispatch),
  routeActionHandler: bindActionCreators(routeActionHandler, dispatch),
  rewardZoneActionHandler: bindActionCreators(rewardZoneActionHandler, dispatch),
});

const TournamentsContainer = connect(mapStateToProps, mapDispatchToProps)(Tournaments);
export default TournamentsContainer;
