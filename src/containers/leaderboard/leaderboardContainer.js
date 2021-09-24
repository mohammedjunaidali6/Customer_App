import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeaderBoard from '../../components/leaderboard/leaderboard';
import * as actionsHandler from '../../actions/leaderboard/leaderboardActionHandler';
import * as routeActionsHandler from '../../actions/routeActionHandler';

const mapStateToProps = state => ({
    leaderboard: state.LeaderBoardReducer.leaderboard,
    leaderboardOthersPlaying: state.LeaderBoardReducer.leaderboardOthersPlaying
});

const mapDispatchToProps = dispatch => ({ 
    leaderboardActionHandler : bindActionCreators(actionsHandler, dispatch),
    routeActionHandler : bindActionCreators(routeActionsHandler, dispatch),
});

const LeaderBoardContatiner = connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);
export default LeaderBoardContatiner;
