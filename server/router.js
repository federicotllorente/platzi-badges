require('dotenv').config();
const path = require('path');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const pool = require('./db');

const response = {
    success: (req, res, data, status) => {
        res.status(status || 200).send({
            error: '',
            body: data
        });
    },
    error: (req, res, error, status, message) => {
        console.error(message);
        res.status(status || 500).send({
            error: error,
            body: ''
        });
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `build/${process.env.FILES_ROUTE}/`);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

router.get('/badges', (req, res) => {
    res.send('Hello world');
    // controllers.getTechnologies()
    //     .then(data => response.success(req, res, data, 200))
    //     .catch(error => response.error(req, res, error, 500, '[router] Error in controller trying to get the technologies'));
});

// router.post('/badges', (req, res) => {
//     controllers.addTechnology(req.body.name)
//         .then(data => response.success(req, res, data, 201))
//         .catch(error => response.error(req, res, error, 500, '[router] Error in controller trying to add a technology'));
// });

module.exports = router;