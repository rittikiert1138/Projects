import React, { Fragment, useState } from 'react';
import { useForm } from "react-hook-form";
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../components/layouts/alert';
import { setAlert } from '../redux/actions/alertAction';
import { login } from '../redux/actions/authAction';
import Logo from '../assets/images/logo.png'
import ButtonSuccess from '../components/buttons/Success'

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
      <div className="w-full bg-gray-200 h-screen pt-48"  >
        <div className="p-6 bg-white w-1/4 mx-auto shadow-xl">
          <img src={Logo} style={{ width: '100px' }} className="mx-auto my-4" />
          <Alert />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inline-block w-full mb-3">
              <label>Email</label>
              <input className="border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500"
                type='text'
                name='email'
                value={email}
                onChange={onChange}
                ref={register}
              />
            </div>
            <div className="inline-block w-full mb-3">
              <label>Password</label>
              <input className="border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500"
                type='password'
                name='password'
                value={password}
                onChange={onChange}
                ref={register}
              />
            </div>
            <label className="mb-4 flex items-center">
              <input type="checkbox" className="form-checkbox" name="remeber" id="remeber" />
              <span className="ml-2">I want to remember you ?</span>
            </label>
            <div className="inline-block w-full mb-3 mt-4">
              <ButtonSuccess inputType="submit" widthInput="w-full" >Login</ButtonSuccess>
            </div>
            <div className="inline-block w-full mb-3">
              <span> Don't have an account ?  <Link to="/backend/register" className="text-blue-600" >Sign Up</Link></span>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
    // <div style={{ marginTop: '200px' }}>
    //   <Alert />
    //   <form onSubmit={onSubmit}>
    //     <div className='grid grid-cols-12 gap-4'>
    //       <div className='col-start-5 col-end-9 mt-5'>
    //         <h1 className='text-4xl'>Login</h1>
    //       </div>
    //       <div className='col-start-5 col-end-9'>
    //         <label className='text-base'>Email</label>
    //         <input
    //           className='border-2 border-gray-800 rounded w-full py-2 px-2'
    // type='text'
    // name='email'
    // value={email}
    // onChange={onChange}
    //         />
    //       </div>
    //       <div className='col-start-5 col-end-9'>
    //         <label className='text-base'>Password</label>
    //         <input
    //           className='border-2 border-gray-800 rounded w-full py-2 px-2'
    //           type='password'
    //           name='password'
    //           value={password}
    //           onChange={onChange}
    //         />
    //       </div>
    //       <div className='col-start-5 col-end-9'>
    //         <button
    //           className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
    //           type='submit'
    //         >
    //           Sign In
    //         </button>
    //       </div>
    //     </div>
    //   </form>
    // </div>
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
