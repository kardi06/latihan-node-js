const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    // console.log("In The another middleware");
    // res.send("<h1>Welcome guysss</h1>");

})

module.exports = router;
