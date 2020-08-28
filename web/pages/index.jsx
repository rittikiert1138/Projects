import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Layout from '../components/layouts/Layout';
import { fetchProducts } from '../redux/actions/productAction';

const Home = ({ isAuthenticated, fetchProducts, product }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Layout>
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 pt-4 pb-5'>
          {product.products &&
            product.products.map((item, i) => (
              <div key={i}>
                <Link href={`/product/[id]`} as={`/product/${item._id}`}>
                  <div className='w-full overflow-hidden shadow-lg cursor-pointer'>
                    <img
                      className='w-full'
                      src={`http://localhost:5000/uploads/product/${item.images}`}
                      alt='Sunset in the mountains'
                    />
                    <div className='px-6 py-4'>
                      <div className='font-bold text-xl mb-2'>{item.name}</div>
                      <p className='text-gray-700 text-base'>
                        {item.description}
                      </p>
                    </div>
                    <div className='px-6 pt-4 pb-2'>
                      {isAuthenticated && (
                        <>
                          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                            #photography
                          </span>
                          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                            #travel
                          </span>
                          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                            #winter
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
  product: state.product,
});

export default connect(mapStateToProps, { fetchProducts })(Home);
