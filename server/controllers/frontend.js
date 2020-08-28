const { validationResult } = require('express-validator/check');
const Product = require('../models/product');
const Admin = require('../models/admin');

exports.home = async (req, res) => {
  let products = await Product.find();
  let admins = await Admin.find();

  res.json({
    products: products,
  });
};

exports.productDetail = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    res.send(error);
  }

  // res.send(req.params.id);
};
