import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layouts/Layout';
import { useRouter } from 'next/router';
import { fetchProduct } from '../../redux/actions/productAction';
import api from '../../utils/api';
import axios from 'axios';

const Detail = ({ isAuthenticated, product, fetchProduct }) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    fetchProduct(id);
  }, [fetchProduct]);

  const addOrder = async (product_id) => {
    const { data } = await api.post('http://localhost:5000/api/user/cart', {
      product_id,
    });

    console.log(data);
  };

  return (
    <Layout>
      <div className='container mx-auto mt-5'>
        <div className='grid grid-cols-5 gap-8'>
          <div className='col-span-3 '>
            {product && (
              <img
                src={`http://localhost:5000/uploads/product/${product.images}`}
                className='w-full'
              />
            )}
          </div>
          <div className='col-span-2 pt-5'>
            <div className='wrap_detail'>
              <h2 className='text-xl'>{product && product.name}</h2>
              <p className='text-md mt-4 text-gray-600'>
                {product && product.price} ฿
              </p>
              <hr className='my-5' />
              <p className='font-light'>{product && product.description}</p>
            </div>
            <div className='w-full'>
              <button
                className='w-100 bg-black text-white w-full py-3 focus:outline-none'
                onClick={() => addOrder(product._id)}
              >
                เลือกสินค้า
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
  product: state.product.product,
});

export default connect(mapStateToProps, { fetchProduct })(Detail);
