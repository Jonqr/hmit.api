'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;
const vendorModel = new schema({

    _id: {trim:true, required:true,type:String},
    projeto: {trim: true, type: String,  required:true},
    proposta: {trim:true, type: String, required:true},
    entregas: {
        primeiraEtapa: {trim:true, type:String},
        segundaEtapa: {trim:true, type:String},
        terceiraEtapa: {trim:true, type:String},
        quartaEtapa: {trim:true, type:String},
        quintaEtapa: {trim:true, type:String},
        sextaEtapa: {trim:true, type:String},
    },
    concluir: {type:Boolean},
    status:{type:Boolean},
    dataCriacao : {type: Date, default:Date.now}
},{versionKey: false});



vendorModel.pre('save', next=> {
    let now = new Date();
    if(!this.dataCriacao)
        this.dataCriacao = now;
    next();
});
module.exports = mongoose.model('Vendor',vendorModel);