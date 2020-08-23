import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Layout from '../../components/layouts/Layout'
import { Link } from 'react-router-dom'
import Alert from '../../components/layouts/alert'
import { getProducts, deleteProduct } from '../../redux/actions/productAction'

const ListProduct = ({ getProducts, deleteProduct, product: { products } }) => {

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    return (
        <Layout>
            <Alert />
            <div className="bg-teal-400 h-16 text-right p-3">
                <Link to="/backend/product/create">
                    <button className="bg-blue-500 px-5 py-2 text-white "> <i className="fa fa-plus mr-1"></i> Create</button>
                </Link>
            </div>
            <table className="border-collapse w-full">
                <thead>
                    <tr className="bg-white">
                        <th className="p-3 font-bold  text-gray-600 border border-gray-300 hidden lg:table-cell">No.</th>
                        <th className="p-3 font-bold text-left text-gray-600 border border-gray-300 hidden lg:table-cell">Product name</th>
                        <th className="p-3 font-bold  text-gray-600 border border-gray-300 hidden lg:table-cell">Product price</th>
                        <th className="p-3 font-bold  text-gray-600 border border-gray-300 hidden lg:table-cell w-64">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, i) => (
                        <tr key={i} className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">{i + 1}</td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 border border-b block lg:table-cell relative lg:static">{item.pdname}</td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static"> {item.pdprice}</td>
                            <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                                <Link to={`/backend/product/edit/${item._id}`} className="px-6 py-2 text-white bg-yellow-500" >Edit</Link>
                                <a href="#" onClick={() => deleteProduct(item._id)} className="px-6 py-2 text-white bg-red-500" >Delete</a>
                            </td>
                        </tr>))}
                </tbody>
            </table>
        </Layout>
    )
}

ListProduct.propTypes = {
    getProducts: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    product: state.product
});

export default connect(mapStateToProps, { getProducts, deleteProduct })(ListProduct);
