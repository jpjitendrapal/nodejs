var http = require("http");

var server = http.createServer(function(req, res){
    console.log("Got the response");
    res.write("Hi");
    res.end();
});

server.listen(3000);
