var fs = require('fs');
const { profile } = require('console');

var express = require('express');
const path = require('path');
var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {

    fs.readFile('index.html', function (err, data) {

        res.write(data)
        res.end("Message end")

    })

})
app.get('/profile', function (req, res) {

    fs.readFile('profile.html', function (err, data) {

        res.write(data)
        res.end("Message end")

    })

})

app.listen(8000);


