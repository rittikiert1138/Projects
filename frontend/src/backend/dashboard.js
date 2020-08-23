import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../components/layouts/Layout'
import { logout } from '../redux/actions/authAction';
import Sidenav from '../components/layouts/Sidenav'

const DashboardPage = ({ auth: { isAuthenticated, loading }, logout }) => {
  if (!isAuthenticated) {
    return <Redirect to='/backend/login' />;
  }
  return (
    <Layout>
      Dashboard
    </Layout>
  );
};

DashboardPage.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(DashboardPage);