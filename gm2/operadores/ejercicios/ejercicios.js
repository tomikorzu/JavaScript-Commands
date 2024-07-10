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
let number = 5
if (number == 5){
    console.log(Boolean(number))
}
if (number === 6){
    console.log(Boolean(number))

}

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
myName = 'Tomas' 
// 1
let lastName  = 'Korzusehec'
// 2
let myAge = 18
// 3
const masculino = true
// 4
const firstPhrase = 'hello'
const secondPhrase = 'bootcamp'
const firstAndSecondPhrase = firstPhrase + ' ' + secondPhrase
// 5
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
let efectivoPhrase = 'Hola tengo en efectivo ' 
let efectivoNumber = 50000
let efectivo = efectivoPhrase + ' ' + efectivoNumber
console.log(efectivo)
 // 7
 
document.write('hola')