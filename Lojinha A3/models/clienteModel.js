const db = require("../db/connection")

const Cliente = {
  //método para retornar todos os cliente
  getAll: () => db("cliente"),
  //método para retornar um cliente dado um id
  getById: (id) => db("cliente").where("id", id).first(),
  //método para criar um cliente a partir dos dados fornecidos
  create: (data) => db("cliente").insert(data),
  //método para atualizar os dados de um cliente de certo id a partir dos dados fornecidos
  update: (id, data) => db("cliente").where("id", id).update(data),
  //método para deletar um cliente com certo id
  remove: (id) => db("cliente").where("id", id).delete()
}

module.exports = Cliente