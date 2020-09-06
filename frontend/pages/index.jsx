import React, { useEffect } from 'react';
import Layout from '../components/layouts/Layout';
import Link from 'next/link';
import { connect } from 'react-redux';
import initsStore from '../redux/store';
import { fetchProducts } from '../redux/actions/productAction';
import { addItemToCart, getCart } from '../redux/actions/cartAction'

const Homepage = ({ getState, addItemToCart }) => {

  const store = getState();
  const { products } = store.product
  const { isAuthenticated } = store.users
  const { loading } = store.product

  return (
    <Layout>
      <div className='container mx-auto'>
        <div className='grid grid-cols-3 gap-4 pt-4 pb-5'>
          {products.map((item, i) => (
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
                      ฿ {item.price}
                    </p>
                  </div>
                </div>
              </Link>
              {isAuthenticated && <button className="w-full h-10 bg-black text-white " onClick={() => addItemToCart(item._id)} >
                {loading ? 'Loading...' : 'Add to cart'}
              </button>}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

Homepage.getInitialProps = async ({ store, query }) => {
  await store.dispatch(fetchProducts());
  await store.dispatch(getCart())

  return {};
};

export default connect(initsStore, { addItemToCart, getCart })(Homepage);
