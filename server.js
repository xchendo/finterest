const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

//import environmental variables from our variables.env file
dotenv.config({path:'variables.env'});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// import schemas
require('./src/backend/models/User');

// connect dat DB
mongoose.connect(process.env.DATABASE);

mongoose.connection.on('connected', () => {  
    console.log('Mongoose default connection opened');
  }); 

// tell mongoose to use es6 promises
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(err.message);
});

app.post('/api/user/create', (req, res) => res.send(req.body));

app.listen(process.env.PORT_BACKEND || 3001, () => console.log(`Listening on ${process.env.PORT}`));
