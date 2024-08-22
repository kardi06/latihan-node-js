const express = require('express');

// console.log(routes.someText);
const app = express();

app.use('/add-product',(req, res, next)=>{
    console.log("In The middleware");
    res.send("<h1>Add Product Page</h1>");
})

app.use('/',(req, res, next)=>{
    console.log("In The another middleware");
    res.send("<h1>Welcome guysss</h1>");
})
// const server = http.createServer(routes.handler);
// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);