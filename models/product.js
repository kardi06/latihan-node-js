const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductFromFile = (cb) => {   
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        cb(JSON.parse(fileContent));
    });
};

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        getProductFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
        // const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        // // product.push(this);
        // fs.readFile(p, (err, fileContent) => {
        //     let products = [];
        //     if (!err) {
        //         products = JSON.parse(fileContent);
        //     }
            
        // });
    }

    static fetchAll(cb) {
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }
}