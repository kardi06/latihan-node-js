const express = require('express');
const bodyParser = require('body-parser');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// console.log(routes.someText);
const app = express();


app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);


// const server = http.createServer(routes.handler);
// const server = http.createServer(app);

// server.listen(3000);
app.listen(3000);