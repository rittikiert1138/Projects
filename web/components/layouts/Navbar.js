import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='w-full h-16 bg-teal-700'>
      <div className='w-4/5 m-auto'>
        <ul className='flex float-right'>
          <Link href='/login'>
            <li className='cursor-pointer uppercase py-5 px-5 text-white'>
              Login
            </li>
          </Link>
          <Link href='/register'>
            <li className='cursor-pointer uppercase py-5 px-5 text-white'>
              Register
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
