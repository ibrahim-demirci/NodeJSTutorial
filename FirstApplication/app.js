var fs = require('fs');
const { profile } = require('console');

var express = require('express');
const path = require('path');

var ctrlElectronic = require('./ElectronicController');






var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));



app.get('/electronic', ctrlElectronic.index);
app.get('/electronic/computer', ctrlElectronic.computer);

app.listen(8000);


