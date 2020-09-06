import React from 'react';
import { Link } from 'react-router-dom';

const Topnav = ({ logout }) => {
  return (
    <nav className='w-full h-16 bg-white shadow-md p-3 fixed'>
      <button
        className='float-right bg-red-600 h-10 rounded text-white mb-3 hover:bg-red-700 px-5'
        onClick={logout}
      >
        <i className='fas fa-sign-out-alt'></i> Logout
      </button>
    </nav>
  );
};

export default Topnav;
