const Atleta = require('../models/Atleta');

module.exports = {

    async index (request, response) { 

        const atletas = await Atleta.find({ });

        return response.json({atletas});
    },

    async login (request, response) {
        const { email = '', senha = ' ' } =  request.query;   

        const atleta = await Atleta.find({ 
            email : email,
            senha : senha 
        });

        return response.json({atleta});
    },

    async salvar (request, response) {
        const { nome, senha, email, data_cadastro } = request.body;
    
        const atleta = await Atleta.create({
            nome, 
            senha, 
            email, 
            data_cadastro
        });
    
        return response.json(atleta);
    }
};