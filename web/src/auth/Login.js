import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../components/layouts/alert';
import { setAlert } from '../redux/actions/alertAction';
import { login } from '../redux/actions/authAction';

const Register = ({ login, isAuthenticated }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    login(data)
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='w-full bg-gray-200 h-screen pt-48'>
        <div className='p-6 bg-gradient-to-t from-purple-400 to-blue-400 w-1/4 mx-auto shadow-xl rounded'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='text-center mt-5 mb-3'>
              <h3 className='text-3xl text-white'>Login</h3>
            </div>
            <Alert />
            <div className='inline-block w-full mb-3 mt-3'>
              <label className='text-white'>Email</label>
              <input
                className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded'
                type='email'
                name='email'
                ref={register}
              />
            </div>
            <div className='inline-block w-full mb-3'>
              <label className='text-white'>Password</label>
              <input
                className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded'
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
              <span className='ml-2 text-white'>I want to remember you ?</span>
            </label>
            <div className='inline-block w-full mb-3'>
              <button
                className='w-full bg-red-600 h-10 rounded text-white mb-3 hover:bg-red-700 focus:outline-none'
                type='submit'
              >
                Login
              </button>
              <button className='w-full bg-gray-600 h-10 rounded text-white mb-3 hover:bg-gray-700 focus:outline-none'>
                Cancel
              </button>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='col-span-2 text-white'>
                <hr />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-3'>
              <div className='col-span-1 text-white'>Forgot Password ?</div>
              <div className='col-span-1 text-right text-white'>
                <Link to='/register'>Register Now</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, login })(Register);
