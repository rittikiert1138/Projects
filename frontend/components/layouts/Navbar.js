import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = ({ isAuthenticated, logout, carts }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full h-16 bg-white shadow-md fixed'>
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
              <Link href='/cart'>
                <li className='cursor-pointer uppercase py-5 px-5 text-gray-900'>
                  <i className="fas fa-shopping-cart" style={{ fontSize: '20px' }}></i>
                  {carts.length > 0 && <span className="bg-red-400 px-2 -mt-2">{carts.length}</span>}

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
      </div>
    </nav>
  );
};

export default Navbar;