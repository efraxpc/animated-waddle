/* eslint react/jsx-filename-extension: "off" */
import React from 'react';
import { render, ReactDOM } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './shared/redux/configureStore.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

// Routes
import AppRoutes from './routes';

// Configuring Redux Store
const store = configureStore(window.initialState);

// DOM
const rootElement = document.getElementById('root');

if (module.hot) {
  module.hot.accept(AppRoutes, () => {
    const NextApp = require(AppRoutes).default
    ReactDOM.render(
      <NextApp />,
      rootElement
    )
  })
}

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <> 
      <AppRoutes />
      </>
    </ConnectedRouter>
  </Provider>,
  rootElement
)

