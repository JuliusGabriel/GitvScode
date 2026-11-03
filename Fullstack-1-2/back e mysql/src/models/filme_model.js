const fin = require('../config/db.js');

const cadastrarFilmes = async (req, res) => {
    const { titulo, diretor, ano, genero } = req.body;
    const [result] = await fin.query("INSERT INTO filmes (titulo, diretor, ano, genero) VALUES (?, ?, ?, ?);",
        [titulo, diretor, ano, genero]
    );
    return result;
}

const listarFilmes = async (req, res) => {
    const [filmes] = await fin.query("SELECT * FROM filmes;");
    return filmes;
}

module.exports = {
    cadastrarFilmes, 
    listarFilmes
}