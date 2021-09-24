import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TopCustomerSavings from '../../components/leaderboard/topcustomersavings';
import * as actionsHandler from '../../actions/CustomerSavings/topCustomerSavingsActionHandler';
import * as routeActionHandler from '../../actions/routeActionHandler';

const mapStateToProps = state => ({
    topCustomersSavings:state.LeaderBoardReducer.topCustomersSavings,
});

const mapDispatchToProps = dispatch => ({
    topcustomerSavingsActionHandler: bindActionCreators(actionsHandler, dispatch),
    routeActionHandler:bindActionCreators(routeActionHandler, dispatch),
});

const TopCustomerSavingsContatiner = connect(mapStateToProps, mapDispatchToProps)(TopCustomerSavings);
export default TopCustomerSavingsContatiner;
