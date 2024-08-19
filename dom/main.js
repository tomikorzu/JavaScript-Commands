// Ejercicio 1
// Ejercicio 1: Seleccionar un Elemento y Agregar una Clase
// Consigna: Selecciona del DOM el elemento p que tiene la clase "intro" y agrégale una nueva clase llamada "highlight".
let introduction = document.querySelector('p.intro')
introduction.classList.add('highlight')

// Ejercicio 2
// Ejercicio 2: Seleccionar un Elemento por ID y Cambiar su Texto
// Consigna: Selecciona del DOM el elemento con el id "header-title" y cambia su texto a "Nuevo Título".

let newTitle = document.getElementById('header-title').innerText = 'Nuevo Titulo'

// Ejercicio 3: Seleccionar Múltiples Elementos y Agregar una Clase
// Consigna: Selecciona todos los elementos li dentro de una lista y mostrarlos en consola
ulListado = document.querySelector('ul')
ulListado.style.listStyle = 'none'
ulListado.style.padding = '0'
let lista = document.querySelectorAll('li')
lista.forEach(function(element){
    console.log(element.innerText)
})

// Ejercicio 4: Eliminar una Clase de un Elemento
// Consigna: Selecciona del DOM el elemento con la clase "warning" y elimínale esa clase.
let warning = document.querySelector('.warning')
warning.classList.remove('warning')

// Ejercicio 6: Seleccionar y Cambiar el Contenido de Texto
// Consigna: Selecciona del DOM el elemento h1 que tiene la clase "main-title" y cambia su texto a "¡Bienvenidos!".
let tituloPrincipal = document.querySelector('.main-title').innerHTML = 'Bienvenidos'

// Ejercicio 7: Seleccionar por ID y Cambiar el Color de Fondo
// Consigna: Selecciona del DOM el elemento con el id "footer" y cambia su color de fondo(El que quieras).
let footer = document.getElementById('footer')
footer.style.backgroundColor = '#333'
footer.style.color = '#fff'
 
// Ejercicio 8: Seleccionar y Agregar Contenido Adicional
// Consigna: Selecciona del DOM el elemento div con la clase "content" y agrega dentro de él un nuevo párrafo que diga "Contenido adicional" (O lo que quieras que diga).
let contenido = document.querySelector('div.content').innerHTML += '<p>Contenido adicional</p>'

// Ejercicio 10: Verificar y Mostrar si un Elemento Tiene una Clase
// Consigna: Selecciona del DOM el elemento con la clase "header" y muestra en la consola si tiene la clase "sticky".
let header = document.querySelector('.header')
console.log(header.classList.toggle('sticky'))

let primerosEjercicios = document.querySelector('.ejercicios-1')
primerosEjercicios.style.display = 'none'


// Part 2 
// EJERCICIO LISTAS
let list1 = ['item 1', 'item 2', 'item 3']
let list2 = ['item 1', 'item 2', 'item 3']

let containerList = document.getElementById('list-container')
containerList.style.display = 'flex'
containerList.style.flexDirection = 'column'
containerList.style.padding = '0'
let title = document.createElement('h2')
title.textContent = 'Lista 1'
containerList.append(title)
for (i = 0; i < list1.length; i++){
    let newList = document.createElement('li')
    newList.textContent = list1[i]
    containerList.append(newList)
}
title = document.createElement('h2')
title.textContent = 'Lista 2'
containerList.append(title)
for (i = 0; i < list2.length; i++){
    let newList2 = document.createElement('li')
    newList2.textContent = list2[i]
    containerList.append(newList2)
}





let ejerciciosPart2 = document.querySelector('.ejercicios-2')



let linkBack = document.querySelector('.back')
linkBack.style.color = '#fff'
linkBack.style.textDecoration = 'none'
linkBack.style.padding = '10px'
linkBack.style.margin = '10px'
linkBack.style.backgroundColor = '#666'
linkBack.style.borderRadius = '10px'
linkBack.style.display = 'inline-block'




