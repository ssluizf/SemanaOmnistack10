const { Router } = require("express");
const DevController = require("./controllers/DevController")
const SearchController = require("./controllers/SearchController")

const routes = Router();

// Métodos Http: get, post, put, delete
// Tipos de Parâmetros:

// Query Params: req.query (Filtros, paginação, ordenação, ...)
// Route Params: request.params (Indentificar um recurso na alteração ou remoção)
// Body: request.body (Dados para uma criação ou alteração de um registro)

// Mongo DB: (não-relacional)

// index, show, store, update, destroy

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes