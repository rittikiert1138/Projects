import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setAlert } from '../../redux/actions/alertAction';
import Layout from '../../components/layouts/Layout'
import { addProduct } from '../../redux/actions/productAction'
import Alert from '../../components/layouts/alert'

const CreateProduct = ({ addProduct, history }) => {
    const [formData, setFormData] = useState({
        pdname: '',
        pdprice: '',
    });

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        addProduct(formData, history)
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

CreateProduct.propTypes = {
    setAlert: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    state: state
});

export default connect(mapStateToProps, { setAlert, addProduct })(CreateProduct);

