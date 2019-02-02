// Dependencies
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form';

// Components Reducers
import coins from '../../reducers/coinsReducer';

// Shared Reducers
import device from './deviceReducer';


export default (history) => combineReducers({
  router: connectRouter(history),
  coins,
  device,
  form: formReducer
})
