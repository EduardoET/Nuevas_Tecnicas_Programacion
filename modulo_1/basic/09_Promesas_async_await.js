// ASYNC AWAIT

function promesa(bandera){
    return new Promise((resolve, reject) => {
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
}

(async () => {
    try{
        var respuesta = await promesa(true)
        console.log(respuesta)

    }
    catch(error){
        console.log(error)

    }
})()