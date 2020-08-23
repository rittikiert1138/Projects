import React, { useState, Fragment } from 'react';
import { useForm } from "react-hook-form";
import { Redirect, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Alert from '../components/layouts/alert';
import { setAlert } from '../redux/actions/alertAction';
import { registerUser } from '../redux/actions/authAction';
import Logo from '../assets/images/logo.png'
import ButtonSuccess from '../components/buttons/Success'

const Register = ({ setAlert, registerUser, isAuthenticated, history }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    console.log(data)
    // await registerUser(data, history);
  }

  const { username, email, password, password2 } = formData;

  if (isAuthenticated) {
    return <Redirect to='/backend/dashboard' />;
  }

  return (
    <Fragment>
      <div className="w-full bg-gray-200 h-screen pt-48"  >
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="p-6 bg-white w-1/4 mx-auto shadow-xl">
            <img src={Logo} style={{ width: '100px' }} className="mx-auto my-4" />
            <Alert />
            <div className="inline-block w-full mb-3">
              <label>Username</label>
              <input className={`border w-full py-2 px-2 mt-2 focus:outline-none rounded-none 
              focus:border-${errors.username ? 'red' : 'blue'}-500 
              ${errors.username ? 'border-red-500' : ''}`}
                name='username'
                value={username}
                onChange={onChange}
                ref={register({ required: true })}
              />
              {errors.username && <span className="text-red-600">This field is required</span>}
            </div>
            <div className="inline-block w-full mb-3">
              <label>Email</label>
              <input className="border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500"
                name='email'
                value={email}
                onChange={onChange}
                ref={register({
                  required: 'This field is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address"
                  }
                })}
              />
              {errors.email && <span className="text-red-600">{errors.email.message}</span>}
            </div>
            <div className="inline-block w-full mb-3">
              <label>Password</label>
              <input className="border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500"
                type="text"
                name='password'
                value={password}
                onChange={onChange}
                ref={register({
                  required: "You must specify a password",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 8 characters"
                  }
                })}
              />
              {errors.password && <span className="text-red-600">{errors.password.message}</span>}
            </div>
            <div className="inline-block w-full mb-3">
              <label>Confirm Password</label>
              <input className="border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500"
                type="text"
                name='password2'
                value={password2}
                onChange={onChange}
                ref={register({
                  validate: (value) => value === watch('password') || 'Error matcg'
                })}
              />
              {errors.password2 && <span className="text-red-600">{errors.password2.message}</span>}
            </div>
            <div className="inline-block w-full mb-3">
              <input type="file" name="file" className="w-full" ref={register({
                required: "You must specify a password",
              })} />
              {errors.file && <span className="text-red-600">{errors.file.message}</span>}
            </div>
            <div className="inline-block w-full mb-3 mt-4">
              <ButtonSuccess inputType="submit" widthInput="w-full" >Register</ButtonSuccess>
            </div>
            <div className="inline-block w-full mb-3">
              <span> Already have an account ?  <Link to="/backend/login" className="text-blue-600" >Sign In</Link></span>
            </div>
          </div>
        </form>
      </div>
    </Fragment>

    // <div style={{ marginTop: '100px' }}>
    //   <Alert />
    //   <form onSubmit={onSubmit}>
    //     <div className='grid grid-cols-12 gap-4'>
    //       <div className='col-start-5 col-end-9 mt-5'>
    //         <h1 className='text-4xl'>Register</h1>
    //         <label className='text-base text-uppercase'>Username</label>
    //         <input
    //           className='border-2 border-gray-800 rounded w-full py-2 px-2'
    //           type='text'
    // name='username'
    // value={username}
    // onChange={onChange}
    //         />
    //       </div>
    //       <div className='col-start-5 col-end-9'>
    //         <label className='text-base'>Email</label>
    //         <input
    //           className='border-2 border-gray-800 rounded w-full py-2 px-2'
    //           type='text'
    //           name='email'
    //           value={email}
    //           onChange={onChange}
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
    //         <label className='text-base'>Confirm Password</label>
    //         <input
    //           className='border-2 border-gray-800 rounded w-full py-2 px-2'
    //           type='password'
    //           name='password2'
    //           value={password2}
    //           onChange={onChange}
    //         />
    //       </div>
    //       <div className='col-start-5 col-end-9'>
    //         <button
    //           className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
    //           type='submit'
    //         >
    //           Sign Up
    //         </button>
    //       </div>
    //     </div>
    //   </form>
    // </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, registerUser })(Register);
