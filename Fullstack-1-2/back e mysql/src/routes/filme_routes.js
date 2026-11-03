const express = require('express');

const routes = express.Router();

const filmeController = require('../controllers/filme_controller');

routes.post('/assinar', filmeController.cadastrarFilmes);
routes.get('/ver', filmeController.listarFilmes);
routes.get('/pesquisar/:id', filmeController.buscarFilmes);
routes.delete('/devolver/:id', filmeController.excluirFilmes);
routes.put('/atualiza/:id', filmeController.atualizarFilmes);

module.exports = routes;