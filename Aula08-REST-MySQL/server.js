const restify = require("restify")
const registerRoutes = require("./routes/routes.js")

//cria o servidor

const server = restify.createServer( {
    name: "Lojinha" ,
    version: "2.0.0"
})

server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser())
server.use(restify.plugins.bodyParser())

registerRoutes(server)

server.listen(8001, function(){
    console.log( "%s executando em: %s" , server.name, server.url)
} )
