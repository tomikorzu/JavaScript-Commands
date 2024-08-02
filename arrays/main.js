//Consigna:
//Con todo lo aplicado las demás clases, vamos a resolver estos ejercicios
//Tarea: Resolver los ejercicios, imprimiendo al final el estado actual.
//Agregar elementos al final de un array

//ej 1
//Crea un array vacío llamado numbers.
//● Agrega los números del 1 al 5 al array.
//● Imprime el array resultante.
//● Eliminar el último elemento del array.
let numbers = []
let i
for (i = 1; i <=5; i++){
    numbers.push(i)

}
console.log(numbers)
numbers.pop()
console.log(numbers)

//ej 2
//Utiliza el array numbers del ejercicio anterior.
//● Elimina el último número del array.
//● Imprime el array resultante.
//● Agregar elementos al principio del array
numbers.pop()
console.log(numbers)
numbers.shift()

console.log(numbers)

//ej 3 
//Crea un array vacío llamado colors, agregando cada elemento al principio del array.
//● Agrega los siguientes colores al array en el siguiente orden: 'red', 'blue', 'green'.
let colors = []
colors.unshift('red', 'blue', 'green')
console.log(colors)

//ej 4
//Eliminar el primer elemento de un array:
//● Utiliza el array colors del ejercicio anterior.
//● Elimina el primer color del array.
colors.shift()
console.log(colors)

//ej 5
//Agregar múltiples elementos al final de un array:
//● Crea un array vacío llamado fruits.
//● Agrega los siguientes elementos al array: 'apple', 'banana', 'orange'.
let fruits = []
fruits.unshift('apple', 'banana', 'orange')
console.log(fruits)

//ej 6
//Eliminar múltiples elementos al final de un array:
//● Utiliza el array fruits del ejercicio anterior.
//● Elimina los últimos dos elementos del array utilizando el método pop.
fruits.pop()
fruits.pop()
console.log(fruits)

//ej 7
//Agregar múltiples elementos al principio de un array:
//● Utiliza el array fruits del ejercicio 5.
//● Agrega los siguientes elementos al principio del array: 'grape', 'kiwi'.
fruits.unshift('grape', 'kiwi')
console.log(fruits)

//ej 8
//Eliminar múltiples elementos al principio de un array:
//● Utiliza el array fruits del ejercicio anterior.
//● Elimina los primeros dos elementos del array.
fruits.shift()
fruits.shift()
console.log(fruits)

//ej 9
//Agregar un elemento específico al final de un array:
//● Utiliza el array colors del ejercicio 3.
//● Agrega el color 'yellow' al final del array.
colors.push('yellow')
console.log(colors)

//ej 10
//Eliminar un elemento específico del principio de un array:
//● Utiliza el array colors del ejercicio 9.
//● Elimina el primer color del array.
colors.shift()
console.log(colors)