const EventoAtleta = require('../models/EventoAtleta');
const EventoAtletaAtividade = require('../models/EventoAtletaAtividade');


module.exports = {

    async index (request, response) { 

        const { id_atleta } =  request.query;   

        const eventosAtleta = await EventoAtleta.find({ id_atleta: id_atleta });

        return response.json({eventosAtleta});
    },


    async salvar (request, response) {
        const { evento, atleta, data_cadastro } = request.body;
    
        const eventoAtleta = await EventoAtleta.create({
            evento, 
            atleta,
            data_cadastro
        });
    
        return response.json(eventoAtleta);
    }
};