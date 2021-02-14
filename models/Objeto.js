const mongoose=require('mongoose')
const {Schema}=mongoose

const schemaObjeto = new Schema({
    nombre:{type:String, required:true},
    telefono:{type:String, required:true}, 
    titulo:{type:String,required:true},  
    descripcion:{type:String},
    localizacion:{type:String},
    foto:{type:String, default:'/images/default.png'}
})

class Objeto{

    //constructor
    //get set
    //otros métodos
}

schemaObjeto.loadClass(Objeto)
module.exports=mongoose.model('Objeto',schemaObjeto)