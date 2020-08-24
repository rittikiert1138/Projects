import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <nav className='w-full h-16 bg-gradient-to-r from-teal-400 to-blue-500'></nav>
      <div className='w-64 bg-orange-100 absolute h-screen top-0 left-0'>
        <div className='h-16 bg-gradient-to-l from-teal-400 to-blue-500'></div>
        <div className='p-3'>
          <ul>
            <Link to='/'>
              <li className='py-1 mb-2 px-3 hover:bg-blue-200 rounded'>
                <i className='fas fa-location-arrow'></i>
                <span className='ml-3'>Dashboard</span>
              </li>
            </Link>
            <Link to='/'>
              <li className='py-1 mb-2 px-3 hover:bg-blue-200 rounded'>
                <i className='fas fa-location-arrow'></i>
                <span className='ml-3'>Product</span>
              </li>
            </Link>
            <li className='py-1 mb-2 px-3 hover:bg-blue-200 rounded'>
              <a href='#' onClick={() => setToggle(!toggle)}>
                <i class='fas fa-location-arrow'></i>{' '}
                <span className='ml-2'>News</span>
                {toggle ? (
                  <i class='fas fa-angle-up float-right mt-1'></i>
                ) : (
                  <i class='fas fa-angle-down float-right mt-1'></i>
                )}
              </a>
              {toggle && (
                <ul className='ml-5'>
                  <Link to='/'>
                    <li className='ml-2 my-2 text-gray-600 hover:text-gray-900'>
                      Dashboard
                    </li>
                  </Link>
                  <Link to='/'>
                    <li className='ml-2 my-2 text-gray-600 hover:text-gray-900'>
                      Dashboard
                    </li>
                  </Link>
                  <Link to='/'>
                    <li className='ml-2 my-2 text-gray-600 hover:text-gray-900'>
                      Dashboard
                    </li>
                  </Link>
                </ul>
              )}
            </li>
            <Link to='/'>
              <li className='py-1 mb-2 px-3 hover:bg-blue-200 rounded'>
                <i class='fas fa-th-large'></i>
                <span className='ml-3'>Blocks</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </Fragment>
    // <BackendLayout>
    //   <Grid item xs={12} md={8} lg={8}>
    //     <div className='px-4 pt-4 pb-4 bg-white shadow-lg'>
    //       <div className='mb-4'>
    //         <TextField
    //           id='standard-basic'
    //           label='Standard'
    //           name='pdname'
    //           fullWidth
    //           className='mb-5'
    //         />
    //       </div>

    //       <div className='mb-4'>
    //         <TextField
    //           id='standard-basic'
    //           label='Standard'
    //           name='pdname'
    //           fullWidth
    //           className='mb-5'
    //         />
    //       </div>
    //     </div>
    //   </Grid>
    // </BackendLayout>
  );
};

export default DashboardPage;
