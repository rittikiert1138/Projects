const express = require('express');
const router = express.Router();
const multer = require('multer');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const ProductController = require('../controllers/product');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/product');
  },
  filename: function (req, file, cb) {
    cb(null, 'product_' + Date.now() + '.jpg');
  },
});

var upload = multer({
  storage: storage,
});

router.get('/', ProductController.index);
router.post(
  '/store',
  [
    // check('name', 'Name is required').not().isEmpty(),
    // check('price', 'Price is required').not().isEmpty(),
    // check('category', 'Category is required').not().isEmpty(),
  ],
  upload.single('image'),
  ProductController.store
);
router.get('/edit/:id', ProductController.edit);
router.put('/update/:id', upload.single('new_image'), ProductController.update);
router.delete('/destroy/:id', ProductController.destroy);

router.post('/test', upload.single('image'), (req, res) => {});

module.exports = router;
