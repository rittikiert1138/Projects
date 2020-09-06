import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layouts/Layout';
import { getCart } from '../redux/actions/cartAction'
import { deleteCartItem, decreaseQuantity, increaseQuantity } from '../redux/actions/cartAction'
import Monitor from '../components/Monitor/Monitor'

const Cartpage = ({ getCart, carts, deleteCartItem, increaseQuantity, decreaseQuantity, totalprice }) => {

    useEffect(() => {
        getCart()
    }, [getCart])

    return (
        <Layout>
            <div className="container mx-auto mt-4">
                <Monitor carts={carts} deleteCartItem={deleteCartItem} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} totalprice={totalprice} />
            </div>
        </Layout>
    )
}

const mapStateToProps = (state) => ({
    carts: state.users.carts,
    totalprice: state.cart.totalprice
});

export default connect(mapStateToProps, { getCart, deleteCartItem, decreaseQuantity, increaseQuantity })(Cartpage);