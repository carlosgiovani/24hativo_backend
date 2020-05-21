const Evento = require('../models/Evento');
const EventoAtleta = require('../models/EventoAtleta');
const EventoSemana = require('../models/EventoSemana');

module.exports = {

    async index (request, response) {
        const { concluido = false } =  request.query;   

        const eventos = await Evento.find({ concluido : concluido });

        return response.json({eventos});
    },

     async recuperarEventoAtivoAtleta (request, response) {
        const { id_atleta, id_evento } =  request.query;  

        var data = await EventoAtleta.findOne({ evento: id_evento, atleta : id_atleta })
                                     .populate({ path: 'evento' , match: { _id: id_evento } })
                                     .populate({ path: 'atleta', match: { _id: id_atleta } });

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
    },

    async salvarEventoSemana (request, response) {
        const { semana, tempo, evento } = request.body;
    
        const eventoSemana = await EventoSemana.create({
           semana,
           tempo, 
           evento
        });
    
        return response.json(eventoSemana);
    },
};