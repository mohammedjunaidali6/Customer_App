import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GameDetail from '../../components/gameDetails/gameDetails';
import * as actionsHandler from '../../actions/gameDetails/gameDetailsActionHandler';
import * as rewardZoneActionsHandler from '../../actions/rewardZone/rewardZoneActionHandler';

const mapStateToProps = state => ({
    gameDetail: state.GameDetailsReducer.gameDetail
});

const mapDispatchToProps = dispatch => ({ 
  gameDetailActionHandler: bindActionCreators(actionsHandler, dispatch),
  rewardZoneActionHandler: bindActionCreators(rewardZoneActionsHandler, dispatch)
});

const GameDetailsContatiner = connect(mapStateToProps, mapDispatchToProps)(GameDetail);
export default GameDetailsContatiner;
