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
if (n2 >= 0){
    console.log(n2)
}

//Ejercicio 8
//Crea un bloque de código que compare dos números. Si el número es par, imprimir en consola ‘El número es par’. De lo contrario, imprimir ‘El número es impar’.
let number = 3
if (number %2 === 0){
    console.log('El numero es par')
} else{
    console.log('el numero es impar')
}

//ejercicio 9
//Crea un bloque de código que compare dos números y luego imprima en consola si es positivo o negativo.
let num1 = 100
let num2 = -50
if (num1 >= 0){
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
} else{
    console.log('no es divisible por ninguno')
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

//ejercicio 19
//Crea un bloque de código que tome de referencia una letra correspondiente al género (‘H’, ‘M’, ‘X’…). Utiliza una sentencia switch para imprimir en consola el género correspondiente.
let genero = 'M'
switch(genero) {
    case 'H':
        console.log('Hombre')
        break
    case 'M':
        console.log('Mujer')
        break
    case 'X':
        console.log('No binario')
        break
    default:
        console.log('Género no reconocido')
        break
}

//ejercicio 20
//Crea un bloque de código que reciba un número del 1 al 10. Utiliza switch para imprimir en consola ‘Uno’, ‘Dos’, ‘Tres’, o ‘Mayor a 3’, según corresponda. 
let numero = 4
switch(numero) {
    case 1:
        console.log('Uno')
        break
    case 2:
        console.log('Dos')
        break
    case 3:
        console.log('Tres')
        break
    default:
        console.log('Mayor a 3')
        break
}

//ejercicio 21
//Crea un bloque de código que tome de referencia una letra. Utiliza switch para imprimir en consola si es una vocal, una consonante, o un caracter especial.
let letra = '!'
switch(letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('Vocal')
        break
    case 'b': case 'c': case 'd': case 'f': case 'g': case 'h': case 'j': case 'k':
    case 'l': case 'm': case 'n': case 'p': case 'q': case 'r': case 's': case 't':
    case 'v': case 'w': case 'x': case 'y': case 'z':
        console.log('Consonante')
        break
    default:
        console.log('Carácter especial')
        break
}

//ejercicio 22
//Crea un bloque de código que tome de referencia un número del 1 al 4. Utiliza switch para imprimir en consola la estación del año correspondiente.
let estacion = 3
switch(estacion) {
    case 1:
        console.log('Verano')
        break
    case 2:
        console.log('Otoño')
        break
    case 3:
        console.log('Invierno')
        break
    case 4:
        console.log('Primavera')
        break
    default:
        console.log('Número no válido')
        break
}

//ejercicio 23
//Crea un bloque de código que tome de referencia una variable ‘edad’. Utiliza el operador ternario para imprimir en consola si es o no mayor de edad.
let edad = 20
console.log(edad >= 18 ? 'Mayor de edad' : 'Menor de edad')

//ejercicio 24
//Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es par o impar y muestra el resultado en consola.
let numero24 = 4
console.log(numero % 2 === 0 ? 'Par' : 'Impar')

//ejercicio 25
//Crea un bloque de código que tome de referencia dos números y utilice el operador ternario para determinar cual de los dos es el mayor. Luego imprime en consola el resultado.
let num125 = 10
let num225 = 20
console.log(num1 > num2 ? num1 : num2)

//ejercicio 26
//Crea un bloque de código que tome de referencia un número del 1 al 7 y utilice el operador ternario para imprimir en consola el día de la semana correspondiente.
let diaNumero = 3
console.log(diaNumero === 1 ? 'Lunes' : 
            diaNumero === 2 ? 'Martes' : 
            diaNumero === 3 ? 'Miércoles' : 
            diaNumero === 4 ? 'Jueves' : 
            diaNumero === 5 ? 'Viernes' : 
            diaNumero === 6 ? 'Sábado' : 
            diaNumero === 7 ? 'Domingo' : 
            'Número no válido')

//ejercicio 27
//Crea un bloque de código que tome de referencia un número. Utiliza el operador ternario para determinar si es positivo, negativo o cero e imprime el resultado en consola.
let num = -5
console.log(num > 0 ? 'Positivo' : num < 0 ? 'Negativo' : 'Cero')

//ejercicio 28
//Crea un bloque de código que tome de referencia un número del 1 al 100 y utilice el operador ternario para determinar si es múltiplo de 3 y 5 para imprimir el resultado en consola.
let numeroRef = 15
console.log(numeroRef % 3 === 0 && numeroRef % 5 === 0 ? 'Múltiplo de 3 y 5' : 'No es múltiplo de 3 y 5')

//ejercicio 29
//Crea un bloque de código que tome de referencia un número del 1 al 100 y, utilizando el tipo de condicional que prefieras, imprimir si es múltiplo de 2, 3 o 5 incluyendo las diferentes combinaciones posibles.
let numero29 = 30
if (numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0) {
    console.log('Múltiplo de 2, 3 y 5')
} else if (numero % 2 === 0 && numero % 3 === 0) {
    console.log('Múltiplo de 2 y 3')
} else if (numero % 2 === 0 && numero % 5 === 0) {
    console.log('Múltiplo de 2 y 5')
} else if (numero % 3 === 0 && numero % 5 === 0) {
    console.log('Múltiplo de 3 y 5')
} else if (numero % 2 === 0) {
    console.log('Múltiplo de 2')
} else if (numero % 3 === 0) {
    console.log('Múltiplo de 3')
} else if (numero % 5 === 0) {
    console.log('Múltiplo de 5')
} else {
    console.log('No es múltiplo de 2, 3 ni 5')
}

//ejercicio 30
//Crea un bloque de código que reciba un numero del 1 al 1000. Utiliza el tipo de condicional que prefieras para imprimir en consola si el numero es par o impar, si es divisible por 2, por 3 o por 5, y si es mayor o menor a 50.
let numero230 = 123
console.log(numero2 % 2 === 0 ? 'Par' : 'Impar')
if (numero2 % 2 === 0) console.log('Divisible por 2')
if (numero2 % 3 === 0) console.log('Divisible por 3')
if (numero2 % 5 === 0) console.log('Divisible por 5')
console.log(numero2 > 50 ? 'Mayor a 50' : 'Menor o igual a 50')

//ejercicio 31
//Desarrolla 10 nuevas situaciones en donde requieras de utilizar condicionales para su resolución.
let situacion1 = 45
console.log(situacion1 > 18 ? 'Mayor de edad' : 'Menor de edad')

let situacion2 = 'azul'
console.log(situacion2 === 'rojo' ? 'Es rojo' : 'No es rojo')

let situacion3 = 7
console.log(situacion3 % 7 === 0 ? 'Es múltiplo de 7' : 'No es múltiplo de 7')

let situacion4 = 100
if (situacion4 > 0 && situacion4 < 101) console.log('Es un número entre 1 y 100')
else console.log('No está en el rango')

let situacion5 = 4
console.log(situacion5 % 2 === 0 ? 'Es un número par' : 'Es un número impar')

let situacion6 = 'e'
console.log('aeiou'.includes(situacion6) ? 'Es una vocal' : 'Es una consonante o carácter especial')

let situacion7 = -5
console.log(situacion7 < 0 ? 'Es un número negativo' : 'Es un número positivo o cero')

let situacion8 = 'admin'
console.log(situacion8 === 'admin' ? 'Acceso permitido' : 'Acceso denegado')

let situacion9 = 30
console.log(situacion9 >= 25 && situacion9 <= 35 ? 'Edad en el rango 25-35' : 'Edad fuera del rango')

let situacion10 = 6
if (situacion10 >= 1 && situacion10 <= 3) {
    console.log('Bajo')
} else if (situacion10 >= 4 && situacion10 <= 7) {
    console.log('Medio')
} else if (situacion10 >= 8 && situacion10 <= 10) {
    console.log('Alto')
} else {
    console.log('Fuera de rango')
}
