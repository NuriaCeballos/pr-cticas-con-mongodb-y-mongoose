/*const User = require('../models/Users')
//const mailer = require('../modules/mailer')

const daoUsers = {}

daoUsers.guardar = function save(user) {
    return new Promise((resolved, reject) => {
        let u = new User(user)
        u.save()
            .then(() => resolved("guardado correctamente"))
            .catch(err => resolved(err))
    })
    
}
//se encarga de buscar usuarios
daoUsers.getUsuarioByEmail=function getUserByEmail(useremail){
    return new Promise((resolve)=>{
        resolve(User.findOne({useremail:useremail}))
    })
    
}
daoUsers.login=function login(credenciales){
    daoUsers.getUserByEmail(credenciales.useremail)
        .then(user=>{
            console.log(user)

           // console.log(user.comprobarPwd(credenciales.userpass))
        })
}



module.exports = daoUsers*/