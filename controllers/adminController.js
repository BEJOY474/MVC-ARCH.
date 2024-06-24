const path = require('path');

exports.show = (req, res)=>{
    res.sendFile(path.join(__dirname + "/../views/uni.html"));
}