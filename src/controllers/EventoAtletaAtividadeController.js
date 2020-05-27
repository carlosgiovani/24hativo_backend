const EventoAtletaAtividade = require('../models/EventoAtletaAtividade');

module.exports = {

    async index (request, response) { 

        const { id_atleta, id_evento } =  request.query;   

        const atividades = await EventoAtletaAtividade.find( { evento: id_evento, atleta : id_atleta });
        
        return response.json({atividades});
    },

    async salvar (request, response) {
        const 
        {
            evento, 
            atleta, 
            data_cadastro ,
            semana,
            dia,
            tempo,
            concluido,
            pontuacao,
            pontuacao_mensagem,
            observacao,
            esforco
        }  = request.body;
    
        const atividade = await EventoAtletaAtividade.create({
            evento, 
            atleta, 
            data_cadastro ,
            semana,
            dia,
            tempo,
            concluido,
            pontuacao,
            pontuacao_mensagem,
            observacao,
            esforco
        });
    
        return response.json(atividade);
    }
};