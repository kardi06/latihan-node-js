const express = require('express');
const path = require('path');
const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProduct);

router.get('/cart');

router.get('/checkout');

module.exports = router;
