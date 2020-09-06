import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    const formData = new FormData();
    await formData.append('image', data.image[0]);
    await formData.append('name', data.name);
    await formData.append('price', data.price);
    await formData.append('description', data.description);
    await formData.append('category', data.category);
    addProduct(formData, history);
  };

  const [image, setImage] = useState({
    file: '',
    imagePreviewUrl: '',
  });

  const handleFile = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImage({ file: file, imagePreviewUrl: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='w-full bg-gradient-to-l from-purple-400 to-blue-400 h-12 rounded-tl rounded-tr px-3 pt-2'>
          <h3 className='text-xl text-white uppercase'>Create Product</h3>
        </div>
        <div className='w-full bg-white shadow-md h-auto p-4'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-2'>
              <div className='mb-4'>
                <label className='text-gray-600 uppercase'>Product name</label>
                <input
                  className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded border-gray-500'
                  type='text'
                  name='name'
                  ref={register}
                />
                {errors.name && <span>ddd</span>}
              </div>
              <div className='mb-4'>
                <label className='text-gray-600 uppercase'>Price</label>
                <input
                  className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded border-gray-500'
                  type='text'
                  name='price'
                  ref={register}
                />
              </div>
              <div className='mb-4'>
                <label className='text-gray-600 uppercase'>Description</label>
                <textarea
                  className='border w-full rounded border-gray-500 mt-2 h-32 focus:outline-none p-3 focus:border-blue-500'
                  name='description'
                  ref={register}
                ></textarea>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='mb-4'>
                <label className='text-gray-600 uppercase'>Image</label>
                {image.imagePreviewUrl == '' ? (
                  <img
                    src='https://dummyimage.com/600x400/dcdcdc/fff'
                    className='w-full'
                  />
                ) : (
                  <img src={image.imagePreviewUrl} className='w-full' />
                )}
                <input
                  type='file'
                  name='image'
                  className='mt-4'
                  ref={register}
                  onChange={(e) => handleFile(e)}
                  style={{ width: '100%', marginBottom: '15px' }}
                />
              </div>
              <div>
                <label className='text-gray-600 uppercase'>Category</label>
                <select
                  className='border w-full h-10 border-gray-500 mt-2 focus:outline-none px-2 rounded'
                  name='category'
                  ref={register}
                >
                  <option value=''>Category</option>
                  <option value='1'>Select 1</option>
                  <option value='2'>Select 2</option>
                  <option value='3'>Select 3</option>
                  <option value='4'>Select 4</option>
                </select>
              </div>
            </div>
          </div>
          <hr className='mt-4' />
          <div className='text-center mt-4'>
            <button
              className='w-40 uppercase bg-gradient-to-l from-green-400 to-green-600 h-10 rounded text-white mb-3 
            hover:shadow-lg px-5 mr-3 mb-3 focus:outline-none'
              type='submit'
            >
              <i className='fas fa-save'></i> Create
            </button>
            <Link to='/product'>
              <button
                className='w-40 uppercase bg-gradient-to-l from-gray-400 to-gray-600 h-10 rounded text-white mb-3 
              hover:shadow-lg px-5 mr-3 mb-3 focus:outline-none'
              >
                <i className='fas fa-times'></i> Cancel
              </button>
            </Link>
          </div>
        </div>
      </form>
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
