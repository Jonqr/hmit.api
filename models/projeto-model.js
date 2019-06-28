'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;


const projetoModel = new schema({
    titulo: {trim:true, required:true, index:true, type:String},
    autor: {type:String,trim:true, required:true},
    descricao: {type:String},
    estrutura:{
        plataforma: {type: String},
        estado: {type:String},
        especificacao:{type:String},
    },
    orcamento: {
        negociavel:{type: String},
        inicial:{type:String},
        final:{type: String}
    },
    prazo:{
        dias: {type:String},
        negociar: {type: String}
    },
    gerenciamento: {
        ativo: {type: String},
        etapas: {type: String}
    },
    contratado:{type: Boolean},
    propostas:{type: Number},
    dataCriacao : {type: Date, default:Date.now}

},{versionKey: false});

projetoModel.pre('save', next => {
    let now = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = now;
    next();

});
module.exports = mongoose.model('Projeto',projetoModel);
