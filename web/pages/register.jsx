import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import Layout from '../components/layouts/Layout';
import { registerUser } from '../redux/actions/userAction';
import Alert from '../components/layouts/Alert';
import Router from 'next/router';

const Register = ({ registerUser, isAuthenticated, alertMsg }) => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    registerUser(data, history);
  };

  if (isAuthenticated) {
    Router.push('/');
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-1/4 h-auto mx-auto mt-40'>
          <div className='text-center mb-4'>
            <h1 className='text-xl mb-3'>สมัครสมาชิก</h1>
            <span>กรุณากรอกข้อมูลด้านล่าง</span>
          </div>
          <Alert />
          <div className='my-4'>
            <input
              type='text'
              className='w-full border p-3 focus:outline-none'
              placeholder='ชื่อ'
              name='fname'
              ref={register({ required: 'This fiels is required !' })}
            />
            {errors.fname && (
              <small className='text-red-600'>{errors.fname.message}</small>
            )}
          </div>
          <div className='mb-4'>
            <input
              type='text'
              className='w-full border p-3 focus:outline-none'
              placeholder='นามสกุล'
              name='lname'
              ref={register({ required: 'This fiels is required !' })}
            />
            {errors.lname && (
              <small className='text-red-600'>{errors.lname.message}</small>
            )}
          </div>
          <div className='mb-4'>
            <input
              type='email'
              className='w-full border p-3 focus:outline-none'
              placeholder='อีเมลล์'
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
              placeholder='รหัสผ่าน'
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
              ลงทะเบียน
            </button>
          </div>
          <div className='text-center mb-4'>
            Do have an account ?<Link href='/login'> เข้าสู่ระบบ</Link>
          </div>
        </div>
      </form>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
});

export default connect(mapStateToProps, { registerUser })(Register);
