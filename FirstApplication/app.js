var fs = require('fs');
const { profile } = require('console');

var express = require('express');
const path = require('path');
var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

var indexController = function (req, res) {

    res.sendFile(path.join(__dirname, 'index.html'));

}
var profileController = function (req, res) {

    res.sendFile(path.join(__dirname, 'profile.html'));

}

app.get('/', indexController);
app.get('/profile', profileController);

app.listen(8000);


