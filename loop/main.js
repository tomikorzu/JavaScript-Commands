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


//Clase 2

// Ejercicio 1
// Escribe una función que reciba un array de calificaciones y calcule el promedio usando un
// bucle while. La función debe devolver el promedio y mostrarlo en la consola

console.log('Ejercicio 1')
function calcularPromedio (calif){
    let contador = 0
    let promedio = 0
    while (contador < calif.length){
        promedio += calif[contador]
        contador++
    }
    return promedio / contador
}
console.log(calcularPromedio([5,10,2]))

// Ejercicio 2
// Verificar Correos Electrónicos: Escribe una función llamada verificarUsuario que
// reciba un array de nombres de usuario y un nombre de usuario específico. Usa un bucle while
// para verificar si el usuario específico está en la lista. Si el usuario existe, muestra un mensaje
// indicando "Usuario encontrado", de lo contrario, muestra "Usuario no encontrado".
// let usuarios = ["juan", "maria", "admin", "carlos"];
// let usuarioBuscado = "admin";

console.log('Ejercicio 2')
function verificarUsuario(nombresUsuario, nombre){
    let contador = 0
    let existe = false
    while (contador !== nombresUsuario.length){
        contador++
        console.log(contador)
        if (nombresUsuario[contador - 1] === nombre){
            existe = true
        } 
    } 
    if (existe){
        return 'Usuario encontrado'
    } else{
        return 'Usuario no encontrado'
    }
}
console.log(verificarUsuario(['Tomas', 'Federico', 'Mati'], 'Mati'))


// Ejercicio 3
// Verificar Longitud de Contraseñas: Escribe una función llamada
// verificarContraseñas que reciba un array de contraseñas. Usa un bucle while para
// verificar cuántas contraseñas tienen al menos 8 caracteres. Muestra un mensaje indicando
// cuántas contraseñas cumplen con esta condición.
// let contraseñas = ["password", "1234567", "supersecret", "contraseña123"];

console.log('Ejercicio 3')
function verificarContraseñas(contraseñas){
    let contador = 0
    let aprobado = 0
    while (contador < contraseñas.length){
        contador++
        if(contraseñas[contador - 1].length >= 8){
            aprobado++
        }
    }
    return aprobado
}
console.log(verificarContraseñas(["12345678", "12345678", "12345678", "12345678"]))

// Ejercicio 4
// Verificar Existencia de un Usuario: Crea una función llamada verificarCorreos que
// reciba un array de correos electrónicos. Usa un bucle `while` para recorrer el array y verificar
// que cada correo contenga un "@" y un ".". Si todos los correos son válidos, muestra "Todos los
// correos son válidos", de lo contrario, muestra "Correo inválido encontrado".
// let correos = ["correo1@example.com", "correo2@example", "correo3@example.com"];

console.log('Ejercicio 4')
function verificarCorreos(correos){
    let contador = 0
    let valido = 0
    while (contador < correos.length){
        contador++ 
        if(correos[contador - 1].includes('@') && correos[contador - 1].includes('.')){
            valido++
        }
    }
    
    return (valido === 3) ? 'Todos los correos son validos' : 'Hay un correo invalido'
}
console.log(verificarCorreos(["correo@1exa.mplecom", "correo2ex@.ample", "correo3ex@ample.com"]))


// Ejercicio 5
// Escribe una función que reciba un número y determine si es primo usando un bucle do
// while. La función debe devolver un valor booleano indicando si el número es primo y mostrar
// el resultado en la consola.

console.log('Ejercicio 5')

function recibirNumero(numero){
    let i = 2
    let valido= true
    do {
        if (numero === 2 ){
            valido = true
            
        } else if(numero % i === 0){
            valido = false
        }
        i++
    } while(i < numero && valido)

    return valido
}
console.log(recibirNumero(11))

// Ejercicio 6
// Contar Cantidad de Comentarios : Escribe una función llamada contarComentarios
// que reciba un array de comentarios. Cada comentario es un string. La función debe usar un
// bucle while para contar cuántos comentarios hay en la lista y mostrar el total en la consola.
console.log('Ejercicio 6')
function contarComentarios(comentarios){
    let contador = 0
    let contadorCaracteres = 0
    while (contador < comentarios.length){
        contador++
        contadorCaracteres+= comentarios[contador - 1].length
    }
    return contadorCaracteres
}
console.log(contarComentarios(['Hola', 'Mi nbre es tomas', 'Dale boca']))

// PARTE 2

// Ejercicio 1
// Escribe una función llamada contarGoles que reciba un array de goles anotados en un
// partido. Cada elemento del array es un objeto que tiene dos propiedades: equipo y jugador.
// Usa un bucle while para recorrer el array y contar cuántos goles anotó cada equipo.
console.log('Ejercicio 1')
function contarGoles(goles){
    let contador = 0
    let contadorGoles1 = 0
    let contadorGoles2 = 0
    while (contador < goles.length){
        if (goles[contador].equipo === 'red'){
            contadorGoles1++
        } else{
            contadorGoles2++
        }
        contador++
    }
    return `El equipo red hizo: ${contadorGoles1} goles, y el azul hizo: ${contadorGoles2}`
}
console.log(contarGoles([
    {equipo:'red',jugador:'messi'},
    {equipo:'blue', jugador:'ronaldo'},
    {equipo:'red',jugador:'messi'},
]))

// Ejercicio 2
// Crea una función llamada contarToques que reciba un array con el nombre de los
// jugadores que tocan el balón en una jugada. Usa un bucle while para contar cuántos
// toques hubo antes de que el balón saliera del campo. La jugada termina cuando encuentres
// el string "fuera" en el array.
console.log('Ejercicio 2')
function contarToques(nombres){
    let contador = 0
    while (nombres[contador] !== 'fuera'){
        contador++
    }
    return `La cantidad total de toques es: ${contador}`
}
console.log(contarToques(["Messi", "Di Maria", "Doye", "s", "s", 'fuera']))

// Ejercicio 3
// Escribe una función llamada practicarSaques que simule los intentos de un jugador
// de voleibol para hacer un saque exitoso. Usa un bucle do while para que el jugador siga
// intentando hasta que consiga hacer un saque exitoso. Usa
// Math.random() para simular si el saque fue exitoso (considerando que la probabilidad de
// éxito es del 30%
console.log('Ejercicio 3')
let porcentaje = 0
function practicarSaques(porcentaje){
    let contador= 0
    do{
        porcentaje = Math.floor(Math.random() * 100)
        console.log(porcentaje)
        contador++
    } while (porcentaje < 30)
    console.log(`En total hizo ${contador}, y el mejor saque fue ${porcentaje}%`)
}
practicarSaques(porcentaje)

// Ejercicio 4
// Desde la terna arbitral de la AFA, el presidente Chiqui Mafia nos envía una lista con los
// jugadores que anotaron goles en un partido. Escribe una función llamada
// recuentoGoleadores que reciba una lista de jugadores que anotaron goles. Usa un bucle
// do while para contar cuántos jugadores ÚNICOS anotaron al menos un gol, y muestra el
// resultado en la consola.
// Ej del array: let jugadoresQueAnotaron = ["Messi", "Di Maria", "Messi", "Riquelme",
// "Maradona"];