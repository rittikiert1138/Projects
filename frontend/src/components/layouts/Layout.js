import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/authAction';
import Topnav from '../layouts/Topnav'
import Sidenav from '../layouts/Sidenav'

import '../../assets/css/main.css'

const Layout = ({ auth: { isAuthenticated }, logout, children }) => {
    if (!isAuthenticated) {
        return <Redirect to='/backend/login' />;
    }
    return (
        <Fragment>
            <Topnav logout={logout} />
            <div className="grid grid-cols-12">
                <div className="bg-gradient-to-t from-teal-400 to-blue-500 w-1/6 absolute h-screen top-0 left-0">
                    <div className="h-16 mb-4 border-b"></div>
                    <Sidenav />
                </div>
                <div className="col-start-3 col-end-13 mb-5">
                    <div className="p-4">
                        {children}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

Layout.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Layout);