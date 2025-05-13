const produtoController = require("../controllers/produtoController")

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
  server.get("/cliente", produtoController.getAll)
  server.get("/cliente/:idClient", produtoController.getById)
  server.post("/cliente", produtoController.create)
  server.put("/cliente/:idClient", produtoController.update)
  server.del("/cliente/:idClient", produtoController.remove) 
}

module.exports = registerRoutes