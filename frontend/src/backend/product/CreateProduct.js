import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/actions/alertAction';
import Layout from '../../components/layouts/Layout';
import { addProduct } from '../../redux/actions/productAction';
import TextField from '@material-ui/core/TextField';
// import Alert from '../../components/layouts/alert';

const CreateProduct = ({ addProduct, history }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    addProduct(data, history);
  };

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4 ">
        <div className="col-span-2 bg-white p-4">
          <div>
            <label className="text-gray-600 uppercase">BASIC INPUT</label>
            <input
              className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded border-gray-500'
              type='text'
              name='email'
            />
          </div>
        </div>
        <div className="col-span-1 bg-white p-4">
          <div>
            <label className="text-gray-600 uppercase">BASIC INPUT</label>
            <input
              className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded border-gray-500'
              type='text'
              name='email'
            />
          </div>
        </div>
      </div>
      {/* <div className="w-full h-64 p-4">
        <h3 className="uppercase text-lg text-gray-600 mb-4">Text inputs</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <div>
              <label className="text-gray-600 uppercase">BASIC INPUT</label>
              <input
                className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded border-gray-500'
                type='text'
                name='email'
              />
            </div>
          </div>
        </div>
      </div> */}
      {/* <Alert /> */}
      {/* <div className='shadow-md bg-white'>
        <div className='bg-teal-400 h-16 pt-3 pl-4'>
          <h3 className='text-lg text-white mt-1'>Create Product</h3>
        </div>
        <div className='p-4'>
          <div className='grid grid-cols-12 gap-4'>
            <div className='col-start-4 col-end-10'>
              <form onSubmit={onSubmit}>
                <div className='mb-3'>
                  <label>Product Name</label>
                  <input
                    type='text'
                    className='border-black p-2 border block w-full mt-1'
                    name='pdname'
                    value={pdname}
                    onChange={onChange}
                  />
                </div>
                <div className='mb-3'>
                  <label>Price</label>
                  <input
                    type='text'
                    className='border-black p-2 border block w-full mt-1'
                    name='pdprice'
                    value={pdprice}
                    onChange={onChange}
                  />
                </div>
                <button
                  type='submit'
                  className='bg-green-500 text-white w-40 py-2'
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id='outlined-required'
          label='Produdt name'
          variant='outlined'
          name='pdname'
          inputRef={register}
        />

        <TextField
          id='outlined-required'
          label='Produdt name'
          variant='outlined'
          name='pdprice'
          inputRef={register}
        />
        <button type='submit' className='bg-green-500 text-white w-40 py-2'>
          Save
        </button>
      </form> */}
    </Layout>
  );
};

CreateProduct.propTypes = {
  setAlert: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  state: state,
});

export default connect(mapStateToProps, { setAlert, addProduct })(
  CreateProduct
);
