// Dependencies
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Map from './Map';

// Actions
import { fetchCoins } from '../../actions/coinsActions';

const mapStateToProps = ({ coins }) => ({
  coins
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchCoins
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
