const mongoose = require('mongoose');

const EventoSchema = new mongoose.Schema({
    titulo: String,
    data_inicio: Date,
    data_termino: Date,
    data_cadastro : Date,
    concluido: Boolean
});

module.exports = mongoose.model('Evento', EventoSchema)