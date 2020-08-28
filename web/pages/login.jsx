import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Layout from '../components/layouts/Layout';
import { loginUser } from '../redux/actions/userAction';
import { setAlert } from '../redux/actions/alertAction';
import Alert from '../components/layouts/Alert';
import Router from 'next/router';

const Login = ({ loginUser, isAuthenticated }) => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    loginUser(data);
  };

  if (isAuthenticated) {
    Router.push('/');
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-1/4 h-auto mx-auto mt-40'>
          <div className='text-center mb-4'>
            <h1 className='text-xl mb-3'>เข้าสู่ระบบ</h1>
            <span>กรอกอีเมลล์และรหัสผ่าน</span>
          </div>
          <Alert />
          <div className='my-4'>
            <input
              type='text'
              className='w-full border p-3 focus:outline-none'
              placeholder='Email'
              name='email'
              ref={register({
                required: 'This fiels is required !',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <small className='text-red-600'>{errors.email.message}</small>
            )}
          </div>
          <div className='mb-4'>
            <input
              type='password'
              className='w-full border p-3 focus:outline-none'
              placeholder='Password'
              name='password'
              ref={register({ required: 'This fiels is required !' })}
            />
            {errors.password && (
              <small className='text-red-600'>{errors.password.message}</small>
            )}
          </div>
          <div className='mb-4'>
            <button
              className='w-100 bg-black text-white w-full py-3 focus:outline-none'
              type='submit'
            >
              เข้าสู่ระบบ
            </button>
          </div>
          <div className='text-center mb-4'>
            Don't have an account ?<Link href='/register'> สมัครสมาชิก</Link>
          </div>
          <div className='text-center'>
            <button className='bg-black text-white mx-1 h-12 w-12'>
              <i class='fab fa-facebook-f text-xl'></i>
            </button>
            <button className='bg-black text-white mx-1 h-12 w-12'>
              <i class='fab fa-line text-xl'></i>
            </button>
            <button className='bg-black text-white mx-1 h-12 w-12'>
              <i class='fab fa-instagram text-xl'></i>
            </button>
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
