const Produto = require("../models/produtoModel")
const errors = require("restify-errors")

//função que retorna todos os produtos
async function getAll(req, res){
  try{
    const produtos = await Produto.getAll()
    res.send(produtos)
  }
  catch (err){
    res.send(new errors.InternalServerError("Erro ao buscar produtos"))
  }
}

//função que retorna um produto baseado em seu ID
async function getById(req, res){
  const id = req.params.idProd
  try{
    const produto = await Produto.getById(id)
      if (!produto){
        res.send(404, {message: `O produto com ID ${id} não foi encontrado`})
      }
      res.send(200, produto)
  }
  catch (err){
    res.send(new errors.InternalServerError(`Erro ao buscar produto com ID ${id}`))
  }
  
}

//função que cria um produto baseado nos dados fornecidos
async function create(req, res){ 
  try{
    const produtoNew = await Produto.create(req.body)
    res.send(201, produtoNew)
  }
  catch (err){
    res.send(new errors.InternalServerError("Erro ao criar produto"))
  }
}

//função que atualiza os dados de um produto baseado nos dados fornecidos
async function update(req, res){
  const id = req.params.idProd
  try{
    const produtoUpdated = await Produto.update(id, req.body)
    if (!produtoUpdated){
      res.send(404, {message: `O produto com ID ${id} não foi encontrado`})
    }
    res.send(200, {success: true})
  }
  catch (err){
    res.send(new errors.InternalServerError(`Erro ao atualizar produto com ID ${id}`))
  }
}

//função que deleta um produto baseado no seu ID
async function remove(req, res){
  const id = req.params.idProd
  try{
    const produtoDeleted = await Produto.remove(id)
    if (!produtoDeleted){
      res.send(404, {message: `O produto com ID ${id} não foi encontrado`})
    }
    res.send(200, {success: true})
  }
  catch (err){
    res.send(new errors.InternalServerError(`Erro ao remover produto com ID ${id}`))
  }
}

//exporta as funções
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}
