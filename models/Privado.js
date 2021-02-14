/*const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcrypt')

const schemaUser = new Schema({
    nombre: { type: String },
    useremail: { type: String, required: true},
    userpass: { type: String, required: true },

})

schemaUser.pre('save', function(next) {
    bcrypt.hash(this.userpass, 10)
        .then(hash=>{
            this.userpass = hash
            next()
        })
})

class User {
    errores = []

    //constructor
    //get set
    get errores() {
        if (this.userpass == "") this.errores.push({ error: "email vacio, campo obligatorio" })
        if (this.userpass== "") this.errores.push({ password: "password vacio, campo obligatorio" })
        return errores
    }
    
    //comprobar password

    comprobarPWD(password) {
        return bcrypt.compare(userpass,this.userpass)
            .then(res => {return res})                 
    }

}

schemaUser.loadClass(User)
module.exports = mongoose.model('User', schemaUser)*/