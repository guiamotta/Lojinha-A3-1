const db = require("../db/connection")

const Produto = {
  //método para retornar todos os produtos
  getAll: () => db("produto"),
  //método para retornar um produto dado um id
  getById: (id) => db("produto").where("id", id).first(),
  //método para criar um produto a partir dos dados fornecidos
  create: (data) => db("produto").insert(data),
  //método para atualizar os dados de um produto de certo id a partir dos dados fornecidos
  update: (id, data) => db("produto").where("id", id).update(data),
  //método para deletar um produto com certo id
  remove: (id) => db("produto").where("id", id).delete()
}

module.exports = Produto