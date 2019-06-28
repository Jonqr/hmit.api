require('../models/usuario-model');
const mongoose = require('mongoose');
const usuarioModel = mongoose.model('Usuario');

class usuarioRepository {

    constructor() {

    }

    //function post 
    async create(data) {

        let usuario = new usuarioModel(data);
        let resultado =  usuario.save();
        return resultado;
    }
    async update(id,data) {
        

        await usuarioModel.updateOne(id, {$set: data});
        let resultado = await usuarioModel.findById(id);
        return  resultado;
    }

    async getAll (){
        return await usuarioModel.find();
    }
    async getById(id){
        return await usuarioModel.findById(id);
    }
    async delete(id){
        return await usuarioModel.findByIdAndRemove(id);
    }
}

module.exports = usuarioRepository;