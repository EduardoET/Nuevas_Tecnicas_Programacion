// como se hacia antes

function Rectangulo(base, altura){
    this.base = base
    this.altura = altura
}
Rectangulo.prototype.calcularArea = function(){
    return this.base * this.altura
}
var rectangulo = new Rectangulo(6, 3)

console.log(rectangulo.calcularArea())
console.log(rectangulo.base)

//Declaracion de clases 

class Rectangulo2 {
    constructor(base, altura){
        this.base = base
        this.altura = altura
    }
    calcularArea(){
        return this.base * this.altura
    }
}

var rectangulo2 = new Rectangulo2(6, 3)
console.log(rectangulo.calcularArea())

/* 
    DEBER 
*/

class  Punto {
    constructor ( x , y ) {
        esto.x  =  x ;
        esto.y  =  y ;
    }
    estática  Distancia(a,b) {
const  dx  = a.x - b.x 
const  dy  = a.y - b.y 
 devuelve Math.sqrt( dx  *  dx +  dy  *  dy ) 
    }
   
}
const  p  =  nuevo Punto( 15 , 7 ) 
const  punto  =  new Punto ( 6 , 8 ) 

consola . log ( punto.Distancia ( p , punto ) ) 
// CLASE PERSONA Y ESTUDIANTE
class  Personaa {
    constructor ( nombre ) {
        esto . nombre  =  nombre ;
        esto . apellido  =  apellido ;
    }

}
consola . registro ( Personaa ) ;
  estudiante de clase extiende  Personaa {
     constructor ( nombre , apellido , edad ) {
         super ( nombre ) ;
        super ( apellido ) ;
        esto . edad ;

     }
 }
 consola . registro ( Personaa ) ;
 var  persona  =  nueva  Persona( "EDUARDO" ) ;
 var  estudiante  =  new  estudiantee ( "EDUARDO" , "TACO" , 26 ) ;