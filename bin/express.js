/**
 * importa pacote express e bodyparser 
 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/configuration/variables');

//routers
const usuarioRouter = require('../routes/usuario-router');
const projetoRouter = require('../routes/projeto-router');
const propostaRouter = require('../routes/proposta-router');
const vendorRouter = require('../routes/vendor-router');

//Configuração do parse do JSON
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
})

mongoose.connect(variables.Database.connection,{ useNewUrlParser: true });

//configurando as rotas
app.use('/api/usuario',usuarioRouter);
app.use('/api/projeto',projetoRouter);
app.use('/api/proposta',propostaRouter);
app.use('/api/vendor',vendorRouter);

// exportando a API
module.exports = app;