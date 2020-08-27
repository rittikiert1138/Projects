import React from 'react';
import { connect } from 'react-redux'
import { useForm } from "react-hook-form";
import Layout from '../components/layouts/Layout';
import { loginUser } from '../redux/actions/userAction'
import { setAlert } from '../redux/actions/alertAction'
import Alert from '../components/layouts/Alert'
import Router from 'next/router';

const Login = ({ loginUser, isAuthenticated }) => {

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    loginUser(data)
  }

  if (isAuthenticated) {
    Router.push('/');
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-4/5 m-auto mt-32'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-start-5 col-end-9 bg-white shadow-lg h-auto p-4'>
              <div className='text-center mb-5'>
                <h1 className='text-xl'>LOGIN</h1>
              </div>
              <Alert />
              <div className='mb-4 mt-4'>
                <label className='text-gray-600 uppercase'>Username</label>
                <input
                  className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded border-gray-500'
                  type='email'
                  name='email'
                  ref={register}
                />
              </div>
              <div className='mb-4'>
                <label className='text-gray-600 uppercase'>Password</label>
                <input
                  className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded border-gray-500'
                  type='password'
                  name='password'
                  ref={register}
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
                <button className='bg-teal-700 h-10 rounded text-white hover:bg-teal-600 w-full' type="submit">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, loginUser })(Login);
