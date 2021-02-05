import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from '../../components/home/home.jsx';
import * as actions from '../../actions/home/homeActionHandler';

const mapStateToProps = state => ({
  allUsers: state.HomeReducer.allUsers
});

const mapDispatchToProps = dispatch => ({ 
  homeAction : bindActionCreators(actions, dispatch)
});

const HomeContatiner = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContatiner;
