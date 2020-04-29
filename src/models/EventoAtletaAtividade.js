const mongoose = require('mongoose');

const EventoAtletaAtividadeSchema = new mongoose.Schema({
    id_evento: String,
    id_atleta: String,
    semana: Number,
    dia: Number,
    tempo: Number,
    concluido: Boolean,
    pontuacao: Number,
    pontuacao_mensagem: String,
    observacao: String,
    esforco: Number,
    data_cadastro : Date
});

module.exports = mongoose.model('EventoAtletaAtividade', EventoAtletaAtividadeSchema)