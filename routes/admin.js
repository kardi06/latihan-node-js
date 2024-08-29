const path = require('path');
const rootDir = require('../utils/path');
const express = require('express');

const router = express.Router();
const product = [];

//admin/add-product => get
router.get('/add-product',(req, res, next)=>{
    console.log("In The middleware");
    // res.send("<form action='admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></form>");
    res.sendFile(path.join(rootDir,'views', 'add-product.html'));
    // res.sendFile(path.join(__dirname,'..','views', 'add-product.html'));
})

//admin/add-product => post
router.post('/add-product',(req, res, )=>{
    // console.log(res.body);
    product.push({title: req.body.title});
    res.redirect('/');
    
})

exports.routes = router;
exports.product = product