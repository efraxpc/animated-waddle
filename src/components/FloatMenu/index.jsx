// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import FloatMenu from './FloatMenu';

// Actions
import { loginUser } from '../../actions/usersActions';

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
)(FloatMenu);
