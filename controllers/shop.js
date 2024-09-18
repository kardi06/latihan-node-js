const Product = require('../models/product');

exports.getProduct = (req, res, next) => {
    Product.fetchAll((product) => {
        res.render('shop/product-list', {
            prods: product,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: product.length > 0,
            activeShop: true,
            productCSS: true
        });
    });    
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll((product) => {
        res.render('shop/index', {
            prods: product,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: product.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
}