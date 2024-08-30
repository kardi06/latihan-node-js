const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/',(req, res, next)=>{
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const product = adminData.product;
    res.render('shop',{prods:product, docTitle: 'Shop'});

})

module.exports = router;
