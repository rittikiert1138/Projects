import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { loadUser, logout } from '../../redux/actions/userAction';

const Layout = ({ children, isAuthenticated, loadUser, logout }) => {
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <>
      <Head>
        <title>Shop</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Kanit:wght@200;400;600&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
        />
      </Head>
      <Navbar isAuthenticated={isAuthenticated} logout={logout} />

      {children}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
});

export default connect(mapStateToProps, { loadUser, logout })(Layout);
