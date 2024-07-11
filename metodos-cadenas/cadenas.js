//concat
let cadena = 'primera cadena'
let segundaCadena = 'segunda cadena'
let resultado = cadena.concat(', '+ segundaCadena + ' y esta ultima cadena que concatena las 2')
document.write(resultado)

//startswith() si empieza con
document.write('<br>' + 'startswith')
document.write('<br>' + ' Es ' + resultado.startsWith('primera cadena, segunda cadena'))

//endswith si termina
document.write('<br>' + 'endsWith')
document.write('<br>' + ' Es ' + resultado.endsWith('y esta ultima cadena que concatena las 2'))

//includes si esta incluida
document.write('<br>' + 'includes')
document.write('<br>' + ' Es ' + resultado.includes('segunda cadena y esta ultima'))

//indexOf posicion donde comienza el texto
document.write('<br>' + 'indexOf')
document.write('<br>' + ' Es ' + resultado.indexOf('da'))

//lastindexof muestra la posicion de la ultima palabra o letra que se selecciona
document.write('<br>' + 'lastIndexOf')
document.write('<br>' + ' Es ' + resultado.lastIndexOf('a'))
document.write('<br>' + resultado[66] + resultado[67] + resultado[68])

//padStart rellena la cadena
document.write('<br>' + 'padStart')
document.write('<br>' + ' Es ' + cadena.padStart(30,"abc"))

//padEnd rellena la cadena al final
document.write('<br>' + 'padEnd')
document.write('<br>' + ' Es ' + cadena.padEnd(30,"abc"))

//repeat
document.write('<br>' + 'repeat')
document.write('<br>' + ' Es ' + cadena.repeat(3))

