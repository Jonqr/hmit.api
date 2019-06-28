require('../models/projeto-model');
const mongoose = require('mongoose');
const projetoModel = mongoose.model('Projeto');

class projetoRepository {

    constructor() {

    }

    //function post 
    async create(data) {

        let projeto = new projetoModel(data);
        let resultado =  projeto.save();
        return resultado;
    }
    async update(id,data) {
        

        await projetoModel.updateOne(id, {$set: data});
        let resultado = await projetoModel.findById(id);
        return  resultado;
    }

    async getAll (){
        return await projetoModel.find();
    }
    async getById(id){
        return await projetoModel.findById(id);
    }
    async delete(id){
        return await projetoModel.findByIdAndRemove(id);
    }
}

module.exports = projetoRepository;