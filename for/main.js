// Estructura FOR
console.log('Ejercicio de prueba')
for(i=0; i<=10;i++){
    if (i === 3){
        continue
    }
    if (i === 5){
        break
    }
    console.log(i)
}

// Ejercicio 1
// En una clase, tienes un array con las notas de los alumnos. Escribe una función
// contarAprobados que reciba este array y cuente cuántos alumnos aprobaron (nota
// mayor o igual a 6). Usa un bucle for para recorrer el array, continúe para saltar las
// notas menores a 6 y break para detener el conteo si encuentras una nota igual a 10
// (porque es la nota máxima). Muestra el resultado en la consola
console.log('Ejercicio 1')
function contarAprobados(notas){
    for (let nota = 0; notas[nota]; nota++){
        if (notas[nota] < 6){
            continue
        } 
        if(notas[nota]>10){
            break
        }
        console.log(notas[nota])
    }
}
console.log(contarAprobados(
[4, 5, 6, 3, 1, 10, 11]
))

// Ejercicio 2
// Un canal de TV quiere saber si un programa específico está en la programación del día.
// Escribe una función buscarPrograma que reciba un array con la lista de programas
// del día y un nombre de programa para buscar. Usa un bucle for para recorrer el array y
// break para detener la búsqueda una vez que encuentres el programa. Muestra en la
// consola si el programa fue encontrado o no.
console.log('Ejercicio 2')
function buscarPrograma(programas, programa){
    for (let i = 0; programas[i]; i++){
        if (!programas.includes(programa)){
            console.log('no se encontro el programa ')
            break
        }
        console.log(programas[i])
        if(programas[i] === programa){
            break
        }
    }
}
console.log(buscarPrograma(
    ['TN', 'A24', 'La nacion', 'C5MIENTE'], 'C5MIENTEF'
))

// Ejercicio 3
// En una clase, un profesor quiere saber cuántos alumnos obtuvieron notas menores a 4
// para ofrecerles clases de apoyo. Escribe una función contarNotasBajas que reciba
// un array con las notas y cuente cuántas son menores a 4. Usa for para recorrer el
// array y continue para saltar las notas que no sean menores a 4.
console.log('Ejercicio 3')
function contarNotasBajas(notas){

    for(let i = 0; notas[i]; i++){
        if (notas[i] >= 4){
            continue
        }
        console.log(notas[i])
    }
}
console.log(contarNotasBajas(
    [10, 2, 4, 5, 6, 7,9, 3, 1, 3, 1]
))

// ejercicio 4
// Tienes una lista de programas en un canal de televisión, y quieres seleccionar tus
// favoritos, pero solo los primeros tres que te gustan. Escribe una función
// seleccionarFavoritos que reciba un array con la lista de programas y un array con
// tus programas favoritos. Usa for para recorrer la lista, continue para saltar los que no
// están en tus favoritos, y break para detenerte una vez que hayas encontrado tres
// programas favoritos.
console.log('Ejercicio 4')
function seleccionarFavoritos(programas, programasFavoritos){
    let result = []
    for (let i = 0; i < programas.length; i++){
        console.log(i + ' ' + programas[i])
        if (programasFavoritos.includes(programas[i])){
            result.push(programas[i])
        }
        if (result.length >= 3){
            break
        }
    }
    console.log(result)

}
console.log(seleccionarFavoritos(
    ['carton', 'nickelodeon', 'disney', 'netflix', 'telefe'],['nickelodeon', 'disney', 'telefe', 'netflix']
))

// Ejercicio 5
// En una escuela, el profesor quiere evaluar el desempeño de los alumnos. Escribe una
// función evaluarDesempeño que reciba un array con las notas de los alumnos y
// muestre en la consola si cada uno tiene un "Desempeño Excelente" (nota mayor o igual
// a 9). Usa for para recorrer el array y continue para saltar los que no cumplan con el
// criterio.
console.log('Ejercicio 5')
function evaluarDesempeño(notas){
    let result = []
    let desempeño = false
    for (let i = 0; i < notas.length; i++){
        if (notas[i] < 9 || notas[i] >10){
            continue
        }
        result.push(notas[i])
    }
    console.log(result)
}
console.log(evaluarDesempeño(
    [1, 3, 5, 7, 2, 4, 6, 9, 10, 9, 11]
))

// Ejercicio 6
// Tienes un objeto alumno que contiene un array de materias, donde cada materia es un
// objeto con el nombre y la nota. Escribe una función filtrarAprobadas que recorra el
// array de materias, filtre aquellas con nota mayor o igual a 6 y las guarde en un nuevo
// array aprobadas. Usa for para recorrer las materias, continue para saltar las
// materias desaprobadas, y break si el alumno ya ha aprobado 5 materias. Muestra el
// array aprobadas en la consola.
console.log('Ejercicio 6')
function filtrarAprobadas(alumno){
    let result = []
    for (let i = 0; i < alumno.materias.length; i++ ){
        let materia = alumno.materias[i]
        if (materia.nota < 6){
            continue
        }
        result.push(materia.nota)
        if (result.length >= 5){
            break
        }
    }
    console.log(result)
}
console.log(filtrarAprobadas({
    nombre: 'Juan',
    materias: [
      { nombre: 'Matemáticas', nota: 8 },
      { nombre: 'Historia', nota: 9 },
      { nombre: 'Ciencias', nota: 7 },
      { nombre: 'Literatura', nota: 6 },
      { nombre: 'Geografía', nota: 4 },
      { nombre: 'Arte', nota: 9 },
      { nombre: 'Física', nota: 6 }
    ]
}
))

// Ejercicio 7
// Un canal de TV tiene una programación donde cada programa tiene una calificación.
// Escribe una función buscarMejorPrograma que reciba un array de objetos
// programas, cada uno con el nombre y la calificación, y encuentre el programa con la
// mejor calificación. Usa for para recorrer el array, continue para saltar los programas
// con calificaciones bajas (menos de 7), y break si encuentras un programa con una
// calificación perfecta de 10. Muestra el nombre del mejor programa en la consola

console.log('Ejercicio 7')
function buscarMejorPrograma(programas){
    // programa con mejor calificacion
    // saltar programas con menos de 7. CONTINUE
    // calificacion perfecta: 10 BREAK
    // Mostrar nombre de mejor programa
    let nombreMejorPrograma
    let calificacionMejorPrograma
    let result
    let nombres = []
    let calificaciones = []
    for (let i = 0; i < programas.length; i++ ){
        let programa = programas[i]
        nombres.push(programa.nombre)
        if (programa.calificacion < 7){
            continue
        }
        calificaciones.push(programa.calificacion)
        if (programa.calificacion === 10){
            nombreMejorPrograma = programa.nombre
            calificacionMejorPrograma = programa.calificacion 
            break
        }
        
    }
    return `El mejor programa fue: ${nombreMejorPrograma} con calificacion: ${calificacionMejorPrograma}`

}
console.log(buscarMejorPrograma(
    [
        { nombre: 'Programa A', calificacion: 8 },
        { nombre: 'Programa B', calificacion: 5 },
        { nombre: 'Programa C', calificacion: 10 },
        { nombre: 'Programa D', calificacion: 7 },
        { nombre: 'Programa E', calificacion: 9 }
    ]
))
// Ejercicio 8
// En una escuela, algunas materias incluyen clases prácticas. Escribe una función que
// reciba un objeto alumno con un array de materias, donde cada materia tiene un nombre
// y un booleano tienePracticas que indica si incluye prácticas. Usa for para recorrer
// las materias, continue para saltar las materias sin prácticas, y break si encuentras 3
// materias con prácticas. Muestra en la consola cuántas materias con prácticas encontró
console.log('Ejercicio 8')
function contarMateriasConPracticas(alumno){
    let nombres = []
    let guardoArrayMaterias = []
    for (i = 0; i < alumno.materias.length; i++){
        if (alumno.materias[i].tienePracticas=== false){
            continue
        }
        nombres.push(alumno.materias[i].nombre)
        guardoArrayMaterias.push(alumno.materias[i].tienePracticas)
        if (guardoArrayMaterias.length === 3){
            break
        }
    }
    console.log(`Las 3 materias con practicas son: ${nombres}`)
}
console.log(contarMateriasConPracticas(
    {
        nombre: 'Ana',
        materias: [
          { nombre: 'Matemáticas', tienePracticas: false },
          { nombre: 'Química', tienePracticas: true },
          { nombre: 'Historia', tienePracticas: true },
          { nombre: 'Biología', tienePracticas: true },
          { nombre: 'Física', tienePracticas: true }
        ]
      }
))

// Ejercicio 9
// Tienes una lista de canales de TV argentinos, y quieres saber si uno de tus canales
// favoritos está en esa lista. Escribe una función buscarCanalFavorito que reciba un
// array de canales y un array de favoritos. Usa for para recorrer los canales,
// continue para saltar los que no están en la lista de favoritos, y break si encuentras
// uno de tus canales favoritos. Muestra en la consola el nombre del canal encontrado o
// un mensaje indicando que no está en la lista.
console.log('Ejercicio 9')
function buscarCanalFavorito(canales, favoritos){
    let result = []
    for(let i = 0; i < canales.length; i++){
        if (!favoritos.includes(canales[i])){
            continue
        }
        return canales[i]
    }
    return 'Canal no encontrado'

}
console.log(buscarCanalFavorito(
    ['El trece', 'Telefe', 'Disney'], ['Telefe', 'cartoon', 'Disney']
))


// PARTE 3
// Ejercicio 1
// Crea una función que reciba un número como parámetro y genere la tabla de multiplicar
// para ese número, desde 1 hasta 10. La función debe imprimir los resultados en la
// consola en el formato adecuado
console.log('Ejercicio 1')
function tablaMultiplicados(numero){
    let multiplicacion
    let result = []
    for (let i = 1; i <= 10; i++){
        multiplicacion = numero * i
        result.push(multiplicacion)
    }
    return result
}
console.log(tablaMultiplicados(6))

// Ejercicio 2
// Estás desarrollando el nuevo instagram. Decidiste agregar una función que invierte los
// mensajes, para que los usuarios puedan mandar mensajes ‘cifrados’, y así estar en la
// onda.
// Entrada:
// Crea una función que reciba un mensaje de texto como parámetro. El mensaje puede
// contener letras, números, espacios y otros caracteres.
// Proceso:
// 1. Recorrer el mensaje de texto desde el último carácter hasta el primero’
// 2. Utilizar un bucle for para armar la nueva cadena invertida.
// 3. Asegurarte de que la función maneje bien todos los caracteres del mensaje
// Salida:
// La salida debe ser una nueva cadena de texto que representa el mensaje original
// invertido, lista para confundir a tus amigos en un asado o en la previa del partido.
// Ejemplo de salida para la entrada "Che, ¿vamos a la cancha?": "?ahcnac al
// a somav¿ ,ehC".
console.log('Ejercicio 2')
function recibirMensaje(mensaje){
    let mensajeAlReves = ''
    for(let i = mensaje.length - 1;  i >= 0; i--){
        mensajeAlReves += mensaje[i]
    }
    return mensajeAlReves
}
console.log(recibirMensaje(
    'Hola soy tomas 1234'
))

// ejercicio 3
// En una noche de Clash Royale con tus amigos, cada uno puntúa las jugadas más
// épicas. Usa una función para encontrar el puntaje más alto y coronar al “Genio
// Montapuercos” de la noche. La función debe aceptar un array de números, que pueden
// ser enteros o decimales.
// a) Proceso:
// ○ Recorrer el array de números para identificar el valor máximo.
// ○ Utilizar un bucle for para comparar cada número con el valor máximo
// encontrado hasta el momento.
// ○ Asegurarse de que la función maneje adecuadamente los números
// dentro del array, incluso si hay valores negativos o decimales.
// b) Salida:
// La salida debe ser el valor máximo encontrado en el array.
// Ejemplo de salida para la entrada [3, 5, 7, 2, 8]: 8.
console.log('Ejercicio 3')
function encontrarPuntajeMaximo(puntajes){
    let maximo = puntajes[0]
    for(let i = 1; i < puntajes.length; i++){
        if(puntajes[i] > maximo){
            maximo = puntajes[i]
        }
    }
    return maximo
}

console.log(encontrarPuntajeMaximo([3, 5, 7, 2, 8]))

// Ejercicio 4
// Como desarrollador del juego FIFA, estás añadiendo una funcionalidad para mostrar el
// promedio de calificaciones de los jugadores usando estrellas (*) en la página web. Cada
// estrella representará una unidad del promedio redondeado al entero más cercano, con
// un máximo de 5 estrellas.
// Requisitos:
// a) Entrada:
// ○ La función debe recibir un array de calificaciones, donde cada calificación
// es un número entre 1 y 5. Algunos valores pueden ser null o mayores a
// 5, y deben ser ignorados.
// b) Proceso:
// ○ Recorre el array de calificaciones y calcula el promedio de las
// calificaciones válidas.
// ○ Redondea el promedio al número entero más cercano.
// ○ Usa un bucle for para construir una cadena de estrellas (*). La cantidad
// de estrellas debe coincidir con el promedio redondeado, hasta un máximo
// de 5 estrellas.
// c) Salida:
// ○ La salida debe ser una cadena de asteriscos (*) que representa el
// promedio redondeado.
// ○ Ejemplo de salida para la entrada [3, 1, 4, 5, 2]: *** (3 estrellas).
// ○ Ejemplo de salida para la entrada [4, 3, 5, 2, 4]:**** (4
// estrellas).
// ○ Ejemplo de salida para la entrada [4, 6, null, 2, 4]: *** (3
// estrellas).
console.log('Ejercicio 4')
function mostrarPromedioEstrellas(calificaciones){
    let suma = 0
    let count = 0
    for(let i = 0; i < calificaciones.length; i++){
        if(calificaciones[i] >= 1 && calificaciones[i] <= 5){
            suma += calificaciones[i]
            count++
        }
    }
    let promedio = (suma / count) + 0.5 | 0
    let estrellas = ''
    for(let i = 0; i < (promedio > 5 ? 5 : promedio); i++){
        estrellas += '*'
    }
    return estrellas
}

console.log(mostrarPromedioEstrellas([4, 6, null, 2, 4]))

// forEach
console.log('Ejemplo forEach')
let users = [{name: 'tomas', age: 18}, {name: 'Juan', age: 20}, {name: 'dibu', age: 30}]
users.forEach(function(user, index, arr){
    console.log(index)
})

console.log('Ejemplo for Of')
let edades =[20, 19 ,14, 15]
for (let listaEdades of edades){
    console.log(listaEdades)
}
console.log('Ejemplo for In')
let users2 = {
    name:'tomas',
    edad: 18
}
for (let info in users2){
    console.log(info)
}

// Ejercicio 1
// Imagina que sos parte del equipo de desarrollo de Boca, y tu tarea es gestionar el
// presupuesto del club de fútbol. Cada categoría de gasto del club, como sueldos de
// jugadores, mantenimiento del estadio, y costos de viajes, se representa como una
// propiedad en un objeto. Tu tarea es crear una función que calcule el total de todos los
// gastos del club utilizando un bucle for...in.
// La función debe:
// a. Recibir un objeto gastos donde cada propiedad representa una categoría de
// gasto y su valor es el monto de gasto en esa categoría.
// b. Utilizar un bucle for...in para recorrer las propiedades del objeto gastos y
// sumar los valores de cada propiedad.
// c. Mostrar el total de los gastos en la consola
console.log('Ejercicio 1')
//For in
let gastosTotales = 0
let gastos = {
    sueldosJugadores: 2000,
    mantenimientoEstadio:1500,
    costosViaje: 500
}
function calcularGastosTotales(gastos){
    for (let propiedadesGastos in gastos){
        gastosTotales += gastos[propiedadesGastos] 
    }
    return `Los gastos totales son: ${gastosTotales}`
}
console.log(calcularGastosTotales(gastos))

// Ejercicio 2
// Después de haber calculado el total de gastos , ahora necesitas saber cómo se
// distribuyen esos gastos en diferentes categorías. Tienes un objeto que representa las
// categorías de gastos del club, con cada propiedad indicando el tipo de gasto y su
// monto.
// Tu tarea es crear una función que:
// a. Reciba un objeto gastos donde cada propiedad representa una categoría de
// gasto y su valor es el monto gastado en esa categoría.
// b. Utilice un bucle for...in para recorrer las categorías de gasto.
// c. Imprima el monto gastado en cada categoría y calcule el total general de los
// gastos.
// d. Muestre en la consola cuánto se gastó en cada categoría y el total general, para
// entender mejor cómo se distribuyen los gastos.
console.log('Ejercicio 2')
function categoriasGastos (gastos){
    let propiedadYGasto = 'Las propiedades con sus gastos son: '
    for (let propiedadesCategorias in gastos){
        propiedadYGasto += propiedadesCategorias + ': ' + gastos[propiedadesCategorias] + ' '
    }
    console.log(propiedadYGasto)
}
console.log(categoriasGastos(gastos))
console.log(calcularGastosTotales(gastos / 2))

// Ejercicio 3
// Imagina que trabajás en el equipo de desarrollo de FIFA y necesitás actualizar las
// estadísticas de los jugadores cada año después de la temporada. Tu tarea es crear una
// función que tome un objeto con las estadísticas actuales del jugador y un objeto con los
// nuevos valores a añadir. La función debe usar un bucle for...in para recorrer las
// propiedades del objeto de estadísticas y actualizar los valores correspondientes.
// La función debe:
// a. Recibir un objeto jugador con las propiedades nombre, asistencias, y
// goles, que contienen las estadísticas actuales del jugador.
// b. Recibir un objeto nuevasEstadisticas con los valores de asistencias y
// goles que deben añadirse.
// c. Usar un bucle for...in para recorrer las propiedades de
// nuevasEstadisticas y añadir los valores a las estadísticas del jugador.
// d. Verificar que los nuevos valores sean números válidos (mayores o iguales a
// cero) antes de realizar la actualización.
// e. Devolver un objeto con las estadísticas actualizadas para el jugador
console.log('Ejercicio 3')
let jugador = {
    nombre: 'Leo Messi',
    asistencias: 32,
    goles: 67
}
let nuevosValores = {
    asistencias: 37,
    goles: 53
}
// For In
function actualizarEstadisticas(jugador, nuevosValores){
    console.log(`Estadisticas pasadas`)
    console.log(jugador)
    for (let prodpiedadesJugador in nuevosValores){
        if (nuevosValores[prodpiedadesJugador] < 0){
            console.log(`ERROR: ${prodpiedadesJugador} invalidos/as`)
            break
        } else{
            jugador.asistencias = nuevosValores.asistencias
            jugador.goles = nuevosValores.goles
        }
    }
    console.log(`Estadisticas actualizadas`)
    console.log(jugador)
}
console.log(actualizarEstadisticas(jugador, nuevosValores))

// Ejercicio 4
// Imaginá que trabajás en el equipo de análisis de datos del Mundial de la FIFA.
// Necesitás saber cuántas veces aparece una letra específica en el nombre de un
// jugador.
// Tu tarea es escribir un programa que:
// a. Reciba una cadena de texto cadena que contiene el nombre de un jugador y un
// carácter caracter que deseas contar.
// b. Utilice un bucle for...of para recorrer cada carácter en la cadena de texto.
// c. Cuente cuántas veces aparece el carácter dado en el nombre del jugador.
// d. Muestra el resultado indicando cuántas veces aparece el carácter en el nombre

console.log('Ejercicio 4')
function verificarLetraEnNombre(nombre, letra){
    let letraRepetida = 0
    for (let propiedadesNombre of nombre){
        if (propiedadesNombre.includes(letra)){
            letraRepetida++
        }
    }
    console.log(`La letra ${letra}, en el nombre ${nombre}, se repite ${letraRepetida} veces`)
}
console.log(verificarLetraEnNombre('matematicas', 'a'))


// Ejercicio 5
// Imaginá que estás trabajando en el sistema de compras del Mundial de la FIFA y
// necesitas calcular el costo total de todos los productos en el carrito de compras de un
// fanático. Tienes un array que contiene objetos, donde cada objeto representa un
// producto con propiedades como nombre y precio.
// Tu tarea es crear un programa que:
// a. Reciba un array de objetos productos, donde cada objeto tiene propiedades
// nombre y precio.
// b. Utilice un bucle for...of para recorrer cada objeto en el array.
// c. Sume los precios de todos los productos en el carrito.
// d. Muestra el costo total acumulado, que será el monto que debe pagar el cliente
// por su compra.
console.log('Ejercicio 5')
function calcularCostosTotales(carritoCompras){
    let precios = 0
    for (let propiedadesCarritoCompras of carritoCompras){
        console.log(propiedadesCarritoCompras)
        precios += propiedadesCarritoCompras.precio
    }
    console.log(`El cliente debera pagar ${precios}`)
}
console.log(calcularCostosTotales(
    [
        {nombre: 'Camiseta', precio: 100}, {nombre: 'Botines', precio: 140}, {nombre: 'short', precio: 60}
    ]
))

// Ejercicio 6
// estás trabajando en el sistema de ventas de tickets para la Copa América. Tienes un
// array de objetos donde cada objeto representa un ticket disponible, con propiedades
// nombre (del evento) y disponible (un booleano que indica si el ticket está disponible
// o agotado).
// Tu tarea es escribir un programa que:
// a. Reciba un array de objetos tickets, donde cada objeto tiene propiedades
// nombre y disponible.
// b. Utilice un bucle for...of para recorrer cada objeto en el array.
// c. Genere un informe que muestre, para cada ticket, si está disponible o agotado.
// d. Presenta el nombre del evento seguido de su estado de disponibilidad.
console.log('Ejercicio 6')
function verificarTicketDisponible (ticketDisponible){
    for (propiedadesTicket of ticketDisponible){
        if (propiedadesTicket.disponible){
            console.log(propiedadesTicket.nombre + ' esta disponible')
        }
        if (!propiedadesTicket.disponible){
            console.log(propiedadesTicket.nombre + ' esta agotado')
        }
    }
}
console.log(verificarTicketDisponible(
    [
        {nombre: 'Bresh', disponible: true},
        {nombre: 'Kapital', disponible: true},
        {nombre: 'museum', disponible: false},
        {nombre: 'LolaPalooza', disponible: false}
    ]
))

// Ejercicio 7
//Han decidido ofrecer un descuento especial del 15% en todas las categorías de tickets.
// Tenés un array de objetos donde cada objeto representa un ticket, con propiedades
// nombre (del tipo de ticket) y precio (el precio actual del ticket).
// Tu tarea es escribir una función que:
// a. Reciba un array de objetos tickets, donde cada objeto tiene propiedades
// nombre y precio.
// b. Utilice el método forEach para recorrer cada ticket en el array.
// c. Aplique un descuento del 15% al precio de cada ticket.
// Devuelve el array con los precios actualizados pero necesitamos un backup de los
// precios viejos
console.log('Ejercicio 7')
function aplicarDescuentoTicket(tickets){
    let descuento = .15
    let precios = []
    tickets.forEach(function(ticket){
        ticket.precio -= ticket.precio * descuento
        precios.push(ticket.precio)
    })
    console.log(precios)
}
console.log(aplicarDescuentoTicket(
    [
        {nombre: 'bresh', precio: 10000}, 
        {nombre: 'kapital', precio: 3000},
        {nombre: 'museum', precio: 5000},
        {nombre: 'LolaPalooza', precio: 100000}
    ]
))

// Ejercicio 8
// Como encargado de ajustar los precios de los videojuegos en Steam para una nueva
// región, debes convertir los precios a dólares y realizar ajustes basados en la
// popularidad de cada juego. Mantén una copia del precio original para referencia.
// Escribe una función que reciba:
// Un array de objetos juegos, donde cada objeto tiene propiedades nombre, precio, y
// popularidad.
// Una tasa de cambio a dólares.
// La función debe:
// a) Convertir los precios a dólares.
// b) Aplicar un ajuste adicional:
// i. $5 si la popularidad es 8 o más.
// ii. $2 si la popularidad es menos de 8.
// c) Calcular y mostrar el precio promedio de los juegos
console.log('Ejercicio 8')
function convertirPreciosAdolares(juegos){
    let dolar = 1000
    let precios = []
    juegos.forEach(function(juego){

        if (juego.popularidad >= 8){
            juego.precio += 5 * dolar
        } else if (juego.popularidad < 8){
            juego.precio += 2 * dolar
        }
        console.log(`El precio del ${juego.nombre} es ${juego.precio / dolar}`)
    })
}
console.log(convertirPreciosAdolares(
    [
        {nombre: 'FIFA', precio: 60000, popularidad: 8},
        {nombre: 'GTA', precio: 100000, popularidad: 10},
        {nombre: 'Among Us', precio: 5000, popularidad: 6},
        {nombre: 'Fall Guys', precio: 15000, popularidad: 4}
    ]
))

// Ejercicio 9
//   Imaginá que sos el encargado de la tienda de merchandising de Argentina y necesitas
// actualizar el inventario después de una gran venta celebrando un triunfo. Los hinchas
// han estado comprando productos como locos, ¡y tu tarea es ajustar el stock!
// Descripción del Problema:
// Escribe una función en JavaScript que realice las siguientes tareas:
// a) Recibe un Array de Productos: Cada objeto en el array representa un producto
// y tiene las siguientes propiedades:
// ○ nombre: El nombre del producto (por ejemplo, "Camiseta del Campeón",
// "Gorra del Dibu").
// ○ cantidad: La cantidad actual en stock del producto.
// ○ vendido: La cantidad del producto que se ha vendido.
// b) Actualizar el Stock:
// ○ Utiliza el método forEach para recorrer el array de productos.
// ○ Calcula la cantidad restante de cada producto después de la venta
// (restando la cantidad vendida de la cantidad en stock).
// ○ Actualiza la cantidad en stock del producto con el nuevo valor.

// c) Mostrar Mensajes:
// ○ Crea un mensaje para cada producto que indique si el stock es suficiente
// o está bajo:
// ■ Si la cantidad restante es mayor a 10, el mensaje debe ser: "La
// [nombre del producto] está bien abastecida.
// Cantidad restante en stock: [cantidad restante]".
// ■ Si la cantidad restante es 10 o menos, el mensaje debe ser: "¡La
// [nombre del producto] está en bajo stock! Solo
// quedan [cantidad restante] unidades.".
// d) Mostrar los Mensajes en la Consola: Imprime cada mensaje en la consola.
// e) Calcular el Porcentaje Restante: calcula el porcentaje de stock restante. El
// porcentaje se calcula como: (cantidadRestante / cantidadOriginal)
// * 100.
// Ejemplo de Entrada:
// const productos = [
    // { nombre: "Camiseta del Campeón", cantidad: 100, vendido: 30 },
    // { nombre: "Gorra del Dibu", cantidad: 50, vendido: 20 },
    // { nombre: "La Bufanda de los Campeones del Mundo", cantidad: 75,
    // vendido: 25 }];
    // Salida esperada:
    // La Camiseta del Campeón está bien abastecida. Cantidad restante en stock: 70.
    // Porcentaje de stock restante: 70%.
    // La Gorra del Dibu está bien abastecida. Cantidad restante en stock: 30.
    // Porcentaje de stock restante: 60%.
    // ¡La Bufanda de los Campeones del Mundo está en bajo stock! Solo quedan 50
    // unidades. Porcentaje de stock restante: 66.67%.
    
    console.log('Ejercicio 9')
    function actualizarStock(productos){
        productos.forEach(function(producto){
            let cantidadRestante = producto.stock - producto.vendido
            let porcentajeRestante = (cantidadRestante / producto.stock) * 100
            if (cantidadRestante > 10){
                console.log(`El producto ${producto.nombre} esta bien abastecida, cantidad restante en stock: ${cantidadRestante}. Porcentaje de stock restante: ${porcentajeRestante}%`)
            } else{
                console.log(`El producto ${producto.nombre} esta en bajo stock! solo quedan: ${cantidadRestante} unidades. Porcentaje de stock restante: ${porcentajeRestante}%`)
            }

        })
    }
    console.log(actualizarStock(
        [
            {nombre: 'Camiseta del campeon', stock: 2000, vendido: 20},
            {nombre: 'Gorra del dibu', stock: 1000, vendido: 100},
            {nombre: 'Botines de otamendi', stock: 500, vendido: 50},
            {nombre: 'Media de aguero', stock: 5, vendido: 2}
        ]
    ))

// Ejercicio 10
console.log('Ejercicio 10')
function enviarCorreo (usuarios, promociones){
    usuarios.forEach(function(usuario){
        if (usuario.preferencias.length > 0){
            usuario.preferencias.forEach(function(preferencia){
                if (promociones[preferencia]){
                    console.log(`Enviando correo a ${usuario.nombre} (${usuario.email}) sobre ${preferencia} - Promocion: ${promociones[preferencia]}`)

                }
            })
        } else{
            console.log(`Se ha enviado un correo generico a ${usuario.nombre} sin promocion`)
        }
    })
}
console.log(enviarCorreo(
    [
        { nombre: "Juan Pérez", email: "juan.perez@example.com", preferencias:
        ["Camisetas", "Gorras"] },
        { nombre: "María García", email: "maria.garcia@example.com", preferencias:
        ["Bufandas"] },
        { nombre: "Carlos López", email: "carlos.lopez@example.com", preferencias: []
    }
],
{
    "Camisetas": "10% de descuento adicional",
    "Gorras": "15% de descuento adicional",
    "Bufandas": "20% de descuento adicional"
}
))

