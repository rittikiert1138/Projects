import React, { useState } from 'react'
import Link from 'next/link'
import api from '../../utils/api'

const Monitor = ({ carts, deleteCartItem, increaseQuantity, decreaseQuantity, totalprice }) => {

    const countPrice = () => {
        // for (let index = 0; index < carts.length; index++) {
        //     let _total = totalPrice + carts[index].price
        //     setTotalprice(_total)
        // }
    }

    return (
        <div>
            {carts.length > 0 ? (<div className='grid grid-cols-5 gap-8'>
                <div className='col-span-3 h-auto shadow-md px-4 border-t'>
                    {carts && carts.map((cart, i) => (
                        <div className="my-4 w-full h-32 " key={i} >
                            <div className="w-1/4 h-32 float-left"
                                style={{ backgroundImage: `url('http://localhost:5000/uploads/product/${cart.images}')`, backgroundSize: 'cover' }}
                            ></div>
                            <div className="w-3/4 h-32 float-left pl-5">
                                <div className="float-left w-64">
                                    <h3 className="text-lg uppercase">{cart.name} </h3>
                                    <p className="text-gray-600">{cart.price} ฿</p>
                                </div>
                                <div className="w-32 h-32 float-left text-center pt-12">
                                    <button
                                        className={`h-6 w-6 bg-gray-${cart.quantity <= 1 ? '500' : '900'} focus:outline-none text-white`}
                                        onClick={() => decreaseQuantity(cart.cart_id)}
                                        disabled={cart.quantity <= 1}
                                    >-</button>
                                    <input type="text" className="w-12 h-10 border focus:outline-none text-center mx-1" maxLength="1" value={cart.quantity} />
                                    <button className="h-6 w-6 bg-gray-900 focus:outline-none text-white" onClick={() => increaseQuantity(cart.cart_id)}>+</button>
                                </div>
                                <div className="w-32 h-32 float-right text-right pt-12">
                                    <button className="focus:outline-none" onClick={() => deleteCartItem(cart.cart_id)} >
                                        <i className="fas fa-trash mt-3"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='col-span-2 h-auto bg-white shadow-md p-4 border-t'>
                    <h1 className="text-xl">สรุปข้อมูลสั่งซื้อ</h1>
                    <div className="w-full mt-4 flex">
                        <div className="w-1/2  h-10">ราคาสินค้า</div>
                        <div className="w-1/2  h-10 text-right">
                            <h2 className="text-lg">฿ {totalprice}</h2>
                        </div>
                    </div>
                </div>
            </div>) : (<div className="w-1/2 h-32 bg-white mx-auto p-4 shadow-md border-t text-center">
                <h1 className="text-xl">ไม่มีสินค้าในรถเข็นของคุณ</h1>
                <Link href="/">
                    <button className="w-1/4 h-10 bg-black text-white mt-5">ช้อปปิ้งกันเลย</button>
                </Link>
            </div>)}
        </div>
    )
}

export default Monitor
