const { Router } = require('express');

const EventoController = require('./controllers/EventoController');
const AtletaController = require('./controllers/AtletaController');
const EventoAtletaController = require('./controllers/EventoAtletaController');
const EventoAtletaAtividadeController = require('./controllers/EventoAtletaAtividadeController');

const routes = Router();

routes.get('/eventos', EventoController.index);
routes.post('/evento', EventoController.salvar);
routes.get('/eventoativoatleta', EventoController.recuperarEventoAtivoAtleta);

routes.get('/eventosatleta', EventoAtletaController.index);
routes.post('/eventoatleta', EventoAtletaController.salvar);


routes.get('/atletas', AtletaController.index);
routes.get('/atleta/login',  AtletaController.login);
routes.post('/atleta', AtletaController.salvar);

routes.get('/atividades', EventoAtletaAtividadeController.index);
routes.post('/atividade', EventoAtletaAtividadeController.salvar);


module.exports = routes;