const { validationResult } = require('express-validator/check');
const Product = require('../models/product');

exports.index = async (req, res) => {

    let products = await Product.find()

    res.json(products)
}

exports.store = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pdname, pdprice } = req.body

    product = new Product({
        pdname,
        pdprice
    });

    await product.save()

    return res.status(200).json({ success: [{ msg: 'Insert data success' }] });
}

exports.edit = async (req, res) => {

    const product = await Product.findById(req.params.id);

    res.send(product)
}

exports.update = async (req, res) => {

    const { pdname, pdprice } = req.body

    const product = await Product.findByIdAndUpdate({ _id: req.params.id }, { pdname: pdname, pdprice: pdprice })
    await product.save()

    res.status(200).json({ message: 'Product updated!' });
}

exports.destroy = async (req, res) => {

    const product = await Product.findById(req.params.id)

    await product.remove()

    const products = await Product.find()

    res.json(products)
}