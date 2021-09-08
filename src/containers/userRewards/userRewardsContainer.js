import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserRewards from '../../components/userRewards/userRewards';
import * as actionsHandler from '../../actions/userRewards/userRewardsActionHandler';
import * as routeActionHandler from '../../actions/routeActionHandler';

const mapStateToProps = state => ({
    userRewards: state.UserRewardsReducer.userRewards
});

const mapDispatchToProps = dispatch => ({ 
    userRewardsActionHandler : bindActionCreators(actionsHandler, dispatch),
    routeActionHandler:bindActionCreators(routeActionHandler, dispatch),
});

const UserRewardsContatiner = connect(mapStateToProps, mapDispatchToProps)(UserRewards);
export default UserRewardsContatiner;
