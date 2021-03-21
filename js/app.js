const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv=require('dotenv').config()

// set up express app
const app = express();


app.use(bodyParser.json())
// connect to mongodb
mongoose.connect(process.env.DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});
var db = mongoose.connection;


// use body-parser middleware
app.use(bodyParser.json());


// initialize routes
app.use('/api', require('./routes/api'));


//listening to requests
const PORT = process.env.PORT || 3000;
app.listen( PORT, ()=>{
    console.log("Running on port ..." +PORT)
})

