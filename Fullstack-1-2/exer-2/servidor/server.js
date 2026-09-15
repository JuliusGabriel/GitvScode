const express = require("express")
const partidas = require("../dados.json")

mostrarPartidas = (req, res) => {
    calcularPontos()
    res.send(partidas)
}

NovaPartida = (req, res) => {
    if(req.body){
        res.send("Analisando partidas jogadas")
        paritidas.push(req.body)
    }else {
        res.send("Erro ao analisar partida")
    }
}

const calcularPontos = () => {
    partidas.forEach(p=>{
        p.calcularPontos = p.partidas * p.empate * p.derrotas
    })
}

const app = express()
app.use(express.urlencoded({ extended: true }))
const porta = 3000

app.post("/", novaPartidas)
app.get("/", mostrarPartidas)

app.listen(porta, () => {
     console.log(`servidor: http://locaslhost${porta}`) 
     console.log(`cliente: http://localhost:${porta}`)
    })