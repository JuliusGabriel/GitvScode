const item = require("../../dados/itens.json");

const listar = (req, res) => {
    res.json(item);
}

const criar = (req, res) => {
    const dados = req.body;
    dados.id = item.length + 1;
    item.push(dados);
    res.status(201).json(dados);
    res.json("Item criado com sucesso");
}

const alterar = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    item.forEach((items) => {
        if (items.id == id) {
            items.cpf = dados.cpf;
            items.nome = dados.nome;
        }
    })
    res.json("Item alterado com sucesso");
}

const excluir = (req, res) => {
    const id = req.params.id;

    item.forEach((items, index) => {
        if (items.id == id) {
            item.splice(index, 1);
        }  
    })
    res.json("Cliente excluído com sucesso");
}

module.exports = {
    listar, criar, alterar, excluir
}