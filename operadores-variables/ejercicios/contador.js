/*
let numero1 = parseFloat(prompt('Ingese un numero'))
let numero2 = parseFloat(prompt('Ingese otro numero'))
let numeros = [numero1, numero2]

console.log('el primer numero es: ' + numero1 + ', y el segundo es : ' + numero2)
*/

//Funciones
console.log('funciones')
let contadorPartidos;
let empataron = 0
let ganoBoca = 0
let ganoRiver = 0
function calcularResultado(equipo1, equipo2){
    console.log('Partido numero: ' + contadorPartidos)
    let equipo1Goles = Math.floor(Math.random() * 5)
    console.log(equipo1 + ' metio ' + equipo1Goles)
    let equipo2Goles = Math.floor(Math.random() * 5)
    console.log(equipo2 + ' metio ' + equipo2Goles)
    let diferenciaGoles = Math.abs(equipo1Goles - equipo2Goles)
    if (equipo1Goles > equipo2Goles){
        console.log(equipo1 + ' gano metiendo: ' + equipo1Goles + ', con una diferencia de goles de: ' + diferenciaGoles)
        ganoBoca += 1
    }
    else if (equipo1Goles < equipo2Goles){
        console.log(equipo2 + ' gano metiendo: ' + equipo2Goles + ', con una diferencia de goles de: ' + diferenciaGoles)
        ganoRiver += 1
    }
    else{
        console.log('El partido termino en empate ' + equipo1Goles + ' - ' + equipo2Goles)
        empataron +=1
    }
    contadorPartidos+=1
}
contadorPartidos = 0
while (contadorPartidos < 100){
    calcularResultado('boca', 'river')
        
}
if (contadorPartidos == 100){
    console.log('En 100 partidos, boca gano: ' + ganoBoca)
    console.log('En 100 partidos, river gano: ' + ganoRiver)
    console.log('En 100 partidos, empataron: ' + empataron)
}