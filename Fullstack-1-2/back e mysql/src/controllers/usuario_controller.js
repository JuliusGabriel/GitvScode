const usuario = require("../models/usuario_model");

const cadastrar =  async (req, res) => {
    try {
        const {nome, cpf, email, senha} = req.body;

        // let retorno = usuario.cadastrar({nome, cpf, email, senha});
        let retorno = await usuario.cadastrar(req.body);

        res.json(retorno).status(201).end();
    }catch (error) {
        res.json({err: error.message }).status(500).end();
    }
};

const listar = async (req, res) => {
    try {
        const usuarios = await usuario.listar();
        res.status(200).json(usuarios).end();
    } catch (error) {
        res.status(500).json({ erro: error.message }).end();
    }
};

const buscar = async (req, res) => {
    try {
        const id = req.params.id;
        const info = await usuario.buscar(id);

        if(info.length === 0) {
            res.status(404).json({info: "Usuario não encontrado"}).end()
        } else { 
            res.status(200).json(info[0]).end();
        }

    } catch (error) {
        res.status(500).json({ erro: error.message }).end();
    }
};

const excluir = async (req, res) => {
    try {
        const id = req.params.id;
        const usuarioDeletado = await usuario.excluir(id);
    
        if (usuarioDeletado === 0) {
            res.status(404).json({ mensagem: "Usuário não encontrado" }).end();
        } else { 
        res.status(200).json({usuario: usuarioDeletado}).end();
        }
    } catch (error) {
        res.status(500).json({ erro: error.message }).end();
    }
};

const atualizar = async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        await usuario.atualizar({ params: { id }, body: updates });
        res.status(204).json({ mensagem: "Usuário atualizado com sucesso" }).end();
    } catch (error) {
        res.status(500).json({ erro: error.message }).end();
    }
}

module.exports = {
    cadastrar,
    listar,
    buscar,
    excluir,
    atualizar
};