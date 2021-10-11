
var http = require('http');

var server = http.createServer(function (req, res) {

    res.write("<html><body><h1>H1 Label</h1></body></html>");
    res.end("Message end")


});


server.listen(8000);


