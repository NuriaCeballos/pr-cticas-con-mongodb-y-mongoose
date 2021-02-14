const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcrypt')

const schemaUser = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, index: true, unique: true },
    city: { type: String, required: true },
    password: { type: String, required: true },
    passwordrepeat: { type: String, required: true },
    employeenumber: { type: String, required: true },
    activo:{type:Boolean, default:false}

})

schemaUser.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash
            next()
        })
})
schemaUser.pre('save', function (next) {
    bcrypt.hash(this.passwordrepeat, 10)
        .then(hash => {
            this.passwordrepeat = hash
            next()
        })
})
class User {
    //errores = []

    //constructor
    //get set
   /* get errores() {
        if (this.userpass == "") this.errores.push({ error: "email vacio, campo obligatorio" })
        if (this.userpass == "") this.errores.push({ password: "password vacio, campo obligatorio" })
        return errores
    }*/

    //comprobar password devuelve true si el pwd
    //coincide y false si no

    comprobarPwd(password) {
        return bcrypt.compare(password, this.password)
            .then(res => { return res })
    }

}


schemaUser.loadClass(User)
module.exports = mongoose.model('User', schemaUser)