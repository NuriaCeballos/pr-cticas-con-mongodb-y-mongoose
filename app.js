const express = require('express')
const app = express()
const rtMain = require('./routes/rtMain')
const rtUser = require('./routes/rtUser')
const rtObjetos = require('./routes/rtObjetos')
var exphbs = require('express-handlebars')
const conexion = require('./conexion')
const fileUpload = require('express-fileupload')
//const rtNewregister = require('./routes/rtNewregister')

//configuración del motor de plantillas handlebars
app.engine('.hbs', exphbs({
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

//middlewares
app.use(express.static(__dirname + '/public'))
app.use(fileUpload())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//enrutador principal
app.use('/', rtMain)
app.use('/user', rtUser)
app.use('/objetos', rtObjetos)
//app.use('/newregister', rtNewregister)

conexion.on('error', console.error.bind(console, 'Error al conectar a mongo'))
conexion.once('open', () => console.log("Conexión con Mongo OK!!"))

//arrancamos el servidor:
app.listen(3000, (err) => {
    console.log('Server run on port 3000')
})