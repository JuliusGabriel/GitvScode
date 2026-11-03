const filme = require('../models/filme_model');

const cadastrarFilmes = async (req, res) => {
    try {
        let retrono = await filme.cadastrarFilmes(req.body);
        res.json(retrono).status(201).end();
    }catch (error){
         res.json({err: error.message }).status(500).end();
    }
};

const listarFilmes = async (req, res) => {
    try {
        const filmes = await filme.listarFilmes();
        res.status(200).json(filmes).end();
    } catch (error) {
        res.status(500).json({ erro: error.message }).end();
    }
};

module.exports = {
    cadastrarFilmes, 
    listarFilmes
}