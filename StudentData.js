const express = require('express');
const Mongoose = require('mongoose');
const BodyParser = require('body-parser');

var app = express();

Mongoose.connect('mongodb://localhost:27017/user', ({useNewUrlParser: true})).then(() => {
    console.log('Mondodb is connected');
}).
catch((err) => {console.log(err)});

const userSchema = new Mongoose.Schema({
    studentId: String,
    pin: String,
    fName: String,
    LName: String,
    level: Number
});

const User = Mongoose.model('user', userSchema);

app.get('/login', (req, res) =>{
    
});
app.listen(5000, () => {
    console.log("listening to port 5000....");
})