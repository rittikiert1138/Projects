import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  return (
    <div className='w-64 bg-gradient-to-t from-purple-400 to-blue-400 h-screen top-0 left-0 fixed'>
      <div className='h-16 text-center text-white border-b pt-1'>
        <h1 className='text-4xl'>LOGO</h1>
      </div>
      <div>
        <ul>
          <Link to='/block'>
            <li className='text-white py-3 px-4 hover:bg-blue-300 hover:bg-opacity-50'>
              <i class='fas fa-th-large'></i>
              <span className='uppercase ml-4'>Block</span>
            </li>
          </Link>
          <Link to='/button'>
            <li className='text-white py-3 px-4 hover:bg-blue-300 hover:bg-opacity-50'>
              <i class='fas fa-th'></i>
              <span className='uppercase ml-4'>Button</span>
            </li>
          </Link>
          <Link to='/input'>
            <li className='text-white py-3 px-4 hover:bg-blue-300 hover:bg-opacity-50'>
              <i class='fas fa-scroll'></i>
              <span className='uppercase ml-4'>Input</span>
            </li>
          </Link>
          <Link to='/table'>
            <li className='text-white py-3 px-4 hover:bg-blue-300 hover:bg-opacity-50'>
              <i class='fas fa-table'></i>
              <span className='uppercase ml-4'>Table</span>
            </li>
          </Link>
          <Link to='/alert'>
            <li className='text-white py-3 px-4 hover:bg-blue-300 hover:bg-opacity-50'>
              <i class='fas fa-bell'></i>
              <span className='uppercase ml-4'>Alert</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
