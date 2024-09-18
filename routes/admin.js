const path = require('path');
// const rootDir = require('../utils/path');
const adminController = require('../controllers/admin');
const express = require('express');

const router = express.Router();


//admin/add-product => get
router.get('/add-product', adminController.getAddProduct);

//admin/add-product => post
router.post('/add-product', adminController.postProduct);

//admin/products => get
router.get('/products');

module.exports = router;