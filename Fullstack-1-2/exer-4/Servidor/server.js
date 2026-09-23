const express = require("express");
const pedidos = require("../dados.json");

const mostrarPedidos = (req, res) => {
    calcSubtotais();
    res.send(pedidos);
}

const calcSubtotais = (req, res) => {
    pedidos.forEach ( p => {
        p.subtotal = p.precoUnitario * p.quantidade
    })
}

const novoPedido = (req, res) => {
    if (req.body) {
        res.send("Boa, pedido enviado!");
        pedidos.push(req.body)
    } else {
        res.send("Erro ao receber o pedido");
    }
}

const excluirPedido = (req, res) => {
    const id = req.params.id;

    pedidos.forEach((pedido, indice) => {
        if (pedido.id == id) {
            pedidos.splice(indice, 1)
        }
    });

    res.send("Pronto meu chefe");
}

const alterarPedido = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    pedidos.forEach((pedido) => {
        if(pedido.id == id) {
            pedido.nome= dados.nome;
            pedido.precoUnitario = dados.precoUnitario;
            pedido.quantidade = dados.quantidade;
            pedido.unidade = dados.unidade;
        }
    });
    res.send("Alteradom meu compatriota nunes!");
}

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
const porta = 3000;

app.put("/", alterarPedido);
app.get("/", mostrarPedidos);
app.post("/", novoPedido);
app.delete("/:id", excluirPedido);

app.listen(porta, () => {
    console.log(`servidor: http://localhost:${porta}`);
});