const express = require('express')
const rtUser = express.Router()
const User = require('../models/User')
const daoUser = require('../dao/daoUser')

/*rtUsers.get('/nuevo',(req,res)=>{
    res.render('objetos/register')
})*/

rtUser.post('/guardar', function (req, res) {
    daoUser.guardar(req.body)
        .then(resp => {
            res.render('user/register')
        })

})
rtUser.get('/login', (req, res) => {
    res.render('user/reg_user')
})
rtUser.post('/login', (req, res) => {
    //console.log(req.body)
    daoUser.login(req.body)
        .then(respuesta => {
            console.log(respuesta)
            if (respuesta == true)           
                res.render('objetos/home')
            else
                res.render('user/register', { body: req.body, mensaje: 'usuario o contraseña erroneos' })
               
        })

})




module.exports = rtUser