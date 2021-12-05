require('dotenv').config();
require('./db/db');
require('./config');
const express = require('express');
const cors = require('cors')
const expressJwt = require('express-jwt');
const helmet = require('helmet');
const PORT = process.env.PORT || 3000;


const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

// app.use(
//     expressJwt({
//         secret: process.env.JSON_SECRET,
//         algorithms: ['HS256'],
//         requestProperty: process.env.requestProperty
//     }).unless({
//         path: ['/api/login', '/api/register']
//     })
// );

app.use('/api/register', require('./users/register'))
app.use('/api/login', require('./users/login'));
app.use('/api', require('./users'));
app.use('/api', require('./tracks'));
app.use('/api', require('./album'));
app.use('/api', require('./playlist'));

app.listen(PORT, () => {
    console.log("Corriento puerto " + PORT);
});

