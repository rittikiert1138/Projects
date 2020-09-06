const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const SellerController = require('../controllers/seller');
const { check } = require('express-validator');

//Loaduser
router.get('/me', SellerController.getProfile);
router.get('/', auth, SellerController.loaduser);

//Register
router.post('/register', [
    check('email', 'Email is required').not().isEmpty(),
    check('shopname', 'Shopname is required').not().isEmpty(),
    check(
        'password',
        'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    check('fname', 'Firstname is required').not().isEmpty(),
    check('lname', 'Lastname is required').not().isEmpty(),
    check('phone', 'Phone is required').not().isEmpty(),
    check('address', 'Address is required').not().isEmpty(),
    check('province', 'Province is required').not().isEmpty(),
    check('district', 'District is required').not().isEmpty(),
    check('subdistrict', 'Subdistrict is required').not().isEmpty(),
    check('zipcode', 'Zipcode is required').not().isEmpty(),
    check('contactphone', 'Contact phone is required').not().isEmpty(),
    check('contactname', 'Contact name is required').not().isEmpty(),
    SellerController.register,
]);

//Register
router.post('/login', [
    check('email', 'Email is required').not().isEmpty(),
    check(
        'password',
        'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    SellerController.login,
]);

module.exports = router;
