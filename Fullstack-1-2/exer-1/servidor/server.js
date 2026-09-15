const express = require("express")
const pedidos = require("../dados.json")

const mostrarPedidos = (req, res) => {
    Calcularimc()
    res.send(pedidos)
}

const novaConsulta = (req, res) => {
    if(req.body){
        res.send("pedido recebido, calma meu mano")
        pedidos.push(req.body)
    }else{
        res.send("Erro ao receber pedido")
    }
}

const Calcularimc = () => {
    pedidos.forEach(p => {
        p.imc = (p.altura * p.altura) / p.peso 
    })
}

const app = express()
app.use(express.urlencoded({extended:true}))
const porta = 3000

app.post("/", novaConsulta)
app.get("/", mostrarPedidos)

app.listen(porta, () => {
    console.log(`servidor: http://localhost:${porta}`)
    console.log(`cliente: http://localhost:5500/cliente/`)
})