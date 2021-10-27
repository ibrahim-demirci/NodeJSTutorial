var fs = require('fs');
const { profile } = require('console');

var express = require('express');
const path = require('path');

var routeElectronic = require('./server/routes/electronicRoute');


var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/electronic', routeElectronic)


app.listen(8000);


