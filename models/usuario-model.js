'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const usuarioModel = new schema({

    _id: {trim:true, required:true,type:String},
    email: {trim: true, type: String,  required:true},
    senha: {trim:true, type: String, required:true},
    cadastro: {
        primeiroNome: {trim:true, type:String},
        sobreNome: {trim:true, type:String}, 
    },
    dataCriacao : {type: Date, default:Date.now}
},{versionKey: false});



usuarioModel.pre('save', next=> {
    let now = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = now;
    next();

});

module.exports = mongoose.model('Usuario',usuarioModel);