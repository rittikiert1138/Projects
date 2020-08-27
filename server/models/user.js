const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: [
        {
            addressid: {
                type: Number,
                required: true
            },
            address: {
                type: String
            },
            subdistrict: {
                type: String
            },
            district: {
                type: String
            },
            province: {
                type: String
            },
            zipcode: {
                type: String
            },
            phone: {
                type: String
            },
            status: {
                type: Number
            }
        }
    ],
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('users', UserSchema);
