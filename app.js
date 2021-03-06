'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let db = require('./db');
global.__root   = __dirname + '/'; 

let app = express();
app.use(bodyParser.json());

let AuthController = require(__root + 'auth/AuthController');
app.use('/api', AuthController);

module.exports = app;

