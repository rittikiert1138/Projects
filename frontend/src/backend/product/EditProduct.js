import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import Layout from '../../components/layouts/Layout';
import { getProduct, updateProduct } from '../../redux/actions/productAction';
// import Alert from '../../components/layouts/alert';

const initialState = {
  name: '',
  price: '',
  description: '',
  category: ''
};

const EditProduct = ({
  getProduct,
  updateProduct,
  product: { product, loading },
  match,
  history,
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!product) getProduct(match.params.id);
    if (!loading && product) {
      const productData = { ...initialState };
      for (const key in product) {
        if (key in productData) productData[key] = product[key];
      }
      setFormData(productData);
    }
  }, [loading, getProduct, product]);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    updateProduct(match.params.id, formData, history);
  };

  const { name, price, description, category } = formData;

  return (
    <Layout>
      <form onSubmit={onSubmit}>
        <div className="w-full bg-gradient-to-l from-purple-400 to-blue-400 h-12 rounded-tl rounded-tr px-3 pt-2">
          <h3 className="text-xl text-white uppercase">Edit Product</h3>
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
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-600 uppercase">Price</label>
                <input
                  className='border w-full py-2 px-2 mt-2 focus:outline-none rounded-none focus:border-blue-500 rounded border-gray-500'
                  type='text'
                  name='price'
                  value={price}
                  onChange={onChange}
                />
              </div>
              <div className="mb-4">
                <label className="text-gray-600 uppercase">Description</label>
                <textarea className="border w-full rounded border-gray-500 mt-2 h-32 focus:outline-none p-3 focus:border-blue-500"
                  name="description"
                  value={description}
                  onChange={onChange}
                ></textarea>
              </div>
            </div>
            <div className="col-span-1">
              <div >
                <label className="text-gray-600 uppercase">BASIC Select</label>
                <select className="border w-full h-10 border-gray-500 mt-2 focus:outline-none px-2 rounded"
                  name="category"
                  value={category}
                  onChange={onChange}
                >
                  <option value="" >Category </option>
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
              <i className="fas fa-pencil-alt"></i> Update
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
    </Layout>
  );
};

EditProduct.propTypes = {
  getProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProduct, updateProduct })(
  EditProduct
);
