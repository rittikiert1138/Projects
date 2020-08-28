import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = ({ isAuthenticated, logout }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full h-16 bg-white shadow-md'>
      <div className='container mx-auto'>
        <ul className='flex float-right'>
          {!isAuthenticated && (
            <>
              <Link href='/'>
                <li className='cursor-pointer uppercase py-5 px-5 text-gray-900'>
                  สินค้า
                </li>
              </Link>
              <Link href='/login'>
                <li className='cursor-pointer uppercase py-5 pl-5 text-gray-900'>
                  เข้าสู่ระบบ
                </li>
              </Link>
            </>
          )}
          {isAuthenticated && (
            <>
              <Link href='/'>
                <li className='cursor-pointer uppercase py-5 px-5 text-gray-900'>
                  สินค้า
                </li>
              </Link>
              <li
                className='cursor-pointer uppercase py-5 px-5 text-black'
                onClick={logout}
              >
                ออกจากระบบ
              </li>
            </>
          )}
        </ul>
        {/* <div className='w-20 h-20 bg-red-500 absolute right-0'></div> */}
      </div>
    </nav>
  );
};

export default Navbar;
