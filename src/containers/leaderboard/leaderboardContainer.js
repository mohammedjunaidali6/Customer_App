import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsHandler from '../../actions/leaderboard/leaderboardActionHandler';
import LeaderBoard from '../../components/leaderboard/leaderboard';

const mapStateToProps = state => ({
    leaderboard: state.LeaderBoardReducer.leaderboard,
    leaderboardOthersPlaying: state.LeaderBoardReducer.leaderboardOthersPlaying
});

const mapDispatchToProps = dispatch => ({ 
    leaderboardActionHandler : bindActionCreators(actionsHandler, dispatch)
});

const LeaderBoardContatiner = connect(mapStateToProps, mapDispatchToProps)(LeaderBoard);
export default LeaderBoardContatiner;
