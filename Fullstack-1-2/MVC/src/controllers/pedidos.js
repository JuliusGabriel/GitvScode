const pedidos = require("../../dados/pedidos.json")

const listar = (req, res) => {
    subtotais(pedidos)
    res.json(pedidos);
}

function subtotais (pedidos) {
    pedidos.forEach( p => {
        p.subtotais = p.quantidade * p.preco
    })
}

const criar = (req, res) => {  
    const dados = req.body;
    dados.id = pedidos.length + 1;
    pedidos.push(dados);
    res.status(201).json(dados);
    res.json("Pedido criado com sucesso");
}

const alterar = (req, res) => { 
    const id = req.params.id;
    const dados = req.body;

    pedidos.forEach((pedido) => {
        if (pedido.id == id) {
            pedido.cpf = dados.cpf;
            pedido.nome = dados.nome;
        }
    })
     res.json("Pedido alterado com sucesso");
}

const excluir = (req, res) => { 
     const id = req.params.id;

    pedidos.forEach((pedido, index) => {
        if (pedido.id == id) {
            pedidos.splice(index, 1);
        }  
    })
    res.json("Pedido excluído com sucesso");
}

module.exports = {
    criar, listar, alterar, excluir
}