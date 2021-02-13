import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GameDetail from '../../components/gameDetails/gameDetails';
import * as actionsHandler from '../../actions/gameDetails/gameDetailsActionHandler';

const mapStateToProps = state => ({
    gameDetail: state.GameDetailsReducer.gameDetail
});

const mapDispatchToProps = dispatch => ({ 
  rewardZoneActionHandler : bindActionCreators(actionsHandler, dispatch)
});

const GameDetailsContatiner = connect(mapStateToProps, mapDispatchToProps)(GameDetail);
export default GameDetailsContatiner;
