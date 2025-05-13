//realiza conexão com o banco de dados usando os parâmetros abaixo
const conn = require("knex") ({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "loja"
    }
})

module.exports = conn