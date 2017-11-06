var http = require("http");

var server = http.createServer(function(req, res){
    try{
        console.log("Got the response");
        res.write("Hi");
        res.end();
    } catch(e){
        console.log("There is some error"+e);
        res.end();
    }
    
});

try{
    server.listen(80);
    console.log("Server is runnning on 80 port");
} catch(e){
    console.log(e)
}

