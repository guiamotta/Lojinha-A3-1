const produtoController = require("../controllers/produtoController")
const clienteController = require("../controllers/clienteController")

//define os endpoints
function registerRoutes(server) {
  server.get("/", (req, res, next) => {
    res.send({resposta: "Sejam bem-vindos à nossa Lojinha"})
  })

  //endpoints produto
  server.get("/produto", produtoController.getAll)
  server.get("/produto/:idProd", produtoController.getById)
  server.post("/produto", produtoController.create)
  server.put("/produto/:idProd", produtoController.update)
  server.del("/produto/:idProd", produtoController.remove)

  //endpoints cliente
  server.get("/cliente", clienteController.getAll)
  server.get("/cliente/:idClient", clienteController.getById)
  server.post("/cliente", clienteController.create)
  server.put("/cliente/:idClient", clienteController.update)
  server.del("/cliente/:idClient", clienteController.remove) 
}

module.exports = registerRoutes
