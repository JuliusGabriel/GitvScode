const con = require('../config/db.js');

const cadastrar = async ({nome,cpf,email,senha}) => {
    const [result] = await con.query("insert into usuarios values (default, ?,?,?,?);",
        [nome,cpf,email,senha]   
    );

    return{
        id:result.insertId,
        nome: nome,
        cpf:cpf,
        email:email
    };
};

const listar = async (req, res) => {
    const [result] = await con.query("SELECT id, nome, email FROM usuarios;");
    return result;
};

const buscar = async (id) => {
    const [result] = await con.query("SELECT id, nome, email FROM usuarios WHERE id = ?;", [id]);
    return result;
};

const excluir = async (id) => {
    const [result] = await con.query("DELETE FROM usuarios WHERE id = ?;", [id]);
    return result.affectedRows;
};

const atualizar = async (id, updates) => {
    const [result] = await con.query("UPDATE usuarios SET nome = ?, cpf = ?, email = ?, senha = ? WHERE id = ?;", 
    [updates.nome, updates.cpf, updates.email, updates.senha, id]);
    return result;
};

const alterar = async (id, updates) => {
    const [result] = await con.query("UPDATE usuarios SET nome = ?, cpf = ?, email = ?, senha = ? WHERE id = ?;", [updates.nome, updates.cpf, updates.email, updates.senha, id]);
    return result;
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    excluir,
    atualizar,
    alterar
};
