const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const ProductController = require('../controllers/product')

router.get('/', ProductController.index);
router.post('/store', [
    check('name', 'Name is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty(),
], ProductController.store);
router.get('/edit/:id', ProductController.edit);
router.put('/update/:id', ProductController.update);
router.delete('/destroy/:id', ProductController.destroy);

module.exports = router;