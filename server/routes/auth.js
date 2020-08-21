const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const AuthController = require('../controllers/auth');
const { check, validationResult } = require('express-validator');

//Loaduser
router.get('/', auth, AuthController.loaduser);

//Register
router.post('/register', [
  check('username', 'Name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check(
    'password',
    'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  AuthController.register,
]);

//Login
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  AuthController.login
);

module.exports = router;
