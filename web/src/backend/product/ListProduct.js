import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/layouts/Layout';
import { Link } from 'react-router-dom';
import AlertBox from '../../components/layouts/alert';
import { getProducts, deleteProduct } from '../../redux/actions/productAction';

const ListProduct = ({ getProducts, deleteProduct, product: { products } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Layout>
      <div className='w-full bg-white h-auto shadow-md rounded p-4'>
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div className='col-span-1'>
            <h3 className='text-xl text-gray-600'>Products</h3>
          </div>
          <div className='col-span-1 text-right'>
            <Link to={`/product/create`}>
              <button className='bg-blue-500 text-white h-10 px-4 focus:outline-none'>
                <i className='fas fa-plus'></i> Create
              </button>
            </Link>
          </div>
        </div>
        <AlertBox />
        <table className='table-fixed w-full mt-4'>
          <thead>
            <tr>
              <th className='border w-20 px-4 py-3'>No.*</th>
              <th className='border px-4 py-3 text-left'>Name</th>
              <th className='border w-1/5 px-4 py-3'>Price</th>
              <th className='border w-1/5 px-4 py-3'>Manage</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, i) => (
              <tr key={item._id}>
                <td className='border px-4 py-3 text-center'>{i + 1}</td>
                <td className='border px-4 py-3'>{item.name}</td>
                <td className='border px-4 py-3 text-center'>{item.price}</td>
                <td className='border px-4 py-3 text-center'>
                  <div className='inline-flex'>
                    <Link to={`/product/edit/${item._id}`}>
                      <button className='bg-yellow-500 h-10 text-white hover:bg-yellow-600 px-5 rounded-l focus:outline-none'>
                        <i className='fas fa-pencil'></i> Edit
                      </button>
                    </Link>
                    <button
                      className='bg-red-500 h-10 text-white hover:bg-red-600 px-5 rounded-r focus:outline-none'
                      onClick={() => deleteProduct(item._id)}
                    >
                      <i className='fas fa-trash'></i> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

ListProduct.propTypes = {
  getProducts: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts, deleteProduct })(
  ListProduct
);
