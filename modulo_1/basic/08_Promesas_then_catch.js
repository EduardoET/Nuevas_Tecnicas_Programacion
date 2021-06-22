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
promesa(false)
    .then((resultado) => {
        console.log("RESPUESTA POSITIVA",resultado)
    })
    .catch((error) => {
        console.log("ERROR", error)
    })