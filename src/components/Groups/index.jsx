import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Groups from './Groups';

//import { handleClickOpen } from '../../actions/coinsActions';


const mapStateToProps = ({ coins }) => ({
  coins
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    //handleClickOpen, 
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Groups);
