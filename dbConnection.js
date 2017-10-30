
module.exports = function() {
  var mysql = require("mysql");
  
  var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ocadb"
  })
  
  conn.connect(function(err) {
    if (err) {
      console.log(" [ERRO] Erro ao conectar com BD\n");
      throw err;
    }
  
    conn.query("SELECT * FROM card", function(err, result, fields) {
      if (err) {
        console.log(" [ERRO] Erro ao selecionar cards\n");
        throw err;
      }
      console.log(result.length);
    });
  });
}

