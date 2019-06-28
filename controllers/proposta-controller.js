'use strict'

require('../models/proposta-model'); // precisa importar ou não vai enteder o processo !
const repository = require('../repositories/proposta-repository');

function propostaController(){

}

propostaController.prototype.post = async (req, res) => {
    let  resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
};
propostaController.prototype.put = async (req, res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
};
propostaController.prototype.get = async (req, res) => {
    let lista = await new repository().getAll();
   res.status(200).send(lista); // retorna todas
};
propostaController.prototype.getById = async (req, res) => {
    let lista = await new repository().getById(req.params.id);
    res.status(200).send(lista);
};

propostaController.prototype.delete = async (req, res) => {

    let deletado = await new repository().delete(req.params.id);
    res.status(204).send(deletado);
};


module.exports = propostaController;