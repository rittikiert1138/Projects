import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../components/layouts/alert';
import { setAlert } from '../redux/actions/alertAction';
import { login } from '../redux/actions/authAction';
import Logo from '../assets/images/logo.png';
import ButtonSuccess from '../components/buttons/Success';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Register = ({ login, isAuthenticated }) => {
  const { register, handleSubmit, errors } = useForm();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (data, e) => {
    e.preventDefault();
    login(email, password);
  };

  const { email, password } = formData;

  if (isAuthenticated) {
    return <Redirect to='/backend/dashboard' />;
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
                type='text'
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
                className='w-full bg-red-600 h-10 rounded text-white mb-3 hover:bg-red-700'
                type='submit'
              >
                Login
              </button>
              <button className='w-full bg-gray-600 h-10 rounded text-white mb-3 hover:bg-gray-700'>
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
      {/* <div className='w-full bg-gray-200 h-screen pt-48'>
        <div className='p-6 bg-white w-1/4 mx-auto shadow-xl'>
          <Avatar
            style={{
              margin: 'auto',
              backgroundColor: '#ffd700',
              margin: '10px auto 20px auto',
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Alert />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='inline-block w-full mb-3 mt-3'>
              <label>Email</label>
              <input
                className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500'
                type='text'
                name='email'
                value={email}
                onChange={onChange}
                ref={register}
              />
            </div>
            <div className='inline-block w-full mb-3'>
              <label>Password</label>
              <input
                className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500'
                type='password'
                name='password'
                value={password}
                onChange={onChange}
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
              <span className='ml-2'>I want to remember you ?</span>
            </label>
            <div className='inline-block w-full mb-3 mt-4'>
              <ButtonSuccess inputType='submit' widthInput='w-full'>
                Login
              </ButtonSuccess>
            </div>
            <div className='inline-block w-full mb-3'>
              <span>
                {' '}
                Don't have an account ?{' '}
                <Link to='/backend/register' className='text-blue-600'>
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div> */}
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
