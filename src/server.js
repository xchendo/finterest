const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes')

//import environmental variables
dotenv.config({path:'variables.env'});

// import schemas
require('./data/models/User');

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

// finish set up
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// don't want this to get too messy, set up routes else where
app.use('/api',routes);

// Ears to the ground!
app.listen(process.env.PORT_BACKEND || 3001, () => console.log(`Listening on ${process.env.PORT}`));
