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
function contarMateriasConPracticas(alumno){
    
}
console.log(contarMateriasConPracticas(
    {
        nombre: 'Ana',
        materias: [
          { nombre: 'Matemáticas', tienePracticas: false },
          { nombre: 'Química', tienePracticas: true },
          { nombre: 'Historia', tienePracticas: false },
          { nombre: 'Biología', tienePracticas: true },
          { nombre: 'Física', tienePracticas: true }
        ]
      }
))

