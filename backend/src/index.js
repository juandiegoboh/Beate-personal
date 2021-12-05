require('dotenv').config();
require('./db/db');
require('./config');
const express = require('express');
const cors = require('cors')
const expressJwt = require('express-jwt');
const helmet = require('helmet');
const PORT = process.env.PORT || 3000;

const app = express();

// Carpeta public para acceder al frontend
app.use(express.json());
app.use(express.static('public'));
app.use(helmet());

var whitelist = ['http://example1.com', 'http://example2.com']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { Origin: true } // reflect (enable) the requested Origin in the CORS response
  }else{
    corsOptions = { Origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(
    expressJwt({
        secret: process.env.JSON_SECRET,
        algorithms: ['HS256'],
        requestProperty: process.env.requestProperty
    }).unless({
        path: ['/api/login', '/api/register']
    })
);

app.use('/api/register', require('./users/register'))
app.use('/api/login', require('./users/login'));
app.use('/api', require('./users'));
app.use('/api', require('./tracks'));
app.use('/api', require('./album'));
app.use('/api', require('./playlist'));

app.listen(PORT, () => {
    console.log("Corriento puerto " + PORT);
});

