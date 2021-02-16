import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TransactionHistory from '../../components/transactionHistory/transactionHistory';
import * as actionsHandler from '../../actions/transactionHistory/transactionHistoryActionHandler';

const mapStateToProps = state => ({
    transactionHistory: state.TransactionHistoryReducer.transactionHistory
});

const mapDispatchToProps = dispatch => ({ 
    transactionHistoryActionHandler : bindActionCreators(actionsHandler, dispatch)
});

const TransactionHistoryContatiner = connect(mapStateToProps, mapDispatchToProps)(TransactionHistory);
export default TransactionHistoryContatiner;
