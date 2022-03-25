const express = require('express');
const path = require('path');
//const fs = require("fs");
const mongoose = require('mongoose');

main().catch(err => console.log(err));


const app = express();
const port = 80;

//Express specific stuff

app.use('/static', express.static('static'));
app.use(express.urlencoded());

//Pug specific stuff

app.set('view engine', 'pug') //set the template engine as pug
app.set('views', path.join(__dirname, 'views')); //set the views directory

app.get('/', (req, res)=>{
    const params ={};
    res.status(200).render('home.pug', params);
});
app.get('/contact.pug', (req, res)=>{
    const params ={};
    res.status(200).render('contact.pug', params);
});
async function main() {
    await mongoose.connect('mongodb://localhost/contact');
  }


//SERVER start

app.listen(port,()=>{
    console.log(`Server started successfully on port ${port}`);
});