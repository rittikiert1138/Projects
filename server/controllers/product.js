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

    const { name, price, description, category } = req.body

    try {

        product = new Product({
            name,
            price,
            description,
            category
        });

        await product.save()

        return res.status(200).json({ success: [{ msg: 'Insert data success' }] });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

exports.edit = async (req, res) => {

    const product = await Product.findById(req.params.id);

    res.send(product)
}

exports.update = async (req, res) => {

    const { name, price, description, category } = req.body

    const product = await Product.findByIdAndUpdate({ _id: req.params.id },
        {
            name: name,
            price: price,
            description: description,
            category: category
        })
    await product.save()

    res.status(200).json({ message: 'Product updated!' });
}

exports.destroy = async (req, res) => {

    const product = await Product.findById(req.params.id)

    await product.remove()

    const products = await Product.find()

    res.json(products)
}