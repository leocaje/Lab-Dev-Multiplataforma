// -- Criando arquivo index.js

// Importação do Express. Armazenamento na variável express
const express = require("express")
// Inicialização da aplicação
const app = express()

// Utilização de callback para criar rotas (utilizar uma função como parâmetro de outra função) 

// Rota GET - Página Inicial
app.get("/", function(req, res) {
    res.send("Página Inicial")
})

// Rota GET - Página Cadastro
app.get("/cadastro", function(req, res) {
    res.send("Página de Cadastro")
})

// Passando parâmetros (nome, sobrenome, idade) para a rota /cadastro e fazendo sua requisição
app.get("/cadastro/:nome/:sobrenome/:idade", function(req, res) {
    res.send("Página de Cadastro" + "<br><br>Nome: " + req.params.nome + 
        "<br>Sobrenome: " + req.params.sobrenome + "<br>Idade: " + req.params.idade)
})

// Inicialização do servidor. Porta 8081
app.listen(8081, function() {
    console.log("Servidor rodando. Porta 8081")
})