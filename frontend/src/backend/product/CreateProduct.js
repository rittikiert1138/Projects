import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../redux/actions/alertAction';
import Layout from '../../components/layouts/Layout';
import { addProduct } from '../../redux/actions/productAction';
// import Alert from '../../components/layouts/alert';

const CreateProduct = ({ addProduct, history }) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data, e) => {
    e.preventDefault();
    addProduct(data, history);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full bg-gradient-to-l from-purple-400 to-blue-400 h-12 rounded-tl rounded-tr px-3 pt-2">
          <h3 className="text-xl text-white uppercase">Create Product</h3>
        </div>
        <div className="w-full bg-white shadow-md h-auto p-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <div className="mb-4">
                <label className="text-gray-600 uppercase">Product name</label>
                <input
                  className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded border-gray-500'
                  type='text'
                  name='name'
                  ref={register}
                />
                {errors.name && <span>ddd</span>}
              </div>
              <div className="mb-4">
                <label className="text-gray-600 uppercase">Price</label>
                <input
                  className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded border-gray-500'
                  type='text'
                  name='price'
                  ref={register}
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-600 uppercase">Description</label>
                <textarea className="border w-full rounded border-gray-500 mt-2 h-32 focus:outline-none p-3 focus:border-blue-500"
                  name="description"
                  ref={register}
                ></textarea>
              </div>
            </div>
            <div className="col-span-1">
              <div >
                <label className="text-gray-600 uppercase">BASIC Select</label>
                <select className="border w-full h-10 border-gray-500 mt-2 focus:outline-none px-2 rounded"
                  name="category"
                  ref={register}
                >
                  <option value="" >Category</option>
                  <option value="1" >Select 1</option>
                  <option value="2" >Select 2</option>
                  <option value="3" >Select 3</option>
                  <option value="4" >Select 4</option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div className="text-center mt-4">
            <button className="w-40 uppercase bg-gradient-to-l from-green-400 to-green-600 h-10 rounded text-white mb-3 
            hover:shadow-lg px-5 mr-3 mb-3 focus:outline-none"
              type="submit"
            >
              <i className="fas fa-save"></i> Create
            </button>
            <Link to="/product">
              <button className="w-40 uppercase bg-gradient-to-l from-gray-400 to-gray-600 h-10 rounded text-white mb-3 
              hover:shadow-lg px-5 mr-3 mb-3 focus:outline-none">
                <i className="fas fa-times"></i> Cancel
            </button>
            </Link>
          </div>
        </div>
      </form>
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
