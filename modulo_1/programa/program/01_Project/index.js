const express = require('express')

//genera una aplicacion express 
const app = express ()
//endpoint
app.get('/', (req, res)=>{
    res.send("HOLA MUNDO CON EXPRESSJS")
})

app.get("/saludo", (req, res) => {
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

app.get('/saludo/:nombre', (req, res) => {
        const {
            params: {nombre},
        }= req 

        //const nombre = req.params.nombre
        res.json({
            nombre: nombre
        })
})

app.listen(3000, ()=>{
    console.log("servidor escuchando en http://localhost:3000")
})


