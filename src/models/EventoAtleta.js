const mongoose = require('mongoose');

const EventoAtletaSchema = new mongoose.Schema({    
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
    data_cadastro : Date
});

module.exports = mongoose.model('EventoAtleta', EventoAtletaSchema)