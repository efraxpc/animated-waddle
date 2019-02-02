// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Home from './Home';

// Actions
import { loginUser } from '../../actions/coinsActions';

const mapStateToProps = ({ coins }) => ({
  coins
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    loginUser
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
