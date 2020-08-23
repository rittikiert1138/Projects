const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    pdname: {
        type: String,
        required: true,
    },
    pdprice: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('product', ProductSchema);
