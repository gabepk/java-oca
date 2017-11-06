var path = require('path'),
    http = require('http'),
    mysql = require("mysql"),
    express = require('express'),
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "ocadb"
    });


var app = express();
var server = http.createServer(app);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response){
    connection.query("SELECT * FROM card", function(err, cards, fields) {
        if (err) throw err;

        connection.query("SELECT C.id, T.name FROM card_tag CT INNER JOIN " + 
                "card C INNER JOIN tag T WHERE CT.id_card = C.id AND CT.id_tag = T.id;",
                function(err, tags, fields) {
            if (err) throw err;

            for (var i = 0; i < cards.length; i++) {
                cards[i]["tags"] = [];

                for (var j = 0; j < tags.length; j++) {
                    if (cards[i]["id"] == tags[j]["id"]) {
                        cards[i]["tags"].push(tags[j]["name"]);
                    }
                }
            }

            response.render("index.ejs", {cards : cards});

        });
    });
});

app.listen(8080);
