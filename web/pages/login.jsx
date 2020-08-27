import React from 'react';
import Layout from '../components/layouts/Layout';

const Login = () => {
  return (
    <Layout>
      <div className='w-4/5 m-auto mt-32'>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-start-5 col-end-9 bg-white shadow-lg h-auto p-4'>
            <div className='text-center mb-5'>
              <h1 className='text-xl'>LOGIN</h1>
            </div>
            <div className='mb-4'>
              <label className='text-gray-600 uppercase'>Username</label>
              <input
                className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded border-gray-500'
                type='text'
                name='username'
              />
            </div>
            <div className='mb-4'>
              <label className='text-gray-600 uppercase'>Password</label>
              <input
                className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded border-gray-500'
                type='password'
                name='password'
              />
            </div>
            <label className='mb-4 flex items-center'>
              <input
                type='checkbox'
                className='form-checkbox'
                name='remeber'
                id='remeber'
              />
              <span className='ml-2 text-gray-600 uppercase'>
                I want to remember you ?
              </span>
            </label>
            <div>
              <button className='bg-teal-700 h-10 rounded text-white hover:bg-teal-600 w-full'>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
