'use strict'

const express = require('express');
const router = express.Router();
const ctr = require('../controllers/usuario-controller');
//const auth = require('../middlewares/authenctication');
let _ctrl = new ctr();

//router.post('/autenticar',_ctrl.autenticar);
router.get('/', _ctrl.get);
router.get('/:id', _ctrl.getById);
router.post('/', _ctrl.post);
router.put('/:id', _ctrl.put);
router.delete('/:id', _ctrl.delete);


module.exports = router;