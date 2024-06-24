const express = require('express');
const app = express();

const userRoute = require('./routes/user.route');
app.use(userRoute);

app.get((req, res)=>{
    res.status(201).json({
        "massage" : "404!!!...Error",
    })
});

module.exports = app;