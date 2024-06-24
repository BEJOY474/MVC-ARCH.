const express = require('express');

const { getUsers, saveUsers } = require('../controllers/user.contoller');
const route = express.Router();

route.get("/user",getUsers);
route.post("/user",saveUsers);

module.exports = route;