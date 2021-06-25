//traemos el paquete 
const { Router } = require('express')

//inicializamos router
const router = Router()

//creacion de endpoint

.get('/', (req, res)=>{
    res.send("HOLA MUNDO CON EXPRESSJS")
})


.get("/saludo", (req, res) => {
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
