import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import history from './utils/history';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

//Components
import LoginPage from './auth/Login';
import RegisterPage from './auth/Register';
import DashboardPage from './backend/dashboard';
//Product
import ListProduct from './backend/product/ListProduct';
import CreateProduct from './backend/product/CreateProduct';
import EditProduct from './backend/product/EditProduct';

//Room
import ListRoom from './backend/room/list';
import CreateRoom from './backend/room/create';

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
      <Router history={history}>
        <Switch>
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/dashboard' component={DashboardPage} />
          <PrivateRoute
            exact
            path='/backend/dashboard'
            component={DashboardPage}
          />
          <PrivateRoute exact path='/product' component={ListProduct} />
          <PrivateRoute
            exact
            path='/product/create'
            component={CreateProduct}
          />
          <PrivateRoute
            exact
            path='/product/edit/:id'
            component={EditProduct}
          />

          <PrivateRoute exact path='/room' component={ListRoom} />
          <PrivateRoute exact path='/room/create' component={CreateRoom} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Routes;
