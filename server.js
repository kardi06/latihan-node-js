const http = require('http');
const express = require('express');

// console.log(routes.someText);
const app = express();

app.use((req, res, next)=>{
    console.log("In The middleware");
    next(); // Allow the request to continue to the next middleware
})

app.use((req, res, next)=>{
    console.log("In The another middleware");
})
// const server = http.createServer(routes.handler);
const server = http.createServer(app);

server.listen(3000);