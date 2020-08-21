import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../redux/actions/authAction';

const DashboardPage = ({ auth: { isAuthenticated, loading }, logout }) => {
  if (!isAuthenticated) {
    return <Redirect to='/login' />;
  }
  return (
    <div>
      DashboardPage
      <button
        className='shadow bg-purple-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
        onClick={logout}
      >
        Sign In
      </button>
    </div>
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
