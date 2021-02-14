const express = require('express')
const { listado } = require('../dao/daoObjetos')
const daoObjetos = require('../dao/daoObjetos')
const rtMain = express.Router()
const Objeto = require('../models/Objeto')
//const daoObjetos=require('../dao/daoObjetos')

//aqui te creas las rutas get, post, etc.. que necesies

rtMain.get('/', function (req, res) {
    res.render('user/register')
})


module.exports = rtMain