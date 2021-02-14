const User = require('../models/User')

const daoUser = {}

daoUser.guardar = function save(user) {
  return new Promise((resolved,reject) => {
    let u = new User(user)
    u.save()
    resolved(u)
  })

}
//se encarga de buscar usuarios findOne busca el user
//que tiene ese email
daoUser.getUserByEmail = function getUserByEmail(email) {
  return new Promise((resolved) => {
    resolved(User.findOne({ email: email }))
    console.log(email)
  })
  

}
//este metodo recibe las credenciales y las busca en la base de datos
//llamamos comprobarPWD para comprobar si user coincide con
//credenciales.password(credenciales viene del formulario)
//si coinciden devuelve true sino devuelve false
daoUser.login = function login(credenciales) {
  return new Promise((resolved,reject) => {
    daoUser.getUserByEmail(credenciales.email)
      .then( async user => {        
        let respuesta = await user.comprobarPwd(credenciales.password)
        //console.log(respuesta)
        resolved(respuesta)
      })
      .catch(err=>reject(err))
 })
}
/*daoUser.login=function login(credenciales){
  return new Promise((resolved,reject)=>{
      daoUser.getUserByEmail(credenciales.email)
      
          .then(async user=>{
            console.log(user)
              if(user==null)
                  resolved({resultado:true,mensaje:{user:"usuario incorrecto"}})
              else{
                  let respuesta=await user.comprobarPwd(credenciales.password)
                  resolved(respuesta)
                  
              }
          })
          .catch(err=>reject(err))
  })
}
*/

module.exports = daoUser   
