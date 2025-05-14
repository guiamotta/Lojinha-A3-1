# 📘 Atividade 1 da A3 - Sistemas Distribuídos e Mobile

## 📌 Atividade Padrões de Projetos

**Desenvolva uma pesquisa sobre padrões de projeto utilizados para desenvolvimento de API REST com Node JS. Desenvolva uma Ficha-Resumo sobre o resultado da pesquisa, escolhendo um padrão de projeto de exemplo.**

**Aplique este padrão de projetos, na construção de uma API, baseada na API que construímos em aula (aquela de produtos). Onde terão rotas (end points) para produto e cliente.**

**Coloque em um repositório git no Github, o código-fonte e a Ficha-Resumo. Envie na postagem, apenas o link deste repositório.**

**Vale 5 pontos dos 40 da A3.**

**Atividade Individual**

-----

**A Ficha-Resumo encontra-se em PDF no repositório.**

**Dentre os padrões de projeto mais utilizados em API's REST NodeJs, pode-se listar
Model View Controller (MVC), Repository Pattern, Service Layer, Factory
Pattern, Middleware Pattern, Router Pattern, Data Transfer Object (DTO) e
Singleton Pattern.**

**O padrão de projeto escolhido para a Lojinha foi o Model-View-Controller (MVC). A
motivação para a escolha foi principalmente a sua boa separação de
responsabilidades, o que facilita a organização, manutenção e escalabilidade do
código. O MVC consiste da divisão do código em três camadas interconectadas:**

- Model consiste na parte lógica da aplicação que gerencia o comportamento
dos dados através de regras de negócios, lógica e funções. Aguarda a
chamada das funções, que permite o acesso aos dados.

- View é a representação dos dados, como uma tabela ou um diagrama. É
onde os dados solicitados do Model são exibidos. No caso da API, os dados
são representados em forma de JSON.

- Controller faz a mediação da entrada e saída, comandando o View e o
Model para serem alterados de forma apropriada conforme o usuário
solicitou.

**Para além do Model, View e Controller, o código também possui um componente
DB dedicado à conexão ao banco de dados ./db/connection.js e outro chamado
Routes dedicado à definição dos endpoints ./routes/routes.js.**

-----

# 🛍️ Lojinha API
## Este projeto implementa uma API RESTful para gerenciamento de produtos e clientes de uma loja, utilizando o padrão de arquitetura Model-View-Controller (MVC).

# 📐 Arquitetura MVC
## A aplicação está dividida em três camadas principais:

### 🔹 Model
**Responsável pela lógica da aplicação e regras de negócio. Gerencia os dados e expõe métodos para manipulá-los.**

**Arquivos:**

- clienteModel.js

- produtoModel.js

**Métodos:**

- getAll — Busca todos os registros.

- getById — Busca um registro pelo ID.

- create — Adiciona um novo registro.

- update — Atualiza um registro existente.

- remove — Remove um registro.

### 🔹 View
**Responsável pela apresentação dos dados. No caso da API, os dados são retornados em JSON.**

**Arquivos:**

- clienteView.js

- produtoView.js

**Funções:**

- view — Formata uma única saída.

- viewAll — Formata múltiplas saídas.

### 🔹 Controller
**Realiza a comunicação entre o Model e a View. Recebe as requisições, aciona os métodos do Model e retorna os dados formatados pela View.**

**Arquivos:**

- clienteController.js

- produtoController.js

## 📁 Outros Componentes

### 📄 server.js
- Cria e inicia o servidor Restify.

**Execute com o comando:** 
```
node server.js
```

### 🔌 db/connection.js
- Realiza a conexão com o banco de dados MySQL.

### 🌐 routes/routes.js
- Define os endpoints da API e encaminha as requisições para os respectivos controladores.

### 🗃️ Banco de Dados
- A API conecta-se ao seguinte banco MySQL:

```
CREATE DATABASE `loja`;

CREATE TABLE `produto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `preço` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `vip` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
```
### 🚀 Tecnologias Utilizadas
- Node.js
- Restify
- MySQL
