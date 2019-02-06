import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Beforeunload from 'react-beforeunload'
import App from './components/App';
import Coins from './components/Coins';
import Home from './components/Home';
import Login from './components/Login';
import Groups from './components/Groups';
import Licences from './components/Licences';
import Error404 from './components/Error/404';


const AppRoutes = () => (
  <Beforeunload onBeforeunload={e => {
    console.log('on before unload');
  }}>
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/coins" component={Coins} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/groups" component={Groups} exact />
      <Route path="/licences" component={Licences} exact />
      <Route component={Error404} />
    </Switch>
  </App>
  </Beforeunload>
);

export default AppRoutes;
