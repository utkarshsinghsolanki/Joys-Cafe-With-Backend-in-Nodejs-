const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');

// MONGOOSE SPECIFIC STUFF
mongoose.connect('mongodb://localhost/joyscafe', {useNewUrlParser: true}, {useUnifiedTopology: true})
var db = mongoose.connection;
db.on('error', console.error.bind(console, "Connection Error:"));
db.once('open', ()=>{
    console.log('Connected To MongoD...');
});

const Schema = new mongoose.Schema({
    name: String,
    phone: Number,
    guests: Number,
    date: String,
    message: String
});

const client = mongoose.model('client', Schema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

app.get('/', (req, res) => {
    res.status(200).render('index.pug', {title: `Joy's Cafe || Home`});
});
app.get('/menu', (req, res) => {
    res.status(200).render('menu.pug', {title: `Joy's Cafe || Menu`});
});
app.get('/gallery', (req, res) => {
    res.status(200).render('gallery.pug', {title: `Joy's Cafe || Gallery`});
});
app.get('/about', (req, res) => {
    res.status(200).render('about.pug', {title: `Joy's Cafe || About Us`});
});
app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug', {title: `Joy's Cafe || Contact Us`});
});

// Getting Contact Form Post Request
app.post('/contact', (req, res) => {
    var newclient = new client(req.body);
    newclient.save().then(()=>{
        res.status(200).render('reserve.pug', {title: `Joy's Cafe || Contact Us`, response: "Your Seat Is Reserved"})
    }).catch(err => {
        res.status(400).render('reserve.pug', {title: `Joy's Cafe || Contact Us`, response: err + "Some technical error occurred..."})
    })
})

var port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("App is running on port " + port);
});
