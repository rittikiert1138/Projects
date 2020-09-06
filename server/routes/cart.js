const express = require('express');
const router = express.Router();
const authUser = require('../middleware/authUser');
const UserController = require('../controllers/user');
const CartController = require('../controllers/cart');
const { check } = require('express-validator');

//Loaduser
router.delete('/destroy/:id', authUser, CartController.destroyItem);
router.put('/decrease/:id', authUser, CartController.decreaseQuantity);
router.put('/increase/:id', authUser, CartController.increaseQuantity);

module.exports = router;
