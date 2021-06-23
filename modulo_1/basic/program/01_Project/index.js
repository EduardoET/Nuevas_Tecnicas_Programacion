const express = require('express')

//genera una aplicacion express 
const app = express ()
//endpoint
app.get('/', (req, res)=>{
    res.send("HOLA MUNDO CON EXPRESS JS")
})

app.listen(3000, ()=>{
    console.log("servidor escuchando en http://localhost:3000")
})


