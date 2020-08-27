import React from 'react';
import Link from 'next/link';

const Navbar = ({ isAuthenticated, logout }) => {
  return (
    <nav className='w-full h-16 bg-teal-700'>
      <div className='w-4/5 m-auto'>
        <ul className='flex float-right'>
          {!isAuthenticated && (
            <>
              <Link href='/login'>
                <li className='cursor-pointer uppercase py-5 px-5 text-white'>
                  เข้าสู่ระบบ
            </li>
              </Link>
              <Link href='/register'>
                <li className='cursor-pointer uppercase py-5 px-5 text-white'>
                  ลงทะเบียน
            </li>
              </Link>
            </>
          )}
          {isAuthenticated && (
            <li className='cursor-pointer uppercase py-5 px-5 text-white' onClick={logout} >
              ออกจากระบบ
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
