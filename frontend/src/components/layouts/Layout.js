import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../../redux/actions/authAction';
import Sidenav from '../partials/Sidenav';
import Topnav from '../partials/Topnav';

//css
import '../../assets/css/main.css';

const Layout = ({ auth: { isAuthenticated }, logout, children }) => {
  if (!isAuthenticated) {
    return <Redirect to='/login' />;
  }
  return (
    <Fragment>
      {/*Topnav*/}
      <Topnav logout={logout} />
      {/*End Topnav*/}

      {/*Sidenav*/}
      <Sidenav />
      {/*End Sidenav*/}

      {/*Content*/}
      <div className='ml-64 px-4 pt-20 pb-4 '>{children}</div>
      {/*End Content*/}
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
