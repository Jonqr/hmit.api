'use strict'

require('../models/projeto-model'); // precisa importar ou não vai enteder o processo !
const repository = require('../repositories/projeto-repository');

function projetoController(){

}

projetoController.prototype.post = async (req, res) => {
    let  resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
};
projetoController.prototype.put = async (req, res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
};
projetoController.prototype.get = async (req, res) => {
    let lista = await new repository().getAll();
   res.status(200).send(lista); // retorna todas
};
projetoController.prototype.getById = async (req, res) => {
    let lista = await new repository().getById(req.params.id);
    res.status(200).send(lista);
};

projetoController.prototype.delete = async (req, res) => {

    let deletado = await new repository().delete(req.params.id);
    res.status(204).send(deletado);
};


module.exports = projetoController;