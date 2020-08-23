import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Layout from '../../components/layouts/Layout'
import { getProduct, updateProduct } from '../../redux/actions/productAction'
import Alert from '../../components/layouts/alert'

const initialState = {
    pdname: '',
    pdprice: '',
};

const EditProduct = ({ getProduct, updateProduct, product: { product, loading }, match, history }) => {
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
        // console.log(match.params.id, formData)
        updateProduct(match.params.id, formData, history)
    };

    const { pdname, pdprice } = formData;

    return (
        <Layout>
            <Alert />
            <div className="shadow-md bg-white">
                <div className="bg-teal-400 h-16 pt-3 pl-4">
                    <h3 className="text-lg text-white mt-1">Create Product</h3>
                </div>
                <div className="p-4" >
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-start-4 col-end-10">
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label>Product Name</label>
                                    <input type="text" className="border-black p-2 border block w-full mt-1" name="pdname" value={pdname}
                                        onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label>Price</label>
                                    <input type="text" className="border-black p-2 border block w-full mt-1" name="pdprice" value={pdprice}
                                        onChange={onChange} />
                                </div>
                                <button type="submit" className="bg-green-500 text-white w-40 py-2" >Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

EditProduct.propTypes = {
    getProduct: PropTypes.func.isRequired,
    updateProduct: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    product: state.product
});

export default connect(mapStateToProps, { getProduct, updateProduct })(
    EditProduct
);
