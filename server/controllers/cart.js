const { validationResult } = require('express-validator/check');
const User = require('../models/user');
const Cart = require('../models/cart');

exports.addCart = async (req, res) => {
  try {
    const uid = req.user.id;
    let { product_id, quantity = 1, type = 1 } = req.body;
    const data = { product_id, user_id: uid, quantity, type };
    res.send(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
