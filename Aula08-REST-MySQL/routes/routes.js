const produtoController = require("../constrollers/produtoController.js")

//define os endpoints
function registerRoutes(server) {
  server.get("/", (req, res, next) => {
    res.send({"resposta": "Sejam bem-vindos à nossa Lojinha"})
  })

  server.get("/produto", produtoController.getAll)
  server.get("/produto/:idProd", produtoController.getById)
  server.post("/produto", produtoController.create)
  server.put("/produto/:idProd", produtoController.update)
  server.del("/produto/:idProd", produtoController.remove)
}

module.exports = registerRoutes