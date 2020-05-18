const mongoose = require('mongoose');

const EventoAtletaAtividadeSchema = new mongoose.Schema({
    atleta: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Atleta',
        require: true
    },
    evento: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Evento',
        require: true 
    },
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