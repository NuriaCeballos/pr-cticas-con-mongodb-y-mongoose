const express = require('express')
const rtObjetos = express.Router()
const Objeto=require('../models/Objeto')
const daoObjetos = require('../dao/daoObjetos')



rtObjetos.get('/guardar', function (req, res) {
    res.render('objetos/home')
})

rtObjetos.post('/guardar', function (req, res) {
    req.body.foto = `/images/${req.files.foto.name}`

    daoObjetos.guardar(req.body)
        .then (resp =>{
             let archivo = req.files.foto
            archivo.mv(`./public/images/${archivo.name}`, async (err) => {
           //  if (err) return res.status(500).send({ message: err })
            let misObjetos = await daoObjetos.listado()
            res.render('objetos/listado', { objetosPerdidos: misObjetos })
        })
    })
})


rtObjetos.get('/detalles/:id', function (req, res) {
    let id=req.params.id
    daoObjetos.buscarPorId(id)
        .then(obj => {
            res.render('objetos/mod-form',obj)
        })

})


/*rt.post('/detalles',(req,res)=>{
    console.log(req.body)
    res.render('objetos/eliminar')
})*/

module.exports = rtObjetos