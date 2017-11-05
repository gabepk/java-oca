var initDB = require("./dbConnection.js"),
    path = require('path'),
    http = require('http'),
    express = require('express');

initDB();

var app = express();
var server = http.createServer(app);

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/');
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
    response.render('index');
});

app.listen(8080);
