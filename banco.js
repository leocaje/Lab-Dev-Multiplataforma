// -- Criando arquivo banco.js

// Importação do mysql2
const { escape } = require("mysql2")
// Importação do Sequelize
const Sequelize = require("sequelize")

// Criando a conexão com o banco de dados
const sequelize = new Sequelize("ProjetoLDM", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

// Autenticando a conexão com o banco
sequelize.authenticate().then(function() {
    console.log("Conectado ao banco com sucesso")
}).catch(function(erro) {
    console.log("Falha ao se conectar com o banco: " + erro)
})

// Criando entidade cliente
const Clientes = sequelize.define("clientes", {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    celular: {
        type: Sequelize.STRING
    }
})

// Sincronização com o banco
Clientes.sync({ force: true })

// Realizando cadastros na tabela Clientes com bulkCreate (cadastro de vários registros)
Clientes.bulkCreate([
    {
        nome: "Léo",
        endereco: "Rua L",
        bairro: "Itaquera",
        cep: "00000-000",
        telefone: "11 0000-0000",
        celular: "11 90000-0000"
    },
    {
        nome: "Raquel",
        endereco: "Av. R",
        bairro: "Itaquera",
        cep: "11111-111",
        telefone: "11 1111-1111",
        celular: "11 91111-1111"
    },
    {
        nome: "Alex",
        endereco: "Rua A",
        bairro: "Itaquera",
        cep: "22222-222",
        telefone: "12 2222-2222",
        celular: "12 92222-2222"
    },
])