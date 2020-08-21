import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

//Components
import LoginPage from './auth/Login';
import RegisterPage from './auth/Register';
import DashboardPage from './backend/dashboard';

import { loadUser } from './redux/actions/authAction';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './utils/privateRoute';

const Routes = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/dashboard' component={DashboardPage} />
          <PrivateRoute exact path='/dashboard' component={DashboardPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Routes;
