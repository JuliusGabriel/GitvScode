const express = require("express");
const router = express.Router();

const Cliente = require("./controllers/cliente")
const Pedidos = require("./controllers/pedidos")
const Item = require("./controllers/itens")

const rotainicial = (req, res) => {
    res.json({mensagem: "chegando aqui chefe caldown"})
} 

router.get("/", rotainicial)

router.post("/clientes", Cliente.criar)
router.get("/clientes", Cliente.listar)
router.put("/clientes/:id", Cliente.alterar)
router.delete("/clientes/:id", Cliente.excluir)

router.post("/pedidos", Pedidos.criar)
router.get("/pedidos", Pedidos.listar)
router.put("/pedidos/:id", Pedidos.alterar)
router.delete("/pedidos/:id", Pedidos.excluir)

router.post("/items", Item.criar)
router.get("/items", Item.listar)
router.put("/items/:id", Item.alterar)
router.delete("/items/:id", Item.excluir)

module.exports = router;