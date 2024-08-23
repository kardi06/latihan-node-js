const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    console.log("In The another middleware");
    res.send("<h1>Welcome guysss</h1>");
})

module.exports = router;
