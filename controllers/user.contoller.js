const path = require('path');
const users = require('../models/user.model');

exports.getUsers =  (req, res)=>{
    res.sendFile(path.join(__dirname+"/../views/index.html"));
};

exports.saveUsers = (req, res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);

    const user = {//user name er ekta object
        name,
        age,
    };
    users.push(user);
    res.status(201).json({
        sucess : true,
        users
    })
}