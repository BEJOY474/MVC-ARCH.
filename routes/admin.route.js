const express = require('express');
const { show } = require('../controllers/adminController');
const adminRoute = express.Router();


adminRoute.get("/uni" , show);

module.exports = adminRoute;