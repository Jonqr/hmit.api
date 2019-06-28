'use strict'

require('../models/usuario-model'); // precisa importar ou não vai enteder o processo !
const repository = require('../repositories/usuario-repository');

function categoriaUsuario(){

}

categoriaUsuario.prototype.post = async (req, res) => {
    let  resultado = await new repository().create(req.body);
    res.status(201).send(resultado);
};
categoriaUsuario.prototype.put = async (req, res) => {
    let resultado = await new repository().update(req.params.id, req.body);
    res.status(202).send(resultado);
};
categoriaUsuario.prototype.get = async (req, res) => {
    let lista = await new repository().getAll();
   res.status(200).send(lista); // retorna todas
};
categoriaUsuario.prototype.getById = async (req, res) => {
    let lista = await new repository().getById(req.params.id);
    res.status(200).send(lista);
};

categoriaUsuario.prototype.delete = async (req, res) => {

    let deletado = await new repository().delete(req.params.id);
    res.status(204).send(deletado);
};


module.exports = categoriaUsuario;