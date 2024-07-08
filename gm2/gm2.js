//console.clear()//limpia consola
//console.() sirve solo para veificar la funcionalidad de codigo, solo lo usa el desarrollador
console.log('hola')
console.error('ocurrio un error')//rojo
console.info('informacion')//normal
console.warn('advertencia')//amarillo
console.debug('debug')
//ejemplo
const nombre = 'tomas';
let edad = 18;
edad = 17;
console.log('mi nombre es',nombre, 'y tengo', edad);
if(edad >= 18) {
    console.log('es mayor de edad');
}
else{
    console.error('es menor de edad');
}

//devolucion del tipo de variables
//string, int, boolean, undefined, number
console.log(typeof edad)
console.log(typeof nombre)
var x= 1000
x = {key: 'valor'}// objeto
console.log(x)
function revision(x){
    if (typeof(x) == 'string') {
        alert('x is string')
    }
    else if(typeof(x) == 'number') {
        alert('x is a number')
    }
    else if(typeof(x) =='object'){
        alert('x is an object')
    }
    else if(typeof(x) =='undefined'){
        alert('x is undefined')
    }
}
revision(x)

/*
    Comentario
*/

