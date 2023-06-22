const express = require("express");
var app = express();
const path = require('path');

// SERVE STATIC WEB APP
app.use(express.static(path.join(__dirname, 'main', 'build')));

app.get('*', (req, res, next) => {
    console.log(req.url)
    return res.sendFile(path.join(__dirname, 'main', 'build', 'index.html'));
});

let port = process.env.PORT || 8890;
app.listen(port, () => {
    console.log(`====== SERVER LAUNCHED ON PORT ${port} \n`)
})
