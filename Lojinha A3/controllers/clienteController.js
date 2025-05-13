const Cliente = require("../models/clienteModel")
const errors = require("restify-errors")
const clienteView = require("../views/clienteView")

//função que retorna todos os clientes
async function getAll(req, res){
  try{
    const clientes = await Cliente.getAll()
    res.send(clienteView.viewAllClients(clientes))
  }
  catch (err){
    res.send(new errors.InternalServerError("Erro ao buscar clientes"))
  }
}

//função que retorna um cliente baseado em seu ID
async function getById(req, res){
  const id = req.params.idClient
  try{
    const cliente = await Cliente.getById(id)
      if (!cliente){
        res.send(404, {message: `O cliente com ID ${id} não foi encontrado`})
      }
      res.send(clienteView.viewClient(cliente))
  }
  catch (err){
    res.send(new errors.InternalServerError(`Erro ao buscar cliente com ID ${id}`))
  }
}

//função que cria um cliente baseado nos dados fornecidos
async function create(req, res){ 
  try{
    const [id] = await Produto.create(req.body)
    const clienteNew = await Produto.getById(id)
    res.send(201, clienteView.viewClient(clienteNew))
  }
  catch (err){
    res.send(new errors.InternalServerError("Erro ao criar cliente"))
  }
}

//função que atualiza os dados de um cliente baseado nos dados fornecidos
async function update(req, res){
  const id = req.params.idClient
  try{
    const clienteUpdated = await Cliente.update(id, req.body)
    if (!clienteUpdated){
      res.send(404, {message: `O cliente com ID ${id} não foi encontrado`})
    }
    res.send(200, {success: true})
  }
  catch (err){
    res.send(new errors.InternalServerError(`Erro ao atualizar cliente com ID ${id}`))
  }
}

//função que deleta um cliente baseado no seu ID
async function remove(req, res){
  const id = req.params.idClient
  try{
    const clienteDeleted = await Cliente.remove(id)
    if (!clienteDeleted){
      res.send(404, {message: `O cliente com ID ${id} não foi encontrado`})
    }
    res.send(200, {success: true})
  }
  catch (err){
    res.send(new errors.InternalServerError(`Erro ao remover cliente com ID ${id}`))
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