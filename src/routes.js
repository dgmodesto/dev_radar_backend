const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchControllers = require('../src/controllers/SearchController');
const routes = Router();
// Tipos de parâmetros

// Queries Params : request.query (Filtros, ordenação, paginação, ...) (Geralmente utilizado em Gets)
// Route params: request.param  (Identificar recurso na alteração e edição),(Geralmente utilizado em Put e Delete)
// Body: request.body (Dados para criação ou alteração de um registro) (Geralmente utilizado em Post e Put)


routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchControllers.index);

module.exports = routes;