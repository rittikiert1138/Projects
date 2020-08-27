import React from 'react';
import { connect } from 'react-redux'
import { useForm } from "react-hook-form";
import api from '../utils/api'
import Layout from '../components/layouts/Layout';
import { registerUser } from '../redux/actions/userAction'
import Alert from '../components/layouts/Alert'
import Router from 'next/router';

const Register = ({ registerUser, isAuthenticated }) => {

  const { handleSubmit, register, errors } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    registerUser(data, history)
  }

  if (isAuthenticated) {
    Router.push('/');
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className='w-4/5 m-auto mt-20'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-start-5 col-end-9 bg-white shadow-lg h-auto p-4'>
              <div className='text-center mb-5'>
                <h1 className='text-xl uppercase'>ลงทะเบียน</h1>
              </div>
              <Alert />
              <div className='mb-4 mt-4'>
                <label className='text-gray-600 uppercase'>ชื่อ</label>
                <input
                  className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded border-gray-500'
                  type='text'
                  name='fname'
                  ref={register}
                />
              </div>
              <div className='mb-4'>
                <label className='text-gray-600 uppercase'>นามสกุล</label>
                <input
                  className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded border-gray-500'
                  type='text'
                  name='lname'
                  ref={register}
                />
              </div>
              <div className='mb-4'>
                <label className='text-gray-600 uppercase'>อีเมล์</label>
                <input
                  className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded border-gray-500'
                  type='text'
                  name='email'
                  ref={register}
                />
              </div>
              <div className='mb-4'>
                <label className='text-gray-600 uppercase'>รหัสผ่าน</label>
                <input
                  className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded border-gray-500'
                  type='password'
                  name='password'
                  ref={register}
                />
              </div>
              <div className='mb-4'>
                <label className='text-gray-600 uppercase'>
                  ยืนยันรหัสผ่าน
              </label>
                <input
                  className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded border-gray-500'
                  type='password'
                  name='password2'
                  ref={register}
                />
              </div>
              <label className='mb-4 flex items-center'>
                <input type='checkbox' className='form-checkbox' />
                <span className='ml-2 text-gray-600'>
                  I AGREE TERMS AND CONDITIONS.
              </span>
              </label>
              <div>
                <button className='bg-teal-700 h-10 rounded text-white mb-3 hover:bg-teal-600 w-full' type="submit" >
                  ลงทะเบียน
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

export default connect(mapStateToProps, { registerUser })(Register);
