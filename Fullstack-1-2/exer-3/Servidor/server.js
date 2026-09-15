const express = require("express")
const aluno = require("../dados.json")

const MostrarAluno = (req, res) => {
    calcularMedia()
    res.send(aluno)
};

const novoAluno = (req, res) => {
    if(req.body) {
        res.send("Analisando a nota do seu aluno")
        aluno.push(req.body)
    }else{
        res.send("Erro ao ler a nota")
    }
};

const calcularMedia = () => {
    aluno.forEach( p => {
        p.Media = (parseFloat(p.nota1) + parseFloat(p.nota2) + parseFloat(p.nota3)) / 3;
    });
};

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const porta = 3000

app.post("/", novoAluno)
app.get("/", MostrarAluno)
app.post("/Media", calcularMedia)

app.listen(porta, () => { 
    console.log(`Servidor: http://localhost:${porta}`);
    console.log(`Cliente: http://localhost:5500/Cliente/`);
});