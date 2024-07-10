//Ejercicios

//Ejercicio 1
//JS OPERATORS
// alert(10 * 5)
//alert(10/2)
//alert(15%9)
// x = 10; y = 5; x+=y;
// x = 10; y = 5; x*=y;
//ejercicios doc
//alert(15+30)
// //alert(100-45)
// alert(8*7)
// alert(56/8)
// alert(27%4)

//ejercicio 2
let result= {
    suma : 20 + 22,
    texto : 'hola ' + 'mundo',
    multiplicacion : 5 * (3+2)
}
console.log('La suma es ' + result.suma + ', el texto es ' + result.texto + ' y la multiplicacion es ' + result.multiplicacion)

//Ejercicio 3
console.log('Hola ' + 2024)
console.log('Hola ' + 2024 + ' vamos por todo')
let operacion = {
    a : 5,
    b : 10,
}
operacion.suma = operacion.a +operacion.b
console.log('El resultado de la operacion aritmetica es ' + operacion.suma)

//Ejercicio 4
console.log('ejercicio 4')
console.log(5 == 5); // true 
console.log(5 == '5'); // true 
console.log(5 === 5); // true
console.log(5 === '5'); // false 
console.log(5 != '5'); // false 
console.log(5 != 5); // false 
console.log(5 !== '5'); // true 
console.log(5 !== 5); // false 
console.log(10 > 5); // true
console.log(5 > 10); // false
console.log(5 < 10); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(5 >= 10); // false
console.log(5 <= 10); // true
console.log(10 <= 5); // false

//Ejercicios MDN
//ejercicio 1 boton
const boton = document.getElementById('btnPresione')
boton.onclick = function(){
    let name = prompt('Ingrese su nombre')
    if (name === 'tomas'){
        alert('Hola ' + name + ', yo tambien me llamo asi')
    }
    else{
        alert('Hola ' + name + ', como te va?')
    }
}

//ejercicio 2 boton
let myName = 'tomas'
function showName(){
    alert('correcto, mi nombre es ' + myName)
}
const askBtn = document.getElementById('btnName')

askBtn.onclick = function(){
    let askName = prompt('como pensas que me llamo?')
    if (askName === 'tomas'){
        showName()
    }
    else{
        alert('incorrecto')
    }
}

//ejercicios documento
console.log('ejercicios Documento')
console.log('ejercicio 1')
// 1
let lastName  = 'Korzusehec'
// 2
console.log('ejercicio 2')
let myAge = 18
// 3
console.log('ejercicio 3')
const masculino = true
// 4
console.log('ejercicio 4')
const firstPhrase = 'hello'
const secondPhrase = 'bootcamp'
const firstAndSecondPhrase = firstPhrase + ' ' + secondPhrase
// 5
console.log('ejercicio 5')
const firstNumber = 10
const secondNumber = 20
const sumaNumbers = firstNumber + secondNumber
const restaNumbers = firstNumber - secondNumber
const multiplicacionNumbers = firstNumber * secondNumber
const divisionNumbers = firstNumber / secondNumber
const moduloNumbers = firstNumber % secondNumber
// console.log(sumaNumbers)
// console.log(restaNumbers)
// console.log(multiplicacionNumbers)
// console.log(divisionNumbers)
// console.log(moduloNumbers)
//6
console.log('ejercicio 6')
let efectivoPhrase = 'Hola tengo en efectivo ' 
let efectivoNumber = 50000
let efectivo = efectivoPhrase + ' ' + efectivoNumber
console.log(efectivo)
 // 7
 console.log('ejercicio 7')
 let esHombre = true
 let esMujer = !esHombre
 console.log('Hombre o Mujer')
 console.log('hombre? ', esHombre)
 console.log('mujer? ', esMujer)
//8
console.log('Ejercicio 8')
console.log('suma')
let num = 10;
num++;
num += 1
console.log(num)
console.log('resta')
num = 10;
num--;
num -= 1
console.log(num)
console.log('multiplicacion')
num = 10;
num=num*2;
num *= 2
console.log(num)
console.log('division')
num = 10;
num =num/2;
num /= 2
console.log(num)
//9
console.log('Ejercicio 9')
const messiBalones = 8;
// if (messiBalones = 8){
//     messiBalones++
//     console.log(messiBalones)
// }
console.error('El mensaje que aparece es: TypeError: Assignment to constant variable')
console.log('hola')
//10
console.log('ejercicio 10')
let varString1 = ''
let varString2 = ''
let varNumber1 = 0
let varNumber2 = 0
//a
let varContainer = 'Esta variable contiene las otras variables: ' + varString1+ ', ' + varString2 + ', ' + varNumber1 + ', ' + varNumber2
console.log(varContainer + ' sin contenido')
varString1 = 'palabra 1'
varString2 = 'palabra 2'
varNumber1 = 1
varNumber2 = 2
varContainer = 'Esta variable contiene las otras variables: ' + varString1+ ', ' + varString2 + ', ' + varNumber1 + ', ' + varNumber2
console.log(varContainer + ' con contenido')
let varContainer2 = [varString1, varString2, varNumber1, varNumber2]
console.log(varContainer2)
//11
//Crear dos variables de tipo number.
//Crear cuatro nuevas variables de tipo boolean comparando los dos valores utilizando operadores de comparación.
console.log('Ejercicio 11')
let varNum1 = 10
let varNum2 = 5
let esMayor = varNum1 > varNum2 //verdad
let esMenor = varNum1 < varNum2 //falso
let esIgual = varNum1 === varNum2 //falso
let esDistinto = varNum1 !== varNum2 //verdad
console.log('Mayor? ' + esMayor)
console.log('menor? ' + esMenor)
console.log('igual? ' + esIgual)
console.log('distinto? ' + esDistinto)
//12
console.log('ejercicio 12')
//Declarar cinco variables de tipo string cuyo valor contenga operaciones aritméticas. Intenta utilizar diferentes estrategias. 
let numString1 = 10
let numString2 = 5
let sumaString = `${numString1} + ${numString2}`
let restaString = '10 - 5'
let multiString = '10' + ' * ' + '5'
let divisionString = '10 / 5'
let moduloString = `${numString1} % ${numString2}`
console.log('suma: ' + sumaString)
console.log('resta: ' + restaString)
console.log('multiplicacion: ' + multiString)
console.log('division: ' + divisionString)
console.log('modulo: ' + moduloString)
//13
console.log('Ejercicio 13')
//Crea un bloque de código que, utilizando variables con nombres representativos, calcule la cantidad de propina a dejar en un restaurante, basada en el total de la cuenta y el porcentaje de propina ingresado por el usuario.
/*
let totalPagado = parseFloat(prompt('Ingrese cuanto dinero pago:'));
if (isNaN(totalPagado)){
    alert('Ingrese un valor numerico')
}
else{
    let cantidadPropina = (10/100) * totalPagado
    let porcentajePropina = '10%'
    console.log('El total pagado es: ' + totalPagado+ ', el porcentaje de propina es: ' + porcentajePropina + ' y la cantidad de propina es: ' + cantidadPropina)
}
    */
//14
console.log('Ejercicio 14')
//Crea un bloque de código que calcule el precio final de un producto luego de aplicar un descuento. 
producto = 10000
descuento = 35/100
let totalPagado = producto * descuento
console.log(totalPagado) 
//15
console.log('Ejercicio 15')
/*
year = prompt('ingrese el AÑO en el que nacio: ')
if (isNaN(year)){
    alert('ingrese un valor numerico')
}
else{
    edad = (year - 2024)
    edad *= (-1) 
    alert(edad)
}
*/
//16
console.log('Ejercicio 16')
/*
//triangulo
let baseTriangulo = prompt('Ingrese la base del triangulo')
let heightTriangulo = prompt('ingrese la altura del triangulo')
let areaTriangulo = (baseTriangulo * heightTriangulo) / 2 
//cuadrado
let baseCuadrado = prompt('Ingrese la base del cuadrado')
let heightCuadrado = prompt('ingrese la altura del cuadrado')
let areaCuadrado = baseCuadrado * heightCuadrado
//circulo
let radioCirculo = prompt('Ingrese el radio del circulo')
let areaCirculo = Math.PI * (radioCirculo**2)

console.log('La base del triangulo es: ' + baseTriangulo)
console.log('La altura del triangulo es: ' + heightTriangulo)
console.log('El area del triangulo es: ' + areaTriangulo)

console.log('La base del cuadrado es: ' + baseCuadrado)
console.log('La altura del cuadrado es: ' + heightCuadrado)
console.log('El area del cuadrado es: ' + areaCuadrado)

console.log('el radio del circulo es: ' + radioCirculo)
console.log('El area del circulo es: ' + areaCirculo)

*/