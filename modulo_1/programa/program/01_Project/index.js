const { Router } = require('express')


const express = require('express')

//genera una aplicacion express 
const app = express ()

//endpoint
const {RoterIndex, RouterIndex} = require('./routers/index')

app.use("/", RouterIndex)



app.listen(3000, ()=>{
    console.log("servidor escuchando en http://localhost:3000")
})


