//ejercicio 1
//Declara una función llamada saludar que muestre en la consola "Hola, mundo!" cuando se llame. Ejecutarla.
function greet(){
    console.log('Hello, world')
}
greet()

//ejercicio 2
//Declara una función llamada despedirse que muestra en la consola "Adiós, mundo!" y llámala. Ejecutarla.
function dismiss(){
    console.log('Good bye, world')
}
dismiss()

//ejercicio 3
//Declara una función llamada calcularCuadrado que acepte un número como parámetro y devuelva el cuadrado de ese número. Ejecutarla.
function calculateSquare(number){
    console.log(number * number)
}
calculateSquare(5)

//ejercicio 4
//Escribir una funcion llamada minutosAHoras que reciba un número entero de minutos como parámetro, y devuelva un número representando la misma cantidad de tiempo pero en horas. 
function minutesAndHours(minutes){
    console.log(minutes / 60)
}
minutesAndHours(120)

//ejercicio 5
//Declara una función llamada saludarPersona que acepte un parámetro nombre y muestre en la consola "Hola, " seguido del nombre.
function greetPerson(name){
    console.log('Hello, ' + name)
}
greetPerson('tomas')

//ejercicio 6
//Declara una función llamada sumarNumeros que acepte dos números como parámetros y devuelva su suma.
function sumarryNumbers(number1, number2){
    console.log(number1 + number2)
}
sumarryNumbers(5, 20)

//ejercicio 7
//Declara una función llamada multiplicarNumeros que acepte tres números como parámetros y devuelva su producto.
function multiplicateNumbers(number1, number2, number3){
    console.log(number1 * number2 * number3)
}
multiplicateNumbers(2,6,10)

//ejercicio 8
//Escribir una funcion que se llame concatenar3, que reciba 3 strings como parametros. Definir dentro de la funcion una variable que se llame separador. La funcion debe devolver un solo string, concatenando los 3 ingresados como parametro y separados por el separador. 
function concatenate(string1, string2, string3){
    let separador = ' '
    console.log(string1 + separador + string2 + separador + string3)
}
concatenate('hola','soy','roberto')

//ejercicio 9
//Escribir una funcion llamada promedioDeCuatroNumero, que reciba 4 numeros como parametros y devuelva el promedio de los numeros introducidos.
function averageOfFourNumbers(number1, number2, number3, number4){
    console.log((number1 + number2 + number3 + number4) / 4)
}
averageOfFourNumbers(10, 8, 4, 9)

//ejercicio 10
//Declara una función llamada presentarPersona que acepta dos parámetros, nombre y edad, y muestre en la consola "Mi nombre es [nombre] y tengo [edad] años."
function introducePerson(name, age){
    console.log(`My name is ${name} and i am ${age} years old` )
}
introducePerson('tomas',18)

//ejercicio 11
//Declara una función llamada areaRectangulo que acepte dos parámetros, ancho y alto, y devuelva el área del rectángulo. Comprobarlo asignando la función a una variable, y mostrando en consola el valor de la misma.
function rectangleArea(width, height){
    return width * height
}
let areaResult = rectangleArea(5, 15)
console.log(areaResult)

//ejercicio 12
//Declara una función llamada calcularPropina que acepte un número como parámetro y devuelva la cantidad de propina a dejar en base a cuanto salió el total de la comida. Comprobarlo asignando la función a una variable y mostrando en consola el valor de la misma. 
function calculateBribe(number){
    bribe = number / 10
    return `you must to give ${bribe} of bribe` 
}
let bribeResult = calculateBribe(1000)
console.log(bribeResult)

//ejercicio 13
//Declara una función llamada calcularSalario que acepta dos parámetros, horasTrabajadas y tarifaPorHora, y devuelva el salario calculado.   
function calculateSalary(hoursWorked, hourlyRate){
    let salary = hoursWorked * hourlyRate
    return `You will receive $${salary}`
}
let salaryShow = calculateSalary(8, 10)
console.log(salaryShow)

//ejercicio 14
//Declara una función llamada calcularDescuento que acepte un parámetro precioOriginal. La función debe declarar una variable descuento con un valor de 0.1 (10%). Luego, calcula el precio con descuento y devuelve el resultado.
function calculateDiscount(originalPrice){
    let discount = originalPrice * 0.1
    return `This product cost $${discount}`
}
let discountResult = calculateDiscount(1000)
console.log(discountResult)

//ejercicio 15
//Declara una función llamada evaluarNumero que acepte un parámetro num. La función debe devolver "positivo" si el número es mayor que 0, "negativo" si es menor que 0, y "cero" si es exactamente 0.
function evaluateNumber(number){
    if (number > 0){
        return `The number is positive`
    } else if (number< 0){
        return `The number is negative`
    } else{
        return `The number is 0`
    }
}
let evaluateNumberResult = evaluateNumber(-1)
console.log(evaluateNumberResult)

//ejercicio 16
//Declara una función llamada evaluarEdad que acepte un parámetro edad. La función debe devolver "Menor de edad" si la edad es menor de 18, y "Mayor de edad" si es 18 o mayor.
function evaluateAge(age){
    if (age < 18){
        return `Is younger`
    } else{
        return `Is adult`
    }
}
let evaluateAgeResult = evaluateAge(17)
console.log(evaluateAgeResult)

//ejercicio 17
//Declara una función llamada esPar que acepte un número como parámetro. Si el número es par, debe mostrar en la consola "El número es par". Si es impar, debe mostrar "El número es impar".
function isEven(number){
    if (number % 2 === 0){
        return `The number is even`
    } else{
        return `The number is odd`
    }
}
let isEvenResult = isEven(32)
console.log(isEvenResult)

//ejercicio 18
//Declara una función llamada compararNumeros que acepte dos números como parámetros. La función debe mostrar en la consola cuál de los dos números es mayor o si son iguales.
function compareNumbers(number1, number2){
    if (number1 > number2){
        return `The first number is greater than the second`
    } else if (number1 < number2){
        return `The second number is greater than the first`
    } else{
        return `The numbers are the same`
    }
}
let compareNumbersResult = compareNumbers(10,11)
console.log(compareNumbersResult)

//ejercicio 19
//Declara una función llamada sumaEsPar que acepte dos números como parámetros. La función debe mostrar en la consola si la suma de los dos números es par o impar.
function sumIsEven(number1, number2){
    if ((number1 + number2) % 2 ===0){
        return `The sum of those numbers is even`
    } else{
        return `The sum of those numbers is odd`
    }
}
let sumIsEvenResult = sumIsEven(10, 21)
console.log(sumIsEvenResult) 

//ejercicio 20
//Declara una función llamada ambosPositivos que acepte dos números como parámetros. La función debe mostrar en la consola si ambos números son positivos, si solo uno es positivo, o si ninguno es positivo.
function bothPositives(number1, number2){
    if(number1 > 0 && number2 > 0){
        return `Both numbers are positive`
    } else if(number1 > 0 || number2 > 0){
        return `One of them is positive`
    } else{
        return `No number is positive`
    }
}
let bothPositivesResult = bothPositives(2, 5)
console.log(bothPositivesResult)

//ejercicio 21
//Declara una función llamada calcularImpuesto que acepte un parámetro ingreso. Si el ingreso es menor de 10000, el impuesto es del 10%. Si es entre 10000 y 20000, el impuesto es del 15%. Si es mayor de 20000, el impuesto es del 20%. La función debe devolver el valor del impuesto.
function calculateTax(income){
    let tax
    if (income <= 10000){
        tax = .1
    } else if(income > 10000 && income < 20000){
        tax = .15
    } else{
        tax = .2
    }
    let value = income - (income * tax) 
    return `The total cost with tax is $${value}` 
}
let calculateTaxResult = calculateTax(19999)
console.log(calculateTaxResult)

//ejercicio 22
//Declara una función llamada clasificarNota que acepte un parámetro nota. Si la nota es 90 o más, devuelve "A". Si es entre 80 y 89, devuelve "B". Si es entre 70 y 79, devuelve "C". Si es entre 60 y 69, devuelve "D". Si es menor de 60, devuelve "F".
function classifyNote(note){
    if (note >= 90){
        return `A`
    } else if (note >= 80 && note <= 89){
        return `B`
    } else if(note >= 70 && note <= 79){
        return `C`
    } else if(note >= 60 && note <= 69){
        return `D`
    } else{
        return `F`
    }
}
let classifyNoteResult = classifyNote(59)
console.log(classifyNoteResult)

//Ejercicio Integrador: Gestión de Pedidos de Restaurante
//Imagina que estás desarrollando un sistema de gestión de pedidos para un restaurante. La función principal se llama gestionarPedido.
//La función debe realizar las siguientes tareas (funciones):
//Saludar al cliente: Mostrar un saludo personalizado.
//Verificar si el cliente es mayor de edad: Si es menor de edad, advertir que no puede consumir bebidas alcohólicas.
//Calcular el costo total del pedido: Multiplicar la cantidad por el precio unitario.
//Aplicar un descuento: Si el cliente tiene más de 60 años, aplicar un descuento del 10%.
//Determinar el método de pago: Mostrar el método de pago elegido (Efectivo, Tarjeta, o Aplicación). Si es en efectivo, tiene un 10% de descuento acumulable.

//Mostrar la hora del pedido: Verificar si el pedido es durante la hora pico (entre 12:00 y 14:00). Si es hora pico, mostrar un mensaje indicando que puede haber demoras.
//Calcular el valor del cubierto: Aplicar un impuesto del 5% al costo total después del descuento.
//Mostrar el resumen del pedido: Usar console.log para mostrar todos los detalles del pedido, incluyendo el costo total, el descuento aplicado, el impuesto, y el costo final.

function manageOrder(name, age, amount, unitPrice, pay){
    greet(name);    
    isAdult(age);

    let totalCostResult = totalCost(amount, unitPrice);
    totalCostResult = discount(totalCostResult, age);
    totalCostResult = paymentMethod(totalCostResult, pay);
    let finalCost = coverCharge(totalCostResult);
    
    console.log(`Order Summary:`);
    console.log(`Customer: ${name}`);
    console.log(`Total Cost: $${(amount * unitPrice).toFixed(2)}`);
    console.log(`Discount Applied: $${((amount * unitPrice) - totalCostResult).toFixed(2)}`);
    console.log(`Payment Method: ${pay}`);
    console.log(`Final Cost after tax: $${finalCost.toFixed(2)}`);
}

function greet(name){
    console.log(`Hello ${name}, how are you?`);
}

function isAdult(age){
    if (age < 18){
        console.log(`ALERT: The customer can't buy alcoholic drinks`);
    }
}

function totalCost(amount, unitPrice){
    return amount * unitPrice;
}

function discount(totalCostResult, age){
    if (age >= 60){
        return totalCostResult * 0.9; 
    }
    return totalCostResult;
}

function discount(totalCostResult, age){
    if (age >= 60){
        return totalCostResult * 0.9; 
    }
    return totalCostResult;
}

function paymentMethod(totalCostResult, pay){
    if (pay === 'cash'){
        return totalCostResult * 0.9; 
    }
    return totalCostResult;
}

function coverCharge(totalCostResult){
    return totalCostResult * 1.05;
}

manageOrder('Tomas', 70, 5, 500, 'cash');