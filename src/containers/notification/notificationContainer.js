import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Notification from '../../components/notification/notification';
import * as action from '../../actions/Notification/notificationActionHandler';


const mapStateToProps = state =>({
    notificationLists: state.notificationReducer.notificationLists
});

const mapDispatchToProps = dispatch => ({
    notificationAction: bindActionCreators(action,dispatch)
});

const NotificationContainer = connect(mapDispatchToProps, mapDispatchToProps)(Notification);
export default NotificationContainer;


