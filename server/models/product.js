const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    images: [
        {
            img_id: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            order: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    category: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('product', ProductSchema);