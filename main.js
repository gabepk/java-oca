
var initDB = require("./dbConnection.js")

initDB();

var server = require("http")
    .createServer(function(request, response) {
        response.write("rodou");
        response.end();
    });

server.listen(8080);


