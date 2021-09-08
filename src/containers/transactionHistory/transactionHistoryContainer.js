import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TransactionHistory from '../../components/transactionHistory/transactionHistory';
import * as actionsHandler from '../../actions/transactionHistory/transactionHistoryActionHandler';
import * as routeActionHandler from '../../actions/routeActionHandler';

const mapStateToProps = state => ({
    transactionHistory: state.TransactionHistoryReducer.transactionHistory
});

const mapDispatchToProps = dispatch => ({ 
    transactionHistoryActionHandler : bindActionCreators(actionsHandler, dispatch),
    routeActionHandler:bindActionCreators(routeActionHandler, dispatch),
});

const TransactionHistoryContatiner = connect(mapStateToProps, mapDispatchToProps)(TransactionHistory);
export default TransactionHistoryContatiner;
