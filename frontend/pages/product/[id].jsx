import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/layouts/Layout';
import { fetchProduct } from '../../redux/actions/productAction';
import { addItemToCart } from '../../redux/actions/cartAction'
import api from '../../utils/api';
import initsStore from '../../redux/store';

const Detail = ({ getState, addItemToCart }) => {
  const store = getState()
  const { product } = store.product

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
                onClick={() => addItemToCart(product._id)}
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

Detail.getInitialProps = async ({ store, query }) => {
  await store.dispatch(fetchProduct(query.id));

  return {};
};

export default connect(initsStore, { addItemToCart })(Detail);