const mongoose = require('mongoose');

const AtletaSchema = new mongoose.Schema({
    nome: String,
    senha: String,
    email: String,
    data_cadastro : Date
});

module.exports = mongoose.model('Atleta', AtletaSchema)