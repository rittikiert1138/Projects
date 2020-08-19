import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import LoginPage from './auth/Login';
import RegisterPage from './auth/Register';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LoginPage} />
        <Route exact path='/' component={LoginPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
