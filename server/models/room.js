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
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('product', ProductSchema);