// funciones declarativas 
//retorno de valores
function saludar() {
    return "Hola soy Eduardo";
}
//retorno void 
function saludar2() {
    console.log("Hola soy Eduardo")
}
//funciones con parametro 
function saludarConParametro(nombre, apellido) {
    return `Hola soy ${nombre} ${apellido}`
}

//funciones con parametros por defecto 
function saludoConProfesion(nombre="Persona", profesion="Analista de Sistemas"){
    return `Hola ${nombre} mi profesion es ${profesion}`

}
//console.log(saludoConProfesion( "Eduardo", "Desarrollador de Software"))
// console.log(saludarConParametro("Eduardo", "Taco"))
// var resultado = saludar()
// console.log(resultado);
// console.log(saludar());
// saludar2()

/* 
FUNCIONES EXPRESIVAS - FUNCIONES ANONIMAS
*/
var saludoConEdad = function (nombre, edad) {
    return `Hola soy ${nombre} y tengo ${edad} año(s)`
    
}
// console.log(saludoConEdad("Eduardo", 27));

// ARROW FUNCTION - FUNCIONES FLECHA

var saludoConApellido = (nombre, apellido) => `Hola soy ${nombre} ${apellido}`

var sumar = (num1, num2) => num1 + num2

// console.log(saludoConApellido("Eduardo", "Taco"));

// console.log(sumar(2, 3));


//Funciones como parametro de otras funciones 

function saludoConFunciones(nombre, cb){
    return cb(nombre)
}

var misaludo = saludoConFunciones("Eduardo", function(nombre) {
    return `Hola soy ${nombre}`
})

var misaludo2 = saludoConFunciones("Eduardo", (nombre) => `Hola soy ${nombre}`)
console.log(misaludo2);

// setTimeout(() => {
//     console.log("Hola mundo")
// }, 3000)

// setInterval(() => {
//     console.log("Hola mundo")
// }, 2000);


