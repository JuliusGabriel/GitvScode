const con = require('../config/db.js');

const cadastrar = async (nome_filme, idioma, quantidade ) => { 

    const [result] = await con.query(
        "INSERT INTO filmes VALUES (default, ?,?,?);",
        [nome_filme, idioma, quantidade] 
    );
    return{ 
        id:result.insertId, 
        nome_filme: nome_filme, 
        idioma: idioma, 
        quantidade: quantidade 
    };
}

const listar = async () => {
    const [filmes] = await con.query("SELECT * FROM filmes;");
    return filmes;
}

module.exports = {
    cadastrar, 
    listar
}