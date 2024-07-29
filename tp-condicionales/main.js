//ejercicio 1
//Crea un bloque de código que compare dos variables numéricas. Si el número A es mayor que el número B, imprimir en consola ‘El número A es mayor a B‘.
let a = 10;
let b = 5;
if (a > b){
    console.log('El numero A es mayor a B')
} else if (a < b){
    console.log('El numero B es mayor a A')
}else{
    console.log('son iguales')
}

//Ejercicio 2
//Crea un bloque de código que tome la edad de un usuario y la compare con un número de referencia. Si la edad es mayor al número de referencia, imprimir en consola un mensaje.
/* let edad = prompt('ingrese su edad')    
let referenceNumber = 18
if (edad > referenceNumber){
    console.log('La edad es mayor al numero de referencia')
}
*/

//ejercicio 3
//Crea un bloque de código que compare dos números e imprima en consola un valor booleano.
let firstNumber = 20
let secondNumber = 100
if (firstNumber !== secondNumber){
    console.log(true)
}

//ejercicio 4
//Crea un bloque de código que compare dos nombres, y si ambos son iguales imprima en consola el nombre.
let firstName = 'Pedro'
let secondName = 'Pedro'
if(firstName === secondName){
    console.log(firstName)
}

//ejercicio 5
//Crea un bloque de código que compare dos nombres, y si ambos son diferentes imprima en consola un mensaje.
let firstName5 = 'Juan'
let secondName5 = 'Pedro'
if(firstName5 !== secondName5){
    console.log('son diferentes')
}

//ejercicio 6
//Crea un bloque de código que imprima en consola un número en caso de que sea un número negativo.
let n1 = 100 - 200
if (n1 <0){
    console.log(n1)
}

//Ejercicio 7
//Crea un bloque de código que imprima en consola un número en caso de que NO sea un número negativo.
let n2 = 201 - 200
if (n2 > 0){
    console.log(n2)
}

//Ejercicio 8
//Crea un bloque de código que compare dos números. Si el número es par, imprimir en consola ‘El número es par’. De lo contrario, imprimir ‘El número es impar’.
let par = 3
if (par %2 == 2){
    console.log('El numero es par')
} else{
    console.log('el numero es impar')
}

//ejercicio 9
//Crea un bloque de código que compare dos números y luego imprima en consola si es positivo o negativo.
let num1 = 100
let num2 = -50
if (num1 > 0){
    console.log('El numero 1 es positivo')
} else {
    console.log('El numero 1 es negativo')
}
if (num2 > 0){
    console.log('El numero 2 es positivo')
} else {
    console.log('El numero 2 es negativo')
}

//ejercicio 10
//Crea una función que tome de referencia una variable string cuyo valor sea una letra, y luego imprima en consola si es una vocal o una consonante.
/*
let vocal = ['a' , 'e', 'i', 'o', 'u']
let letra = prompt('Ingrese una letra')
let consonante
if (letra === vocal[0] || letra === vocal[1] || letra === vocal[2] || letra === vocal[3] || letra === vocal[4]){
    console.log('es una vocal')
} else {
    console.log(' es una consonante')
}
*/

//ejercicio 11
//Crea un bloque de código que tome de referencia un nombre. Si el nombre ingresado es ‘Pedro’ imprimir en consola ‘Hola Pedro, como estás?’. De lo contrario, imprimir ‘Hola! Cómo te llamas?’.
let referenceName = 'Pedro'
if (referenceName === 'Pedro'){
    console.log('Hola Pedro, como estas?')
} else{
    console.log('Hola, como te llamas')
}

//ejercicio 12
//Crea un bloque de código que tome de referencia la nota de un examen y devuelva ‘Estás aprobado’ si la nota es mayor o igual a 7, o ‘Estás desaprobado’ si la nota es menor a 7.
let nota = 7
 let resultado = (nota >= 7) ? 'Aprobaste' : 'desaprobaste'
 console.log(resultado)

 //ejercicio 13
 //Crea un bloque de código que tome de referencia un número e imprima en pantalla si el número es menor a 10, mayor a 50, o si está entre esos dos valores.

 let nMayor = 51
 if (nMayor < 10){
    console.log('El numero es menor a 10')
 } else if (nMayor >= 50){
    console.log('es mayor a 50')
 } else{
    console.log('esta entre 10 y 50')
 }

 //ejercicio 14
 //Crea un bloque de código que compare dos números. Si ambos números son menores a 10, imprimir en consola el múltiplo. Si ambos números son mayores a 50,  imprimir en consola su suma. Sino, imprimir en consola el primer número menos el segundo.
let numero1 = 9
let numero2 = 1
let multiplo1 = numero1 * numero1
let multiplo2 = numero2 * numero2
let suma = numero1 + numero2
let resta = numero1 - numero2
if (numero1 < 10 && numero2 < 10){
    console.log('el multiplo del numero 1 es: ' + multiplo1)
    console.log('el multiplo del numero 2 es: ' + multiplo2)
} else if(numero1 >= 50 && numero2 >= 50){
    console.log('La suma es: ' + suma)
} else{
    console.log(' la resta es: ' + resta)
}

//ejercicio 15
//Crea un bloque de código que tome de referencia un número del 1 al 7 y devuelva el día de la semana correspondiente. Por ejemplo: 1 = ‘lunes’.
let dia = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
let dayReference = 7
if (dayReference === 1){
    console.log(dia[0])
} else if(dayReference === 2){
    console.log(dia[1])
}else if(dayReference === 3){
    console.log(dia[2])
}else if(dayReference === 4){
    console.log(dia[3])
}else if(dayReference === 5){
    console.log(dia[4])
}else if(dayReference === 6){
    console.log(dia[5])
}else if(dayReference === 7){
    console.log(dia[6])
}

//ejercicio 16
//Crea un bloque de código que reciba un número e imprima en pantalla si es divisible por 2, 3, o ninguno. 
let numm1 = 222
if (numm1 % 3 == 0 && numm1 % 2 == 0 ){
    console.log('es divisible por 2 y 3')
}else if( numm1 % 2 == 0 ){
    console.log('es divisible por 2')
} else if(numm1 % 3 == 0 ){
    console.log('es divisible por 3')
}

//ejercicio 17
//Crea un bloque de código que tome de referencia un número del 1 al 12 y devuelva el mes correspondiente. Por ejemplo: 1 = ‘Enero’.
let mes = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
let monthReference = 1
if (monthReference === 1){
    console.log(mes[0])
} else if(monthReference === 2){
    console.log(mes[1])
}else if(monthReference === 3){
    console.log(mes[2])
}else if(monthReference === 4){
    console.log(mes[3])
}else if(monthReference === 5){
    console.log(mes[4])
}else if(monthReference === 6){
    console.log(mes[5])
}else if(monthReference === 7){
    console.log(mes[6])
}else if(monthReference === 8){
    console.log(mes[7])
}else if(monthReference === 9){
    console.log(mes[8])
}else if(monthReference === 10){
    console.log(mes[9])
}else if(monthReference === 11){
    console.log(mes[10])
}else if(monthReference === 12){
    console.log(mes[11])
}

//ejercicio 18
//Crea un bloque de código que tome de referencia un número del 1 al 7. Utiliza una sentencia Switch para imprimir en consola el día de la semana correspondiente.
let daySwitch = 7
switch(daySwitch){
    case 1:
        console.log('lunes')
        break
    case 2:
        console.log('martes')
        break;
        
    case 3:
        console.log('miercoles')
        break;
    case 4:
        console.log('jueves')
        break;
    case 5:
        console.log('viernes')
        break;
    case 6:
        console.log('sabado')
        break;
    case 7:
        console.log('domingo')
        break;
    }

    