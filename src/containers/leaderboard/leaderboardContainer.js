import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionsHandler from '../../actions/leaderboard/leaderboardActionHandler';
import TopCustomerSavings from '../../components/leaderboard/topcustomersavings';

const mapStateToProps = state => ({
    topCustomersSavings:state.LeaderBoardReducer.topCustomersSavings,
    leaderboard: state.LeaderBoardReducer.leaderboard,
    leaderboardOthersPlaying: state.LeaderBoardReducer.leaderboardOthersPlaying
});

const mapDispatchToProps = dispatch => ({ 
    leaderboardActionHandler : bindActionCreators(actionsHandler, dispatch)
});

const LeaderBoardContatiner = connect(mapStateToProps, mapDispatchToProps)(TopCustomerSavings);
export default LeaderBoardContatiner;
