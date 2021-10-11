
var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res) {


    console.log(req.url);


    if (req.url == '/') {

        fs.readFile('index.html', function (err, data) {

            res.write(data)

            res.end("Message end")

        })

    } else if (req.url == '/profile') {

        fs.readFile('profile.html', function (err, data) {

            res.write(data)

            res.end("Message end")

        })


    }





});


server.listen(8000);


