import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserRewards from '../../components/userRewards/userRewards';
import * as actionsHandler from '../../actions/userRewards/userRewardsActionHandler';

const mapStateToProps = state => ({
    userRewards: state.UserRewardsReducer.userRewards
});

const mapDispatchToProps = dispatch => ({ 
    userRewardsActionHandler : bindActionCreators(actionsHandler, dispatch)
});

const UserRewardsContatiner = connect(mapStateToProps, mapDispatchToProps)(UserRewards);
export default UserRewardsContatiner;
