const Produto = require("../models/produtoModel.js")
const errors = require("restify-errors")

//função que retorna todos os produtos
async function getAll(req, res, next){
    const produtos = await Produto.getAll()
    res.send(200, produtos)
    return next()
}

//função que retorna um produto baseado em seu ID
async function getById(req, res, next){
  const id = req.params.idProd
  const produto = await Produto.getById(id)
  if (!produto){
    return next(new errors.NotFoundError(`O produto com ID ${id} não foi encontrado`))
  }
  res.send(200, produto)
  return next()
}

//função que cria um produto baseado nos dados fornecidos
async function create(req, res, next){ 
  const produtoNew = await Produto.create(req.body)
  res.send(201, produtoNew)
  return next()
}

//função que atualiza os dados de um produto baseado nos dados fornecidos
async function update(req, res, next){
  const id = req.params.idProd
  const produtoUpdated = await Produto.update(id, req.body)
  if (!produtoUpdated){
    return next(new errors.NotFoundError(`O produto com ID ${id} não foi encontrado`))
  }
  res.send(200, produtoUpdated)
  return next()
}

//função que deleta um produto baseado no seu ID
async function remove(req, res, next){
  const id = req.params.idProd
  const produtoDeleted = await Produto.remove(id)
  if (!produtoDeleted){
    return next(new errors.NotFoundError(`O produto com ID ${id} não foi encontrado`))
  }
  res.send(200, produtoDeleted)
  return next()
}

//exporta as funções
module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}
