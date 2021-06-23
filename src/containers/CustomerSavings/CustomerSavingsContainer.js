import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CustomerSavings from '../../components/CustomerSavings/CustomerSavings';
import * as actionsHandler from '../../actions/CustomerSavings/customerSavingsActionHandler';

const mapStateToProps = state => ({
    customerSavings: state.CustomerSavingsReducer.customerSavings
});

const mapDispatchToProps = dispatch => ({
    customerSavingsActionHandler: bindActionCreators(actionsHandler, dispatch)
});

const CustomerSavingsContatiner = connect(mapStateToProps, mapDispatchToProps)(CustomerSavings);
export default CustomerSavingsContatiner;
