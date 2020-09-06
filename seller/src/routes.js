import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute'

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUser } from './redux/actions/user'

//Components
import LoginPage from './views/auth/Login';
import RegisterPage from './views/auth/Register';
import ForgotPassword from './views/auth/ForgotPassword'
import Notfound from './views/Notfound'

import Dashboard from './views/Dashboard'
import ProductList from './views/product/Product.jsx'
import Profile from './views/Profile'

const Routes = () => {

    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path='/login' component={LoginPage} />
                    <Route exact path='/register' component={RegisterPage} />
                    <Route exact path='/forgot-password' component={ForgotPassword} />
                    <PrivateRoute exact path='/dashboard' component={Dashboard} />
                    <PrivateRoute exact path='/product-lists' component={ProductList} />
                    <PrivateRoute exact path='/seller-profile' component={Profile} />
                    <Route component={Notfound} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default Routes;
