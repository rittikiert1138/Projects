const express = require('express');
const router = express.Router();
const FrontendController = require('../controllers/frontend');

router.get('/home', FrontendController.home);
router.get('/product/:id', FrontendController.productDetail);

module.exports = router;
