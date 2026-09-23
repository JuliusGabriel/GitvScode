const express = require("express");
const items = require("../dados.json");

const mostrarItems = (req, res) => {
    res.send(items);
}

const novoItem = (req, res) => {
    if (req.body) {
        res.send("boa, Item enviado");
        items.push(req.body)
    } else {
        res.send("Pó patrão chegou nada não");
    }
}

const excluirItem = (req, res) => {
    const id = req.params.id;

    items.forEach((pedido, indice) => {
        if (pedido.id == id) {
            pedido.splice(indice, 1);
        }
    });

    res.send("Ai sim em, pagao se foi");
}

const alterarItem = (req, res) => {
    const id = req.params.id;
    const dados = req.body;

    items.forEach((pedido) => {
    if (pedido.id == id) {
            pedido.item = dados.item;
            pedido.local = dados.local;
            pedido.dataRegistro = dados.dataRegistro;
            pedido.valor = dados.valor;
            pedido.patrimonio = dados.patrimonio;
        }
    });
    res.send("Alteração feita com sucessow")
}

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const porta = 3000;

app.put("/:id", alterarItem);
app.delete("/:id", excluirItem);
app.post("/", novoItem);
app.get("/", mostrarItems);

app.listen(porta, () => {
    console.log(`servidor: http://localhost:${porta}`);
});