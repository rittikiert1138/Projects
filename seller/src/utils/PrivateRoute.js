import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({
    component: Component,
    user: { isAuth, loading },
    ...rest
}) => (
        <Route
            {...rest}
            render={(props) =>
                loading ? (
                    <p>Loading...5555</p>
                ) : isAuth ? (
                    <Component {...props} />
                ) : (
                            <Redirect to='/login' />
                        )
            }
        />
    );

const mapStateToProps = (state) => ({
    user: state.user,
});

export default connect(mapStateToProps)(PrivateRoute);
