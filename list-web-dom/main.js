let iconTheme = document.querySelector('.color-icon')
let cuerpo = document.querySelector('body')
let contenedor = document.querySelector('.global-container')

let colorChange = document.getElementById('color-theme')
colorChange.addEventListener('click', function(){
    iconTheme.classList.toggle('fa-moon')
    cuerpo.classList.toggle('light-theme')
    
})

let addButton = document.getElementById('add-task')
let quitButton = document.getElementById('quit-task')
let list1 = document.querySelector('.list1')
let list2 = document.querySelector('.list2')

addButton.addEventListener('click', function(){
    let formulario = document.createElement('form')
    formulario.classList.add('form')
    cuerpo.append(formulario)
    contenedor.style.filter = 'blur(10px)'
    let titulo = document.createElement('h2')
    titulo.innerText = 'Que tarea quieres agregar?'
    formulario.append(titulo)
    let inputButtonDiv = document.createElement('div')
    inputButtonDiv.classList.add('input-btn-container')
    formulario.append(inputButtonDiv)
    let inputForm = document.createElement('input')
    inputForm.classList.add('input-form')
    inputButtonDiv.append(inputForm)
    let sendButton = document.createElement('button')
    sendButton.classList.add('send-btn')
    sendButton.innerText = 'Enviar'
    inputButtonDiv.append(sendButton)
    sendButton.addEventListener('click', function(event){
        event.preventDefault()
        if (inputForm.value.length <= 0){
            alert('ERROR: ingrese una tarea valida')
        } else{
            sendButton.style.display = 'none'
            inputButtonDiv.style.justifyContent = 'center'
            inputButtonDiv.style.gap = '15px'
            titulo.innerText = 'A que lista lo quieres agregar?'
            inputForm.style.display = 'none'
            sendButton.display = 'none'
            let listSelect1 = document.createElement('button')
            listSelect1.innerText = 'Lista 1'
            listSelect1.classList.add('list-btn')
            inputButtonDiv.append(listSelect1)
            let listSelect2 = document.createElement('button')
            listSelect2.innerText = 'Lista 2'
            listSelect2.classList.add('list-btn')
            inputButtonDiv.append(listSelect2)
            listSelect1.addEventListener('click', function(event){
                event.preventDefault()
                let newItem = document.createElement('li')
                newItem.innerText = inputForm.value
                list1.append(newItem)
                formulario.style.display = 'none'
                contenedor.style.filter = 'blur(0)'
                addButton.style.pointerEvents = 'auto'
            })
            listSelect2.addEventListener('click', function(event){
                event.preventDefault()
                let newItem = document.createElement('li')
                newItem.innerText = inputForm.value
                list2.append(newItem)
                formulario.style.display = 'none'
                contenedor.style.filter = 'blur(0)'
                addButton.style.pointerEvents = 'auto'
            })
        }
        
    })
    addButton.style.pointerEvents = 'none'
})

quitButton.addEventListener('click', function(){
    quitButton.style.pointerEvents = 'none'
    let allItems = document.querySelectorAll('li')
    allItems.forEach(function(item){
        let deleteButton = document.createElement('button')
        deleteButton.classList.add('icon-delete')
        item.append(deleteButton)
        let iconButton = document.createElement('i')
        iconButton.classList.add('fa-solid')
        iconButton.classList.add('fa-trash')
        deleteButton.append(iconButton)
        deleteButton.addEventListener('click', function(){
            item.style.display = 'none'
            quitButton.style.pointerEvents = 'auto'
            let allDeleteButtons = document.querySelectorAll('.fa-trash')
            allDeleteButtons.forEach(function(item){
                item.style.display = 'none'
            })
        })
    })

})