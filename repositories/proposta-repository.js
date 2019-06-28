
require('../models/proposta-model');
const mongoose = require('mongoose');
const propostaModel = mongoose.model('Proposta');

class propostaRepository {

    constructor() {

    }

    //function post 
    async create(data) {
        let proposta = new propostaModel(data);
        let resultado =  proposta.save();
        return resultado;
    }
    async update(id,data) {
        

        await propostaModel.findByIdAndUpdate(id, {$set: data});
        let resultado = await propostaModel.findById(id);
        return  resultado;
    }

    async getAll (){
        return await propostaModel.find();
    }
    async getById(id){
        return await propostaModel.findById(id);
    }
    async delete(id){
        return await propostaModel.findByIdAndRemove(id);
    }
}

module.exports = propostaRepository;