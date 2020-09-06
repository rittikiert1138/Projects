const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    shopname: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    soi: {
        type: String,
    },
    street: {
        type: String,
    },
    province: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    subdistrict: {
        type: String,
        required: true,
    },
    zipcode: {
        type: String,
        required: true,
    },
    fax: {
        type: String,
    },
    contactphone: {
        type: String,
        required: true,
    },
    contactname: {
        type: String,
        required: true,
    },
    forgot_token: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    update_at: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('seller', SellerSchema);
