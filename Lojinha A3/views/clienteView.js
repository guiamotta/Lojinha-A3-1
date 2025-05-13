//formata a saída JSON de um cliente
function viewClient(cliente) {
  return {
    id: cliente.id,
    nome: cliente.nome,
  }
}

//formata a saída JSON de todos os clientes
function viewAllClients(cliente) {
  return cliente.map(viewClient)
}

module.exports = {
  viewClient,
  viewAllClients
}
