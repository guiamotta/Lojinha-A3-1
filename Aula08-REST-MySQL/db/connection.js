//realiza conexao com o banco de dados usando os parametros abaixo
var conn = require("knex")( {
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "loja"
    }
})

module.exports = conn;