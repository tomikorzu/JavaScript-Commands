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