/*const express = require('express')
const rtUsers = express.Router()
const User=require('../models/Users')
const daoUsers = require('../dao/daoUsers')

rtUsers.get('/nuevo',(req,res)=>{
    res.render('objetos/register')
})

rtUsers.post('/guardar',  function (req, res) {
     daoUsers.guardar(req.body)
     .then(resp=>{
         res.render('objetos/home')     
     })
     
})
rtUsers.get('/registro',(req,res)=>{
    res.render('user/newregister')
})






/*rtUsers.get('/comprobar/:pwd',async (req,res)=>{
    let pwd=req.params.pwd
    let u = await daoUsuarios.getUsuarioByEmail('proyectocitas284@gmail.com')
    res.send("La comparación salió: " + await u.comprobarPwd(pwd))
})*/



//module.exports = rtUsers