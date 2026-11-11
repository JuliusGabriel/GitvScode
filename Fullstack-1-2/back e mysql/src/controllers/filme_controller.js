const filme = require('../models/filme_model');

const cadastrar = async (req, res) => {
    try {
        const {nome_filme, idioma, quantidade} = req.body;

        let retorno = await filme.cadastrar(nome_filme, idioma, quantidade);
        res.json(retorno).status(201).end();
    }catch (err){
         res.json({erro: err.message }).status(500).end();
    }
};

const listar = async (req, res) => {
    try {
        const filmes = await filme.listar();
        res.status(200).json(filmes).end();
    } catch (error) {
        res.status(500).json({ erro: error.message }).end();
    }
};

module.exports = {
    cadastrar, 
    listar
}