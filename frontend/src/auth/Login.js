import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../components/layouts/alert';
import { setAlert } from '../redux/actions/alertAction';
import { login } from '../redux/actions/authAction';

const Register = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const { email, password } = formData;

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div style={{ marginTop: '200px' }}>
      <Alert />
      <form onSubmit={onSubmit}>
        <div className='grid grid-cols-12 gap-4'>
          <div className='col-start-5 col-end-9 mt-5'>
            <h1 className='text-4xl'>Login</h1>
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
            <button
              className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='submit'
            >
              Sign In
            </button>
          </div>
        </div>
      </form>
    </div>
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
