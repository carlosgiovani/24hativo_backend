const EventoAtletaAtividade = require('../models/EventoAtletaAtividade');

module.exports = {

    async index (request, response) { 

        const { id_atleta, id_evento } =  request.query;   

        const atividades = await EventoAtletaAtividade.find({ 
            id_atleta: id_atleta,
            id_evento: id_evento 
        });

        return response.json({atividades});
    },

    async salvar (request, response) {
        const 
        {
            id_evento, 
            id_atleta, 
            data_cadastro ,
            semana,
            dia,
            tempo,
            concluido,
            pontuacao,
            pontuacao_mensagem,
            observacao,
            eforco
        }  = request.body;
    
        const atividade = await EventoAtletaAtividade.create({
            id_evento, 
            id_atleta, 
            data_cadastro ,
            semana,
            dia,
            tempo,
            concluido,
            pontuacao,
            pontuacao_mensagem,
            observacao,
            eforco
        });
    
        return response.json(atividade);
    }
};