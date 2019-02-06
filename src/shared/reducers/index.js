// Dependencies
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form';

// Components Reducers
import coins from '../../reducers/coinsReducer';
import users from '../../reducers/usersReducer';

// Shared Reducers
import device from './deviceReducer';


export default (history) => combineReducers({
  router: connectRouter(history),
  coins,
  device,
  users,
  form: formReducer
})
