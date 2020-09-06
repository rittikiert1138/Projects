const { validationResult } = require('express-validator/check');
const Seller = require('../models/seller');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.getProfile = async (req, res) => {
    res.send('seller')
}

exports.register = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        email, shopname, password, fname, lname, phone, address,
        soi, street, province, district, subdistrict, zipcode, fax, contactphone, contactname
    } = req.body

    try {

        let findSeller = await Seller.findOne({ email });
        if (findSeller) {
            return res.status(400).json({ errors: [{ msg: 'Email already exists' }] });
        }

        let findShopname = await Seller.findOne({ shopname });
        if (findShopname) {
            return res.status(400).json({ errors: [{ msg: 'Shopname already exists' }] });
        }

        let seller = new Seller({
            email: email,
            shopname: shopname,
            password: password,
            fname: fname,
            lname: lname,
            phone: phone,
            address: address,
            soi: soi,
            street: street,
            province: province,
            district: district,
            subdistrict: subdistrict,
            zipcode: zipcode,
            fax: fax,
            contactphone: contactphone,
            contactname: contactname
        })

        const salt = await bcrypt.genSalt(10);
        seller.password = await bcrypt.hash(password, salt);

        await seller.save();

        return res.status(200).json({ success: [{ msg: 'Register success' }] });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let seller = await Seller.findOne({ email });

        if (!seller) {
            return res.status(400).json({ errors: [{ msg: 'ไม่มีผู้ใช้นี้ในระบบ' }] });
        }

        const checkPassword = await bcrypt.compare(password, seller.password);

        if (!checkPassword) {
            return res.status(400).json({ errors: [{ msg: 'รหัสผ่านไม่ถูกต้อง' }] });
        }

        const payload = {
            seller: {
                id: seller.id,
            },
        };

        jwt.sign(payload, 'secret', { expiresIn: '1 days' }, (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

exports.loaduser = async (req, res) => {
    try {
        const seller = await Seller.findById(req.seller.id).select('-password');
        res.json(seller);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};