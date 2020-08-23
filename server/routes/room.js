const express = require('express');
const router = express.Router();
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + ".jpg");
    }
});

var upload = multer({
    storage: storage
});

router.post('/store', upload.single("image"), function (req, res) {

    // res.send(req.file)

    if (req.file) {
        res.json(req.body)
    } else {
        res.json('error')
    }

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)

    })

});
// router.post('/store', upload.single("image"), function (req, res) {

//     res.json(req.body)

//     if (req.file) {
//         res.json('success')
//     } else {
//         res.json('error')
//     }

// });

module.exports = router;