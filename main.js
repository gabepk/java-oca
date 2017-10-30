var initDB = require("./dbConnection.js");
var http = require('http');
var fs = require('fs');

initDB();

fs.readFile("./index.html", function (err, html) {
    var server = http.createServer(function(request, response) {
        //response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end(); 
    });

    server.listen(8080);
});

