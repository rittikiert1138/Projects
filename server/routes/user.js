const express = require('express');
const router = express.Router();
const authUser = require('../middleware/authUser');
const UserController = require('../controllers/user');
const CartController = require('../controllers/cart');
const { check } = require('express-validator');

//Loaduser
router.get('/', authUser, UserController.loaduser);

//Register
router.post('/register', [
  check('fname', 'Firstname is required').not().isEmpty(),
  check('lname', 'Lastname is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  UserController.register,
]);

// Login
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  UserController.login
);

router.post('/cart', authUser, CartController.addCart);
router.get('/cart', authUser, CartController.getCart);

module.exports = router;
