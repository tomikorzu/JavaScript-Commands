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



let linkBack = document.querySelector('.back')
linkBack.style.color = '#fff'
linkBack.style.textDecoration = 'none'
linkBack.style.padding = '10px'
linkBack.style.margin = '10px'
linkBack.style.backgroundColor = '#666'
linkBack.style.borderRadius = '10px'
linkBack.style.display = 'inline-block'

// window.addEventListener('load', function(){
//     alert('La pagina cargo')
// })

btn = document.getElementById('myButton')
btn.addEventListener('click', function(){
    alert('Boton presionado')
})

btn.style.padding = '10px'

let link = document.getElementById('linker')
link.addEventListener('click', function(event){
    event.preventDefault()
})

let color = document.querySelector('input')
color.addEventListener('change', function(event){
    console.log(event.target.value)
})



let ejerciciosPart2 = document.querySelector('.ejercicios-2')
// PART 2 addEventLister y preventDefault

//Ejercicio 1: Manejar Evento para Mostrar un Mensaje: Selecciona un botón con el id "show-message" y agrega un evento click que muestre un mensaje de alerta diciendo "¡Hola, mundo!".

let showMessage = document.getElementById('show-message')
showMessage.addEventListener('click', function(){
    alert('Hola mundo')
})

// Ejercicio 2: Cambiar el Color de Fondo al Hacer Clic: Selecciona el body y agrega un evento que cambie su color de fondo al color que prefieras.

let cuerpo = document.querySelector('body')
cuerpo.style.height = '100vh'
cuerpo.addEventListener('click', function(){
    cuerpo.style.backgroundColor = '#00000050'
})

// Ejercicio 3: Cambiar Texto al Hacer Clic: Selecciona un párrafo con la clase "click-text" y agrega un evento que cambie su texto a "Has hecho clic aquí".
let parragraph = document.querySelector('.click-text')
parragraph.addEventListener('click', function(){
    parragraph.innerText = 'Haz hecho click aqui'
})

// Ejercicio 4: Cambiar el Valor de un Input al Cambiarlo: Selecciona un input de texto y crea un elemento párrafo el cual agreguemos lo que vamos escribiendo en el input.

let inputText = document.getElementById('input-text')
let parragraphAdded = document.createElement('p')
cuerpo.append(parragraphAdded)
inputText.addEventListener('input', function(event){
    parragraphAdded.innerText = event.target.value
})

// Ejercicio 5: Validar Formulario al Enviarlo: Selecciona un formulario con el id "signup-form"que tenga 2 inputs y agrega un evento que al enviar el formulario valide si los campos están completos. Si no lo están, muestra un mensaje de error.

let formulario = document.getElementById('signup')
let nombre = document.getElementById('form-name')
let send = document.getElementById('send')
formulario.addEventListener('submit', function(event){
    if(nombre.value.length > 0){
        alert('El formuario se envio')
        nombre.value = ''
    } else{
        alert('ERROR: ingrese su nombre')
    }
    event.preventDefault()
})  

// Ejercicio 6: Evento para Mostrar un Mensaje al Cargar la Página: Agrega un evento al body que muestre un mensaje en consola diciendo "La página se ha cargado".

window.addEventListener('load', function(){
    console.log('La pagina se ha cargado')
})

// Ejercicio 7: Agregar Elemento a la Lista al Hacer Clic: Selecciona un botón con el id "add-item" y agrega un evento que añada un nuevo elemento li a una lista con la clase "item-list".

let boton = document.getElementById('add-item')
let listaDeItems = document.getElementById('item-list')

let itemNuevo = 'Nuevo item'

boton.addEventListener('click', function(event){
    let newItem = document.createElement('li')
    newItem.innerText = itemNuevo
    listaDeItems.append(newItem)
})

// Ejercicio 8: Prevenir el Comportamiento por Defecto al Enviar Formulario: Selecciona un formulario con el id "contact-form" y agrega unos eventos para evitar que el formulario se envíe, y luego muestra un mensaje diciendo "El envío del formulario ha sido detenido".

let formulario2 = document.getElementById('contact-form')
let nombre2 = document.getElementById('form-name2')
let send2 = document.getElementById('send2')
formulario2.addEventListener('submit', function(event){
    console.log(window.location.reload())
    event.preventDefault()
    console.log('El formulario ha sido detenido')
})  

// Ejercicio 9: Contar y Mostrar Clics en un Botón: Selecciona un botón con la clase "count-button" y agrega un evento que cuente cuántas veces se ha hecho clic en él, mostrando el total en un span con el id "click-count".
let contadorClicks = document.getElementById('contador-clicks')
let parrafo = document.createElement('p')
cuerpo.append(parrafo)
let contador = 0
contadorClicks.addEventListener('click', function(){
    contador++
    parrafo.textContent = contador
})

// Ejercicio 10: Validar Email en un Formulario: Selecciona un formulario con el id "email-form" y agrega un evento que valide que el campo de email contiene un formato válido antes de enviarlo.

let formEmail = document.getElementById('email-form')
let mail = document.getElementById('mail')
let sender = document.getElementById('sender')
formEmail.addEventListener('submit', function(event){
    console.log(mail.value)
    if (!mail.value.length && !(mail.value.includes('@'))){
        event.preventDefault()
        console.log('El mensaje no se envio')
    } else if(mail.value.length && mail.value.includes('@')){
        console.log('Mensaje enviado')
    } else{
        console.log('El mensaje no se envio')
    }
})

// Ejercicio 11: Evento para Mostrar/Ocultar Contenido: Selecciona un botón con el id "toggle-content" y un div con la clase "content-box", y agrega un evento que muestre o oculte el contenido del div al hacer clic.
let mostrarOcultar = document.getElementById('toggle-content')
let div = document.querySelector('.content-box')

mostrarOcultar.addEventListener('click', function(){
    div.classList.toggle('mostrar')
})

// Ejercicio 12: Prevenir el Comportamiento por Defecto en un Enlace: Selecciona un enlace con la clase "no-default" y agrega un evento para evitar que el enlace navegue a otra página, mostrando en su lugar un mensaje en consola.
let enlace = document.querySelector('.no-default')
enlace.addEventListener('click', function(event){
    event.preventDefault()
    console.log('No se llevo al enlace')
})

// Ejercicio 13: Cambiar el Estilo de un Elemento: Selecciona un botón con el id "add-class" y un párrafo con la clase "text". Agrega un evento que añada una clase "highlight" al párrafo y que cambie su estilo (A lo que gustes).

let bton = document.getElementById('add-class')
let p = document.querySelector('.text')
bton.addEventListener('click', function(){
    p.classList.add('highlight')
})

// Ejercicio 14: Alternar Contenido de Texto: Selecciona un botón con el id "toggle-text" y un párrafo con la clase "text-toggle". Agrega un evento que cambie el texto del párrafo entre "Texto 1" y "Texto 2".

let toggleBtn = document.getElementById('toggle-text')
let toggleP = document.querySelector('.text-toggle')
toggleBtn.addEventListener('click', function(){
    toggleP.textContent = 'texto2'
})

// Ejercicio 15: Agregar Contenido HTML Dinámicamente: Selecciona un botón con el id "add-html" y un div con la clase "container". Agrega un evento click que inserte un bloque de HTML dentro del div.

let btn2 = document.getElementById('toggle2-text')
let contenedor = document.querySelector('.container')
let parrafoToggle = document.createElement('p')
parrafoToggle.textContent = 'HOLAAAAA'
btn2.addEventListener('click', function(){
    contenedor.append(parrafoToggle)
})

// Ejercicio 16: Crear y Agregar un Nuevo Elemento al DOM: Selecciona un botón con el id "create-element". Agrega un evento que cree un nuevo párrafo p con el texto "Elemento creado" y lo añada al final de un div con la clase "content".

let newElemnt = document.createElement('button')
newElemnt.setAttribute('id', 'create-element')
newElemnt.innerText = 'hazme click'
cuerpo.append(newElemnt)
let newDiv = document.createElement('div')
newDiv.classList.add('content')
cuerpo.append(newDiv)
newElemnt.addEventListener('click', function(){
    let newP = document.createElement('p')
    newP.innerText = 'Elemento creado'
    newDiv.append(newP)
})

// Ejercicio 17: Cambiar el Color de Fondo de Múltiples Elementos: Selecciona todos los elementos li dentro de una lista con la clase "color-list" y un botón con el id "change-color". Agrega un evento que cambie el color de fondo de cada li

let colorList = document.querySelector('.colorList')
let colorItem = document.querySelectorAll('.color-item')
let changeColor = document.getElementById('change-color')
changeColor.addEventListener('click', function(){
    colorItem.forEach(function(item){
        item.style.backgroundColor = 'red'
    })
})

// Ejercicio 18: Crear una Lista de Ítems Dinámicamente: Selecciona un botón con el id "create-list". Agrega un evento que cree una nueva lista ul y añada cinco elementos li dentro de ella, agregando la lista al final de un div con la clase "list-container".

let crearLista = document.getElementById('create-list')
let crearDiv = document.createElement('div')
crearDiv.classList.add('list-container')
cuerpo.append(crearDiv)
crearLista.addEventListener('click', function(){
    let nuevaLista = document.createElement('ul')
    crearDiv.append(nuevaLista)
    for (i = 0; i <= 4; i++){
        let itemLista = document.createElement('li')
        itemLista.innerText = `Item ${i+1}`
        nuevaLista.append(itemLista)
    }
    
})

// Ejercicio 20: Cambiar el Tamaño de un elemento HTML: Selecciona un elemento con el id "resize-image" y agrega un evento que cambie su estilo.

let elementSize = document.getElementById('resize-image')
elementSize.addEventListener('click', function(){
    elementSize.classList.toggle('resize')
})