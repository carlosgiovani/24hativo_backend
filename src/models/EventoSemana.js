const mongoose = require('mongoose');

const EventoSemanaSchema = new mongoose.Schema({
    semana: Number,
    tempo: Number,
    evento: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Evento',
        require: true 
    },
});

module.exports = mongoose.model('EventoSemana', EventoSemanaSchema)