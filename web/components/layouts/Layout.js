import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Kanit:wght@200;400;600&display=swap'
          rel='stylesheet'
        />
        <title>Shop</title>
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
