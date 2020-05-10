const Evento = require('../models/Evento');
const EventoAtleta = require('../models/EventoAtleta');

module.exports = {

    async index (request, response) {
        const { concluido = false } =  request.query;   

        const eventos = await Evento.find({ concluido : concluido });

        return response.json({eventos});
    },

     async recuperarEventoAtivoAtleta (request, response) {
        const { id_atleta } =  request.query;  

        //TODO falta filtrar
        var data = await EventoAtleta.findOne().populate('evento').populate('atleta');

        return response.json({data});
    },

    async salvar (request, response) {
        const { titulo, data_inicio, data_termino, data_cadastro, concluido } = request.body;
    
        const evento = await Evento.create({
            titulo, 
            data_inicio, 
            data_termino, 
            data_cadastro, 
            concluido
        });
    
        return response.json(evento);
    }
};