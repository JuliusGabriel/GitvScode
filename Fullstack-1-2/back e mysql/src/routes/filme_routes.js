const express = require("express");

const routes = express.Router();

const filmeController = require('../controllers/filme_controller');

routes.post("/cadastro", filmeController.cadastrar);
routes.get("/listar", filmeController.listar);

module.exports = routes;