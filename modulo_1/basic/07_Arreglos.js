/*
    CONCAT
*/

var numeros = [1, 2, 3, 4, 5]
var nuevoNumeros = numeros.concat([5, 6, 7, 8, 9])

// console.log(numeros);
// console.log(nuevoNumeros)

/**
    JOIN 
 */
var nombre = ["e", "d", "u", "a", "r", "r", "d", "o"]
// console.log(nombre.join(""));

/**
    SLICE 
 */
// console.log(nombre.slice(2));

/**
 *  index of
 */

//  console.log(nombre.lastIndexOf("r"));

 /**
  *     REVERSE
  */
//  console.log(nombre.reverse())


 /**
  * sort
  */
 var numerosDesordenados = [3, 4, 7, 9, 1, 2, 6]
//  console.log(numerosDesordenados.sort())

 /**
  * SHIfT 
  
  */
// console.log(numerosDesordenados.shift());

/**
  * POP jhas
  */
//  console.log(numerosDesordenados.pop());

 /**
  * Push
  */
  numerosDesordenados.push(2012)
 console.log(numerosDesordenados)


 var pares = [2, 4, 6, 8, 10]
 console.log(pares.map((elemento)=>elemento + 1));