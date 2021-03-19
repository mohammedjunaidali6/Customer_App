import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Status from '../../components/status/status.jsx';
import * as action from '../../actions/Status/statusActionHandler';


const mapStateToProps = (state) =>({
    statusContent : state.StatusReducer.statusContent
});

const mapDispatchToProps = (dispatch) =>({
    statusAction : bindActionCreators(dispatch, action)
});

const StatusContainer = connect (mapStateToProps, mapDispatchToProps)(Status);
export default StatusContainer;