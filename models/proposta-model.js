'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;



const propostaModel = new schema({
    autor: {trim:true, required:true,index:true, type:String},
    projeto: {trim:true, type: String, required:true},
    info:{
        descricao: {type:String},
        orcamento: {trim: true, type: String},
        prazo: {
            dias:{type:String}
        }
    },gerenciamento:{
        ativo: {type: Boolean},
        entregas: [],
    },
    ativo: {type:Boolean},
    status: {
        aceito:{type:Boolean},
        aguardando:{type:Boolean}
    },
    dataCriacao : {type: Date, default:Date.now}
},{versionKey: false});

propostaModel.pre('save', next=> {
    let now = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = now;
    next();

});

module.exports = mongoose.model('Proposta',propostaModel);