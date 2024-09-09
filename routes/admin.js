const path = require('path');
// const rootDir = require('../utils/path');
const productsController = require('../controllers/products');
const express = require('express');

const router = express.Router();


//admin/add-product => get
router.get('/add-product', productsController.getAddProduct);

//admin/add-product => post
router.post('/add-product', productsController.postProduct);

module.exports = router;