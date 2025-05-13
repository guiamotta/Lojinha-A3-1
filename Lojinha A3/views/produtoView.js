//formata a saída JSON de um produto
function viewProduct(produto) {
  return {
    id: produto.id,
    nome: produto.nome,
    preco: produto.preco,
  }
}

//formata a saída JSON de todos os produtos
function viewAllProducts(produtos) {
  return produtos.map(viewProduct)
}

module.exports = {
  viewProduct,
  viewAllProducts
}
