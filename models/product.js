const fs = require('fs');
const path = require('path');

const product = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
        // product.push(this);
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                console.log(err);
                return;
            }
            const products = JSON.parse(fileContent);
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll() {
        return product;
    }
}