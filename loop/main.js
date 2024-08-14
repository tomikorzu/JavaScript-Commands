// While
// Ejercicio 1
// Crea una función sumarHastaLimite que reciba un número límite. Usa un bucle while para sumar números consecutivos (1, 2, 3,...) hasta que la suma alcance o supere el límite. Muestra el resultado en la consola. 

function sumarHastaLimite (numero, numeroLimite){
    while(numero <= numeroLimite){
        console.log(numero)
        numero++ 
    }
}
// console.log(sumarHastaLimite(1, 10))

// ejercicio 2
// Escribe una función contarPares que reciba un número n. Usa un bucle while para contar cuántos números pares hay entre 1 y n. Muestra el resultado en la consola. 
function contarPares(i, n){
    contador = 0
    while (i <= n){
        i++
        if (i % 2 === 0){
            contador++
        }
        console.log(contador)
    }
}
// console.log(contarPares(1,10))

// Ejercicio 3
// Crea una función multiplicar que reciba dos números a y b. Usa un bucle while para multiplicar a por b mediante sumas sucesivas. Muestra el resultado en la consola. 
function multiplicar (a, b){
    let result = a
    let contador = 0
    while (contador !== b){
        contador++
        console.log(result)
        result += a
    }
}
// console.log(multiplicar(4, 10))

// Ejercicio 4
// Escribe una función mostrarImpares que reciba un número límite. Usa un bucle while para mostrar en la consola todos los números impares desde 1 hasta el límite. 
function mostrarImpares(numeroLimite){
    let i = 0
    while (i !== numeroLimite){
        i++
        if (i % 2 !== 0){
            console.log(i)
        }
    }
}
// console.log(mostrarImpares(50))

// Ejercicio 5
// Escribe una función calcularFactorial que reciba un número n. Usa un bucle while para calcular el factorial de n. Muestra el resultado en la consola.

function calcularFactorial(n){
    let numeros = n
    let factor = numeros
    while (factor !== 1){
        factor--
        console.log(numeros)
        numeros*= factor
    }
}
// console.log(calcularFactorial(4))


// Ejercicio 6
// Crea una función cuentaRegresiva que reciba un número n. Usa un bucle do while para realizar una cuenta regresiva desde n hasta 1, mostrando cada número en la consola.
function cuentaRegresiva(n){
    while (n !== 0){
        n--
        console.log(n)
    }
}
// console.log(cuentaRegresiva(20))

//Ejercicio 7
// Escribe una función sumarDigitos que reciba un número n. Usa un bucle while para sumar todos los dígitos de n. Muestra el resultado en la consola.


console.log('Ejercicio 7')
function sumarDigitos(n){
   let suma = 0
   while(n > 0){
       let digito = n % 10
       suma += digito
       n = Math.floor(n / 10)
   }
   console.log(suma)
}
// sumarDigitos(125)


//Ejercicio 8
// Escribe una función encontrarMayor que reciba un array de números. Usa un bucle while para encontrar y mostrar el mayor número en la consola.
console.log('Ejercicio 8')
function encontrarMayor (numeros){
   let numeroActual = 0
   let numeroMayor = [0]
   let ultimoNumero = numeros.length
   console.log(ultimoNumero)
   while(numeroActual < ultimoNumero){
       numeroActual++
       if (numeros[numeroActual] > numeroMayor){
           numeroMayor = numeros[numeroActual]
       }
   }
   console.log(numeroMayor)
}
// console.log(encontrarMayor([5,40,20,6]))


//Ejercicio 9 y 10
// Escribe un programa que use un bucle do while para contar y mostrar en la consola todos los números pares e impares desde 1 hasta 20.
console.log('Ejercicio 9 y 10')
let i = 0
let f = 20
let impares = 0
let pares = 0
let contadorPar = 0
let contadorImpar = 0
do {
   i++
   if (i % 2 !== 0){
       impares = i
       console.log('impar: ' +impares)
       contadorImpar++
   } else {
       pares = i
       console.log('Par: ' + pares)
       contadorPar++
   }
} while (i < 20)
// console.log('En total de los numeros pares son: ' + contadorPar)
// console.log('En total de los numeros pares son: ' + contadorImpar)