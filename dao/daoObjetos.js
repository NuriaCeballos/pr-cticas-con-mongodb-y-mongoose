const Objeto = require('../models/Objeto')

const daoObjetos = {}
//guardar
daoObjetos.guardar = function save(objeto) {
    return new Promise((resolved, reject) => {
        let o = new Objeto(objeto)
        o.save()
        resolved(o)

    })

    /*let o= new Objeto(objeto)
    o.save()*/
}
//listar
daoObjetos.listado = function find() {
    return new Promise((resolved, reject) => {
        resolved(Objeto.find().lean())
    })
}
//buscar
daoObjetos.listarPorTitulo = function findByTitle() {
    return new Promise((resolved, reject) => {
        resolved(Objeto.find({ titulo: titulo }).lean())
    })
}
daoObjetos.buscarPorId=  function findById(id){
    return new Promise ((resolved,reject)=>{
        resolved(Objeto.findOne({_id:id}).lean())
    })

}    

//eliminar

//modificar

module.exports = daoObjetos