// asignacion
//=

// comparaciones 
/*
    ==
    ===

console.log( 2 == 2);
console.log(2 === '2');
console.log( 2 == '2');
*/

/*
    != 
    console.log(2 != 2);
*/
/*
    <
    >
    <=
    >=
*/ 

// Operadores  de asignacion compuestos 

/*
    += / x = x + y
    += / x = x - y
    *=
    /=
    %=
    var numero = 3
    numero -= 2;
    console.log(numero);

*/

//Operadores artimeticos
/*
    +
    -
    *
    /
    %
*/

// desestructuracion objetos 
var persona = { nombre: "Eduardo",
 apellido: "Taco",
  edad: 27,
   viajes: { destino1: "colombia", destino2: "mexico" } 
};

var { nombre:nombre2, apellido, viajes: { destino1 } } = persona;

console.log(persona);
console.log(nombre2);
console.log(apellido);
console.log(destino1);







