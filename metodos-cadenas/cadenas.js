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