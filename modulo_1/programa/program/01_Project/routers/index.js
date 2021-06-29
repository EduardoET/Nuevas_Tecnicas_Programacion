//traemos el paquete 
const { Router } = require('express')
const { DataValidator } = require('../Middlewares/DataValidator')
const {User}= require('../lib/Schema/User') 

//inicializamos router
const router = Router()

const {} = require("../Middleware/DataValidator")

//creacion de endpoint

.get('/', (req, res)=>{
    res.send("HOLA MUNDO CON EXPRESS JS")
})



.get("/saludo", DataValidator("query", User), (req, res) => {
    //req.query

    //console.log(req, query )
    const { query: {nombre, apellido} 
     } = req;

    // const nombre = req.query.nombre
    // const apellido = req.query.apellido

    res.json({
        saludo : `HOLA SOY ${nombre} ${apellido}`,
    })
})
.get('/saludo/:nombre', (req, res) => {
    const{ params} = r
    //const nombre = req.params.nombre
    res.json({
        nombre: params.nombre
    })
})


//exportamos las rutas
module.exports.RouterIndex = router 

