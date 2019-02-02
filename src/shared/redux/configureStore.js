// Dependencies
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'

// Root Reducer
import rootReducer from '../reducers';
export const history = createBrowserHistory()

export default function configureStore(initialState) {
  const middleware = [
    thunk
  ];
  const store = createStore(
    rootReducer(history), // root reducer with router state
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk
      ),
    ),
  )

  return store
}