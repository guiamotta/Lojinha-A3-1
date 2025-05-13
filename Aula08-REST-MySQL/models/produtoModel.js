const db = require("../db/connection.js")

const Produto = {
  getAll: () => db("produto"),
  getById: (id) => db("produto").where("id", id).first(),
  create: (data) => db("produto").insert(data),
  update: (id, data) => db("produto").where("id", id).update(data),
  remove: (id) => db("produto").where("id", id).delete()
}

module.exports = Produto