require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;


// body-parser chara data  catch kora hoise start
app.use(express.urlencoded({ extended: true }))
// body-parser chara data  catch kora hoise end

const userRoute = require('./routes/user.route');
const adminRoute = require('./routes/admin.route');

app.use(userRoute);
app.use(adminRoute);

app.use((req, res ,next)=>{
    res.status(201).json({
        "massage" : "404!!!...Error",
    })
});

app.listen(PORT , ()=>{
    console.log(`Server is running http://localhost:${PORT}`);
})