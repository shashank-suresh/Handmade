const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/login.html");
})

app.get('/buyReg', (req, res) => {
    res.sendFile(__dirname + "/buyerReg.html");
})

app.listen(3000, () => {
    console.log("Server is running");
});