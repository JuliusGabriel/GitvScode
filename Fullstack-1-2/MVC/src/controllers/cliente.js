const clientes = require("../../dados/clientes.json");

const listar = (req, res) => {
    res.json(clientes);
};

const criar = (req, res) => { 
    const dados = req.body;
    dados.id = clientes.length + 1;
    clientes.push(dados);
    res.status(201).json(dados);
    res.json("Cliente criado com sucesso");
}

const alterar = (req, res) => { 
    const id = req.params.id;
    const dados = req.body;

    clientes.forEach((cliente) => {
        if (cliente.id == id) {
            cliente.cpf = dados.cpf;
            cliente.nome = dados.nome;
        }
    })
    res.json("Cliente alterado com sucesso");
    
}

const excluir = (req, res) => {
    const id = req.params.id;

    clientes.forEach((cliente, index) => {
        if (cliente.id == id) {
            clientes.splice(index, 1);
        }  
    })
    res.json("Cliente excluído com sucesso");
}

module.exports = {
    criar, listar, alterar, excluir
}