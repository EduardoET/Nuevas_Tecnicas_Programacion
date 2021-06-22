/**
 * PROMESAS
 */

function promesa(bandera){
    return new Promise((resolve, reject) => {
        if (bandera) {
        setTimeout(() => {
            resolve("PETICION RESUELTA");
        }, 3000);
    } else {
        reject("LA OPREACION FALLO")
        }
    })
}
// promesa(false)
//     .then((resultado) => {
//         console.log("RESPUESTA POSITIVA",resultado)
//     })
//     .catch((error) => {
//         console.log("ERROR", error)
//     })


var segundaPromesa = () => new Promise((resolve, reject) => {
    if (bandera) {
        setTimeout(() => {
            resolve("PETICION RESUELTA");
        }, 3000);
    } else {
        setTimeout(() => {   
        reject("LA OPREACION FALLO")
        }, 2000);
    }
})

segundaPromesa(true)
    .then ((respuesta) => {
        console.log(respuesta)
    })
    .catch((error) => {
        console.log(error)
    })

promesa(true) //peticion de clientes
    .then((respuesta) => { //respuesta de lista de cliente
        console.log(respuesta)
        return segundaPromesa(true) //compras del cliente
    })
    .then((respuesta) => { //respuesta de la segunda promesa
        console.log(respuesta)
    })
    .catch((error) => {
        console.log(error)
    })