require('../models/vendor-model');
const mongoose = require('mongoose');
const vendorModel = mongoose.model('Vendor');

class vendorRepository {

    constructor() {

    }

    //function post 
    async create(data) {

        let vendor = new vendorModel(data);
        let resultado =  vendor.save();
        return resultado;
    }
    async update(id,data) {
        

        await vendorModel.updateOne(id, {$set: data});
        let resultado = await vendorModel.findById(id);
        return  resultado;
    }

    async getAll (){
        return await vendorModel.find();
    }
    async getById(id){
        return await vendorModel.findById(id);
    }
    async delete(id){
        return await vendorModel.findByIdAndRemove(id);
    }
}

module.exports = vendorRepository;