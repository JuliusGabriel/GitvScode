const express = require('express');

const routes = express.Router();

const usuarioController = require('../controllers/usuario_controller');

routes.post('/cadastrar', usuarioController.cadastrar);
routes.get('/listar', usuarioController.listar);
routes.get('/buscar/:id', usuarioController.buscar);
routes.delete('/delete/:id', usuarioController.excluir);
routes.put('/atualizar/:id', usuarioController.atualizar);

module.exports = routes;