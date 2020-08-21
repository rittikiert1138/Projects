import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../components/layouts/alert';
import { setAlert } from '../redux/actions/alertAction';
import { register } from '../redux/actions/authAction';

const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('password not match');
    } else {
      register({ username, email, password });
    }
  };

  const { username, email, password, password2 } = formData;

  return (
    <div style={{ marginTop: '100px' }}>
      <Alert />
      <form onSubmit={onSubmit}>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-start-5 col-end-9 mt-5'>
            <h1 className='text-4xl'>Register</h1>
            <label className='text-base text-uppercase'>Username</label>
            <input
              className='border-2 border-gray-800 rounded w-full py-2 px-2'
              type='text'
              name='username'
              value={username}
              onChange={onChange}
            />
          </div>
          <div className='col-start-5 col-end-9'>
            <label className='text-base'>Email</label>
            <input
              className='border-2 border-gray-800 rounded w-full py-2 px-2'
              type='text'
              name='email'
              value={email}
              onChange={onChange}
            />
          </div>
          <div className='col-start-5 col-end-9'>
            <label className='text-base'>Password</label>
            <input
              className='border-2 border-gray-800 rounded w-full py-2 px-2'
              type='password'
              name='password'
              value={password}
              onChange={onChange}
            />
          </div>
          <div className='col-start-5 col-end-9'>
            <label className='text-base'>Confirm Password</label>
            <input
              className='border-2 border-gray-800 rounded w-full py-2 px-2'
              type='password'
              name='password2'
              value={password2}
              onChange={onChange}
            />
          </div>
          <div className='col-start-5 col-end-9'>
            <button
              className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='submit'
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
