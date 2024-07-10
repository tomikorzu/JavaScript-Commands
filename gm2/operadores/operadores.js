//comparision operators
 // ==  =>  igual a
 // === => igual valor y tipo
 // !=  =>  diferente valor
 // !==  =>  diferente valor y tipo
 // > mayor
 // < menor
 // >= mayor igual
 // <= menor igual

 //ejemplo
 let age = 18
 let text = ''
 if (age >= 18) text = 'Puede pasar';
 else text = 'no puede pasar'
 console.log(text);

 //logical operators
 // && => and 
 // || => or 
 // ! => not
 
 //ejemplos
let text2 = 'espere'
 if (age == 18 && text == 'Puede pasar') text2 = 'continue porfavor'
 console.log(text2)

if (age == 20 || age == 25) text2 = 'hola'
console.log(text2)

//ternary operators
console.log('entrada de boliche')
dinero = 2000
let entrada = (dinero >= 2000) ? 'puede pasar': 'no puede pasar'
console.log(entrada)

//Comparing different types
// 2 < 12 = true
// 2 < '12' = true
// 2 < 'john' = false && 2 > 'john = false porque no puede comparar 2 y 'j', el caso que sea 2 > '3hon' ahi seria true
// '2' < '12' = false porque 2 es mayor que 1, en el caso que sea '123' < '437' = true porque 1, 2, 3 son menores a 4, 3 y 7
//ejemplo
let age2 = 17
age2 = Number(age2)
if (isNaN(age2)){
    result = 'no es un numero'
}
else {
    result = (age2 < '18') ? 'menor':'es mayor'
}
console.log(result)
//en el caso que age2 sea menor a 18 o '18', el result va a ser menor, sino mayor. y en el caso que age2 sea 'fsdjaasj' o cualquier cosa que no sea un numero, el result es 'no es un numero

//nullish operator
let nameNull = null
let textNull = 'missing'
let resultNull = nameNull ?? textNull
console.log(resultNull)
//en este caso, el ?? muestra el primer argumento que lee, si nameNull tiene algo, se va a mostrar primero

//optional chaining operator
//el operador ?. muestra undefined si el valor es null o undefined

//ejemplo
const car = {type : 'volkswagen', model : 'tiguan', color: 'rojo'}
document.getElementById('auto').innerHTML = 'La marca del auto es ' + car.type + ', el modelo es ' + car.model + ', su color es ' + car.color + ' y su dueño es ' + car.dueño
// en este caso, va a agarrar al parrafo con id 'auto' y le va a cambiar el texto por el definido

//switch
//primero se arranca con switch(variable)

//ejemplo
let fruit = 'banana'
switch(fruit){
    case 'banana':
        console.log(fruit)
        break
    case 'naranja':
        console.log(fruit)
        break
    default:
        console.log('no es ninguna')
        break
}
//es importante el break 

//for

//ejemplo
let i
for (i = 0; i < 10; i++){
    console.log(i)
}
//muestra los numeros del 0 al 9

//segundo ejemplo
let x;
const fruitFor = ['manzana', 'banana', 'naranja', 4];
for (x of fruitFor) {
    console.log(x)
}
//menciona todos los elementos del fruitFor

//While
console.log('While')
let a = 1
while (a <= 5){
     console.log(a)
     a++
 }

 //ejemplo 2
 console.log('While 2')
 let a2 = 0
 while (a2 <= 10){
     console.log(a2)
     a2 = a2 + 2
 } 

 //for stop
 console.log('for stop')
 for (a3 = 0; a3 <= 10; a3 ++){
    console.log(a3)
    if(a3 == 5){
        break
    }
 }

//while stop
a4 = 0
console.log('while stop')
while (a4 <= 10){
    console.log(a4)
    a4++
    if(a4 == 6){
        break
    }
}

//contiune 
console.log('Sacar elementos de un for')
for (a5 = 0; a5 <= 10; a5++){
    if (a5 == 5 || a5 ==10){
        continue;
    }
    console.log(a5)
}

