import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BackendLayout from '../../components/layouts/BackendLayout';
import { Link } from 'react-router-dom';
// import Alert from '../../components/layouts/alert';
import { getProducts, deleteProduct } from '../../redux/actions/productAction';

const ListRoom = ({ getProducts, deleteProduct, product: { products } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <BackendLayout>
      {/* <Alert /> */}
      <div className='bg-teal-400 h-16 text-right p-3'>
        <Link to='/backend/room/create'>
          <button className='bg-blue-500 px-5 py-2 text-white '>
            {' '}
            <i className='fa fa-plus mr-1'></i> Create
          </button>
        </Link>
      </div>
      <table className='border-collapse w-full'>
        <thead>
          <tr className='bg-white'>
            <th className='p-3 font-bold  text-gray-600 border border-gray-300 hidden lg:table-cell'>
              No.
            </th>
            <th className='p-3 font-bold text-left text-gray-600 border border-gray-300 hidden lg:table-cell'>
              Product name
            </th>
            <th className='p-3 font-bold  text-gray-600 border border-gray-300 hidden lg:table-cell'>
              Product price
            </th>
            <th className='p-3 font-bold  text-gray-600 border border-gray-300 hidden lg:table-cell w-64'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </BackendLayout>
  );
};

ListRoom.propTypes = {
  getProducts: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProducts, deleteProduct })(
  ListRoom
);
