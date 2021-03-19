import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../../components/login/login.jsx';
import * as actions from '../../actions/login/loginActionHandler';

const mapStateToProps = state => ({
  loginUser: state.LoginReducer.loginUser
});

const mapDispatchToProps = dispatch => ({ 
  loginAction : bindActionCreators(actions, dispatch)
});

const LoginContatiner = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContatiner;
