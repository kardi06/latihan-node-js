const Product = require('../models/product');

exports.getProduct = (req, res, next) => {
    Product.fetchAll((product) => {
        res.render('shop/product-list', {
            prods: product,
            pageTitle: 'Shop',
            path: '/products'
        });
    });    
};

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
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart'
    });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders'
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout'
    });
};