const { validationResult } = require('express-validator/check');
const User = require('../models/user');
const Cart = require('../models/cart');
const Product = require('../models/product')

exports.addCart = async (req, res) => {
  try {
    const uid = req.user.id;
    let { product_id } = req.body;

    const product = await Product.findById(product_id)

    if (!product) {
      return res.status(400).json({ errors: [{ msg: 'Product not found' }] });
    }

    const findData = await Cart.findOne({ user_id: uid, product_id: product_id })

    if (findData) {

      const cart = await Cart.findByIdAndUpdate(
        { _id: findData._id },
        {
          quantity: findData.quantity + 1
        }
      );

      await cart.save();

    } else {

      const cart = new Cart({
        user_id: uid,
        product_id: product_id,
        quantity: 1,
      });

      await cart.save();

    }

    //New code
    const carts = await Cart.find({ user_id: req.user.id })

    let allcarts = []

    for (let index = 0; index < carts.length; index++) {

      let findProduct = await Product.findById(carts[index].product_id)

      allcarts.push({
        cart_id: carts[index]._id,
        name: findProduct.name,
        price: findProduct.price,
        images: findProduct.images,
        quantity: carts[index].quantity
      })
    }

    res.json(allcarts)

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getCart = async (req, res) => {
  try {

    const carts = await Cart.find({ user_id: req.user.id })

    let allcarts = []

    for (let index = 0; index < carts.length; index++) {

      let findProduct = await Product.findById(carts[index].product_id)

      var totalPrice = findProduct.price * carts[index].quantity

      allcarts.push({
        cart_id: carts[index]._id,
        name: findProduct.name,
        price: findProduct.price,
        images: findProduct.images,
        quantity: carts[index].quantity
      })

    }

    res.json({
      allcarts: allcarts,
      totalPrice: totalPrice
    })

  } catch (error) {
    console.log(error)
  }
}

exports.destroyItem = async (req, res) => {
  try {

    const cart = await Cart.findById(req.params.id);

    await cart.remove();

    const carts = await Cart.find({ user_id: req.user.id })

    let allcarts = []

    for (let index = 0; index < carts.length; index++) {

      let findProduct = await Product.findById(carts[index].product_id)

      allcarts.push({
        cart_id: carts[index]._id,
        name: findProduct.name,
        price: findProduct.price,
        images: findProduct.images,
        quantity: carts[index].quantity
      })
    }

    res.json(allcarts)

  } catch (error) {
    console.log(error)
  }
}

exports.decreaseQuantity = async (req, res) => {
  try {

    const findData = await Cart.findById(req.params.id)

    if (findData) {

      const cart = await Cart.findByIdAndUpdate(
        { _id: findData._id },
        {
          quantity: findData.quantity - 1
        }
      );

      await cart.save();

    }

    const carts = await Cart.find({ user_id: req.user.id })

    let allcarts = []

    for (let index = 0; index < carts.length; index++) {

      let findProduct = await Product.findById(carts[index].product_id)

      allcarts.push({
        cart_id: carts[index]._id,
        name: findProduct.name,
        price: findProduct.price,
        images: findProduct.images,
        quantity: carts[index].quantity
      })
    }

    res.json(allcarts)

  } catch (error) {
    console.log(error)
  }
}

exports.increaseQuantity = async (req, res) => {
  try {

    const findData = await Cart.findById(req.params.id)

    if (findData) {

      const cart = await Cart.findByIdAndUpdate(
        { _id: findData._id },
        {
          quantity: findData.quantity + 1
        }
      );

      await cart.save();

    }

    const carts = await Cart.find({ user_id: req.user.id })

    let allcarts = []

    for (let index = 0; index < carts.length; index++) {

      let findProduct = await Product.findById(carts[index].product_id)

      allcarts.push({
        cart_id: carts[index]._id,
        name: findProduct.name,
        price: findProduct.price,
        images: findProduct.images,
        quantity: carts[index].quantity
      })
    }

    res.json(allcarts)

  } catch (error) {
    console.log(error)
  }
}
