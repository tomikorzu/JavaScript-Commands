//Ejercicio: Manipulación de Objetos en JavaScript - El Señor de los Anillos
//Enunciado:
// En este ejercicio, vas a trabajar con un objeto Personaje basado en el universo de El Señor
// de los Anillos. Tu tarea es crear y manipular este objeto utilizando funciones. Debes
// implementar varias funciones para actualizar y acceder a las propiedades del objeto.

//Ejercicio 1
// Crea un objeto Personaje con las siguientes propiedades:
// ○ Nombre
// ○ Raza
// ○ Edad
// ○ Clase (por ejemplo: Guerrero, Mago, etc.)
// ○ Arma
let character = {
    name: 'Tomas',
    race: 'Race1',
    age: 19,
    class: 'wizard',
    weapom: 'gun'
}
console.log(character)

// Ejercicio 2
// Añade una nueva propiedad Aliado al objeto Personaje. Este debe ser de tipo string.
character.ally = 'joaco'
console.log(character)

//Ejercicio 3
// Actualiza la propiedad Edad del objeto Personaje para incrementar su valor en 1
// usando tanto la notación de punto como la de corchetes.
character.age +=1;
character['age'] +=1;
console.log(character.age) 

//Ejercicio 4
// Crea una función que reciba a Personaje, verifique si la propiedad Edad existe, y si
// existe, aumente su edad en 1.
function agePropertyExists(character){
    console.log(character)
    if (character.age){
        let confirmAgeExist = true;
        return confirmAgeExist
    } else{
        let confirmAgeExist = false;
        return confirmAgeExist
    }
}
let agePropertyExistsResult = agePropertyExists(character)
if (agePropertyExistsResult === true) {
    let characterModificado = {
        name: character.name,
        age: character.age + 1
    }
    character.age = character.age + 1
    console.log('The age property exist, and now the age is: ' + (character.age))
} else {
    console.log('The age property doesnt exists')
}

// Ejercicio 5
// Crea una función que reciba a Personaje, verifique que tenga la propiedad Aliado, y si
// la tiene, devuelva true o false si el nombre del aliado tiene 10 caracteres.
character.ally = 'Joacooooooo'
function receiveMessage(character){
    if (character.ally && character.ally.length >= 10){
        let confirmAlly = true
        return confirmAlly
    } else{
        let confirmAlly = false
        return confirmAlly
    }
}
let receiveMessageResult = receiveMessage(character)
console.log(receiveMessageResult)

// Ejercicio 6
// Crea una función que reciba el objeto Personaje y retorne true o false si Nombre es
// igual al Nombre del aliado.
character.name = 'leonardoDaVinci'
character.ally = 'leonardoDaVinci'
function receiveObject (character){
    return character.name === character.ally
}
let receiveObjectResult = receiveObject(character)
console.log(receiveObjectResult)

// Ejercicio 7
// Crea una función que reciba el objeto Personaje y retorne una cadena que describa
// al personaje de la siguiente manera: "Nombre: [nombre], Edad: [edad], Arma: [arma],
// Raza: [raza]".
character.description = 'His name is ' + character.name + ', his age is ' + character.age + ', his weapon ' + character.weapom + ' and his race is ' + character.race
function receiveObjectOfCharcter(character){
    return character.description
}
let receiveObjectOfCharcterResult = receiveObjectOfCharcter(character)
console.log(receiveObjectOfCharcterResult)

// Ejercicio 8
// Crea una función que reciba a Personaje y verifique si es mayor de 100 años
// (considerando que en el universo de El Señor de los Anillos algunas razas pueden
//  vivir mucho más tiempo).
character.age = 100
function ageCharacterGreaterThan (character) {
    if (character.age > 100){
        return true
    } else{
        return false
    }
}

let ageCharacterGreaterThanResult = ageCharacterGreaterThan(character)
console.log(ageCharacterGreaterThanResult)

//Ejercicio 9
// Crea una función que reciba a Personaje y devuelva un objeto con Nombre y Edad.

function receiveNameAndAge(character){
    return {
        name: character.name,
        age : character.age
    }
}

let receiveNameAndAgeResult = receiveNameAndAge(character)
console.log(receiveNameAndAgeResult)

//Ejercicio 10
// Añade una propiedad Habilidades que sea un array de habilidades del personaje y
// accede a ese array por medio de notación de punto o corchetes.
character.skill = ['dance', 'sleep']
console.log(character.skill)
console.log(character['skill'])

//Ejercicio 11
// Crea una función que reciba una habilidad y la agregue al array Habilidades.
function receiveSkill(character){
    let newSkill = character.skill.push('Eat')
    return character.skill
}
let receiveSkillResult = receiveSkill(character)
console.log(receiveSkillResult)

// Ejercicio 12
// Crea una función que reciba una habilidad y la devuelva si existe en el array
// Habilidades.
let characterSkill = character.skill
function existSkill (character){
    return character.some(function(skill){
        return skill === 'Eat'
    })
}
console.log(existSkill(character.skill))

// ejercicio 13
// Crea una función que retorne cuántas habilidades tiene el personaje
function returnSkillQuantity(character){
    return character.skill.length
}
console.log(returnSkillQuantity(character))

// Ejercicio 14
// Añade una propiedad Aliados que sea un array de nombres de aliados y accede a ese
// array por medio de notación de punto o corchetes.

character.allies = ['Bartolome', 'Javier']
console.log(character['allies'])
console.log(character.allies)

// Ejercicio 15
// Crea una función que reciba un aliado y lo agregue al array Aliados
function receiveAlly (newAlly){
    character.allies.push(newAlly) 
    return character.allies
}
console.log(receiveAlly('Roberto'))

// Ejercicio 16
// Crea una función que reciba un aliado y lo elimine del array Aliados
function deleteOfAllies(deleteAlly){
    return character.allies.filter(function(ally){
        return ally !== deleteAlly
    })
}
console.log(deleteOfAllies('Bartolome'))

// Ejercicio 17
// Crea una función que devuelva una lista de los nombres de los aliados

let list = character.allies.filter(function(ally){
    return ally
})
function nameList(character){
    return character.allies
}
console.log(nameList(character))

// Ejercicio 18
// Crea una función que reciba un nuevo nombre de arma y actualice la propiedad
// Arma del objeto Personaje.
character.weapom = ['gun', 'gun2']
function newWeaponName(newWeapon){
    character.weapom.push(newWeapon)
    return character.weapom
}
console.log(newWeaponName('gun3'))

// Ejercicio 19
// Crea una función que reciba una clase y devuelva true o false si el personaje tiene
// esa clase.
character.class = ['wizard', 'vercel']
function hasClass(classExist){
    return character.class.some(function(clase){
        return clase === classExist
    })
}
console.log(hasClass('wizard'))

// ejercicio 20
// Crea una función que reciba a Personaje, el nombre de una propiedad (como "Edad",
// "Clase", etc.), y un nuevo valor para esa propiedad. La función debe actualizar la
// propiedad del objeto Personaje con el nuevo valor proporcionado sin usar métodos
// avanzados.
function receiveCharacter(name, age, weapon){
    character.name = name
    character.age = age
    character.weapom = weapon
    return character
}
console.log(receiveCharacter('Fernando', 30, 'gun5'))

// Destructing with shrek

// Part 1

// Ejercicio 1
// Crear un objeto con las propiedades nombre y especie de Shrek, y luego extraer esas propiedades con destructuring
let firstCharacter = {
    nameShrek: 'Shrek',
    specieShrek: 'ogre'
}
let {nameShrek,specieShrek} = firstCharacter
console.log(nameShrek)
console.log(specieShrek)

// Ejercicio 2
// Crear un objeto con las propiedades nombre, edad, y especie de Burro, y luego extraer nombre y edad con alias nombrePersonaje y edadPersonaje respectivamente.
let donkeyCharacter = {
    name: 'donkey',
    age: '30',
    specie: 'donkay'
}
let {name: nameDonkay , age:ageDonkay} = donkeyCharacter
console.log(nameDonkay, ageDonkay)

// Ejercicio 3
// Crear un objeto con las propiedades nombre y especie de Fiona, y luego extraer nombre y asignar un valor predeterminado de 'desconocida' a ocupacion.
let fionaCharacter = {
    name3: 'Fiona',
    specie: 'ogre',
    ocupationFiona: 'astronauta'
}
let {name3: nameFiona, ocupationFiona = 'ocupacion por defecto'} = fionaCharacter
console.log(fionaCharacter)
console.log(nameFiona, ocupationFiona)

// Ejercicio 4
// Crear un objeto con las propiedades nombre, especie, y edad de Shrek, y luego usar destructuring en los parámetros de una función para extraer nombre y especie.
let nameAndSpecieShrek = {
    name4: 'Shrek',
    specie4: 'ogre',
    age4: 60
}
let {name4: nameShrek4, specie4: specieShrek4, age4: ageShrek} = nameAndSpecieShrek
console.log(nameShrek4, specieShrek4)

// Ejercicio 5
// Crear un objeto con las propiedades nombre, especie, edad, y amigos de Shrek, y luego extraer nombre, especie, y amigos, asignando un valor predeterminado de [] a enemigos si no existe.
let nameSpecieFriendsShrek = {
    friendsS : ['donkay', 'fiona', 'rex']
}
let {friendsS: friendsShrek , enemiesShrek = ['unknown']} = nameSpecieFriendsShrek

console.log(nameShrek, specieShrek, friendsShrek, enemiesShrek)

// Ejercicio 6
// Crear un objeto con las propiedades nombre, especie, edad, y amigos de Shrek, y luego extraer nombre y amigos, y luego extraer el primer amigo.
console.log(nameShrek, friendsShrek, [friendsShrek[0]])

//Ejercicio 7
// Crear un array de objetos con las propiedades nombre y edad de Shrek, Burro, y Fiona, y luego extraer nombre y edad de cada objeto en el array. Ponerle un alias adecuado a cada uno.
let {ageFiona = 50} = fionaCharacter
let arrayObjects = [nameShrek, ageShrek, nameDonkay, ageDonkay, nameFiona, ageFiona]
console.log(arrayObjects)

// Part 2

// Ejercicio 1
// Crear un objeto shrek con las propiedades nombre, especie, edad, y amigos (que es un array de objetos con propiedades nombre y especie). Luego extraer nombre, especie, y los nombres de los amigos.

let shrekObject = {
    friends : ['donakay', 'fiona', 'rex'],
    race: ['donkay', 'ogre', 'dinosaur']
}
let {friends: friendsShrek2, race : raceShrek} = shrekObject
console.log(friendsShrek2[0], raceShrek[0])
console.log(friendsShrek2[1], raceShrek[1])
console.log(friendsShrek2[2], raceShrek[2])

// Ejercicio 2
// Crear un objeto pelicula con las propiedades titulo, año, y personajes (que es un array de objetos con propiedades nombre, especie, y rol). Luego extraer el título de la película y los nombres de los personajes principales (aquellos cuyo rol sea 'principal').
let film = {
    title: 'Harry Potter',
    year: 2015,
    characters: [{name1: 'harry', race1:'human', rol:'principal'}, {name2: 'malfoy', race2:'human', rol:'secondary'}, {name3: 'Joaquin', race3:'human', rol:'principal'}]
}
let {title : titleFilm, characters: charactersFilm} = film
let rol1 = charactersFilm.filter(function(character){
    return character.rol === 'principal'
})
console.log(titleFilm, rol1)

// Ejercicio 3
// Crear un objeto misiones con las propiedades titulo, año, y detalles (que es un objeto con propiedades misionPrincipal y misionSecundaria, ambos con propiedades descripcion y personajes (que es un array de nombres)). Luego extraer la descripción de la misión principal y los nombres de los personajes de la misión secundaria.
let mission = {
    titleMission: 'MakeLandingPage',
    ageMission : 2 ,
    detailsMission: {
        principalMission: {descriptionMission: 'Descripcion', charactersMission: ['Leonardo', 'agstin']} ,
        secondaryMission: {descriptionMission: 'Descripcion', charactersMission: ['Gabriel, JAvier']}
    }
}
let {detailsMission:{principalMission:{descriptionMission: descriptionPrincipal}},  detailsMission:{secondaryMission:{charactersMission: charactersSecondary}}} = mission
console.log(descriptionPrincipal, charactersSecondary)

// Ejercicio 4
// Crear un objeto evento con las propiedades nombre, fecha, y invitados (que es un array de objetos con propiedades nombre, especie, y confirmado (booleano)). Luego extraer el nombre del evento y los nombres de los invitados confirmados.
let eventParty = {
    eventName : 'Kapital',
    eventDate: 'saturday',
    eventGuests: [{nameGuest: 'Bauti', specieGuest: 'human', confirmedGuest: true}, {nameGuest: 'Lucas', specieGuest: 'human', confirmedGuest: false}, {nameGuest: 'Tomas', specieGuest: 'human', confirmedGuest: true}]
    
}
let {eventGuests: invitados, eventName: nombreEvento} = eventParty
let invitadoConfirmado = invitados.filter(function(invitado){
    if (invitado.confirmedGuest === true){
        return invitado.nameGuest
    }
})
console.log('Nombre del evento: ' + nombreEvento)
console.log('Nombres confirmados: ', invitadoConfirmado)

// Ejercicio 5
// Crear un objeto banda con las propiedades nombre, genero, y miembros (que es un array de objetos con propiedades nombre, instrumento, y experiencia (en años)). Luego extraer el nombre del género y los instrumentos de los miembros con más de 5 años de experiencia.
let banda ={
    nombre : 'somoNosotro',
    genero: 'guaracha',
    miembros: [{nombreMiembro: 'laloDj', instrumento: 'teclado', experiencia: 2}, {nombreMiembro: 'gusty', instrumento: 'bateria', experiencia: 6}, {nombreMiembro: 'crisMj', instrumento: 'microfono', experiencia: 12}]
}
let {miembros: miembrosBanda, genero: generoBanda} = banda
let bandaResult = miembrosBanda.filter(function(miembro){
    if (miembro.experiencia >= 5){
        return miembro.instrumento 
    }
})

console.log('El genero es', generoBanda)
console.log('Los instrumentos de los que tienen mas de 5 anios de experiencia son:', bandaResult)

// Part 3
// Ejercicio 1
// Crear una función crearPareja que reciba dos objetos ogro y princesa y devuelva un nuevo objeto pareja combinando sus propiedades, renombrando nombre a nombreOgro y nombrePrincesa. Además, si la edad de cualquiera de ellos es mayor a 28, agregar un array misiones con una misión inicial.
function crearPareja(ogro, princesa){
    let {nombre: nombreOgro, edad: edadOgro} = ogro
    let {nombre: nombreFiona, edad: edadFiona} = princesa
    if (edadOgro >= 28 && edadFiona >= 28){
        ogro.misiones = ['MisionInicial', 'MisionFinal']
        return `${nombreOgro}, ${nombreFiona}, tienen como misiones: ${ogro.misiones}`
    } else{
        return `${nombreOgro}, ${nombreFiona}, no tienen como misiones`
    }
}
console.log(crearPareja({nombre: 'Shrek', edad: 30}, {nombre: 'fiona', edad: 29}))

// Ejercicio 2 ( no se hace )

// Ejercicio 3
// Crear una función unirPersonajes que reciba un array de objetos personajes y devuelva un nuevo objeto alianza con propiedades nombres (un array de los nombres de los personajes) y reinos (un array de los reinos de los personajes). Además, si cualquier personaje pertenece al reino 'Pantano', agregar 'Pantano' a un array lugaresImportantes.
// Let personajes = [
//     { nombre: 'Shrek', reino: 'Pantano' },
//     { nombre: 'Fiona', reino: 'Duloc' },
//     { nombre: 'Burro', reino: 'Pantano' }
//   ];
  
function unirPersonajes(objetosPersonales){
    let alianza = {
        nombre: ['pinocho', 'lobo'],
        reinos: ['pantano', 'duloc']
    }
    let {nombre:nombreAliado, reinos: reinoAliado} = alianza
    if (reinoAliado.includes('pantano')){
        objetosPersonales.lugaresImportantes = ['pantano']
    }
    return `Los aliados son ${nombreAliado}, que vienen de los reinos: ${reinoAliado} y el lugar importante es: ${objetosPersonales.lugaresImportantes}`
     
}
console.log(unirPersonajes({nombre : 'shrek', reino: 'pantano'}, {nombre : 'fiona', reino: 'duloc'}, {nombre : 'burro', reino: 'pantano'}))

// Ejercicio 4
// Crear una función resumenPersonajes que reciba un array de objetos personajes donde cada objeto tiene una propiedad info que a su vez es un objeto con propiedades nombre, edad, y reino. Devuelve un nuevo objeto resumen con propiedades nombres (array de nombres) y edadesMayores (array de edades mayores a 30). Si algún personaje tiene edad mayor a 40, agregar 'mayoresDe40' a un array categorias.
// Let personajes = [
//     { info: { nombre: 'Shrek', edad: 35, reino: 'Pantano' } },
//     { info: { nombre: 'Fiona', edad: 28, reino: 'Duloc' } },
//     { info: { nombre: 'Rey Harold', edad: 45, reino: 'Far Far Away' } }
//   ];

function resumenPersonajes(objetosPersonajes){
    let nombres = objetosPersonajes.map(function(objeto) {
        return objeto['info']['nombre'];
    });

    let edades = objetosPersonajes.map(function(objeto){
        return objeto['info']['edad']
    })

    let edadesMayores = edades.filter(function(edad){
        return edad >= 30
    })

    let edadesMayores40 = edades.filter(function(edad){
        return edad >= 40
    })

    return resumenPropiedades = {
        nombres: nombres,
        edadesMayoresDe30: edadesMayores,
        categorias: edadesMayores40
    }
}
console.log(resumenPersonajes([
    { info: { nombre: 'Shrek', edad: 35, reino: 'Pantano' } },
    { info: { nombre: 'Fiona', edad: 28, reino: 'Duloc' } },
    { info: { nombre: 'Rey Harold', edad: 45, reino: 'Far Far Away' } }]))



// Parte 4
// Ejercicio 1
// Crea una función agregarHobbies que reciba dos objetos persona y nuevosHobbies. El objeto persona tiene propiedades nombre, edad, y hobbies (un array de hobbies). El objeto nuevosHobbies tiene una propiedad hobbies que también es un array de nuevos hobbies. Usa el spread operator para combinar el array hobbies de persona con el array hobbies de nuevosHobbies en un nuevo objeto personaActualizada. Devuelve personaActualizada.

function agregarHobbies(persona, nuevosHobbies){
    let {nombre, edad, hobbies: hobbiesAntiguos} = persona

    let {nuevosHobbies: hobbie} = nuevosHobbies

    let hobbiesDePersona = [...hobbiesAntiguos, ...hobbie]

    return personaActualizada = {
        nombre: nombre,
        edad: edad,
        hobbiesActualizados: hobbiesDePersona
    }
}
console.log(agregarHobbies(
    {nombre: 'Tomas', edad: 18, hobbies: ['Futbol', 'esquiar']},
    {nuevosHobbies: ['Programar'] } ))
    
// Ejercicio 2
// Crea una función actualizarDatos que reciba dos objetos datosPersonales y datosContacto. El objeto datosPersonales tiene propiedades nombre y edad, y el objeto datosContacto tiene propiedades direccion y telefono. Usa el spread operator para combinar ambos objetos en un nuevo objeto informacionCompleta. Devuelve informacionCompleta.
function actualizarDatos(datosPersonales, datosContacto){
    return informacionCompleta = {...datosPersonales, ...datosContacto}
    // return informacionCompleta
}
console.log(actualizarDatos(
    {nombre: 'tomas', edad: 18}, 
    {direccion: 'ruy diaz', telefono: '1234-1234'}))

// Ejercicio 3
// Crea una función agregarCaracteristicas que reciba dos objetos vehiculo y caracteristicas. El objeto vehiculo tiene propiedades marca y modelo, y el objeto caracteristicas tiene propiedades color y tipo. Usa el spread operator para combinar estos objetos en un nuevo objeto vehiculoCompleto. Devuelve vehiculoCompleto, agregando las propiedades de caracteristicas solo si el color es 'rojo'.

function agregarCaracteristicas (vehiculo, caracteristicas){
    let vehiculoCompleto
    let {color} = caracteristicas
    if (color === 'rojo'){
        vehiculoCompleto = {...vehiculo, ...caracteristicas}
    } else{
        vehiculoCompleto = {...vehiculo}
    }
    return vehiculoCompleto
}
console.log(agregarCaracteristicas(
    {marca: 'volkswagen', modelo: 'tiguan'},
    {color: 'gris oscuro', tipo: 'camioneta'}
))

// Ejercicio 4
// Crea una función eliminarTelefono que reciba un objeto persona y elimine explícitamente la propiedad telefono del objeto. Usa el spread operator para crear un nuevo objeto personaSinTelefono que contenga todas las propiedades del objeto original persona excepto telefono. Devuelve personaSinTelefono.
function eliminarTelefono(persona){
    let { telefono, ...personaSinTelefono } = persona
    return personaSinTelefono
}
console.log(eliminarTelefono(
    {nombre: 'tomas', edad: 18, direccion: 'ruy diaz', telefono: '1234-1234'}
))

// Parte 5
// Ejercicio 1
// Crea una función combinacionPersonajes que reciba dos objetos personajes1 y personajes2, donde personajes1 tiene propiedades nombre y habilidades (un array de habilidades), y personajes2 tiene propiedades nombre y atributos (un objeto con fuerza y destreza). Usa el spread operator para combinar habilidades y atributos en un solo objeto informacion, y devuelve un nuevo objeto con el nombre y el objeto informacion combinado.
function combinacionPersonajes(personajes1, personajes2){
    let {nombre, habilidades} = personajes1
    let {nombre: nombre2, atributos} = personajes2
    let {fuerza, destreza} = atributos
    let informacion = {fuerza, destreza, habilidades}
    return {
        nombres: nombre + ' y ' + nombre2,
        informacionCombinada: informacion
    }
}
console.log(combinacionPersonajes(
    { nombre: 'Tomas', habilidades: ['Programar', 'Escribir'] },
    { nombre: 'Juan', atributos: { fuerza: 10, destreza: 15 } }
));

// ejercicio 2
// Crea una función combinarClientes que reciba dos objetos cliente1 y cliente2, donde cliente1 tiene propiedades nombre y datos (un objeto con edad y direccion), y cliente2 tiene propiedades nombre y informacion (un objeto con telefono y email). Usa el spread operator para combinar datos y informacion en un solo objeto perfilCompleto, y devuelve un nuevo objeto con el nombre y el objeto perfilCompleto.
function combinarClientes (cliente1, cliente2){
    let {nombre, datos} = cliente1
    let {informacion} = cliente2
    let perfilCompleto = {...datos, ...informacion}
    return {
        nombre: nombre,
        perfilCompleto
    }
}
console.log(combinarClientes(
    {nombre: 'pedro', datos: {edad: 25, direccion: 'moreno'}},
    {nombre2: 'Jose', informacion: {telefono: '1234-1234', email:'pedro@.com'}}
))

// Ejercicio 3
// Crea una función actualizarPerfil que reciba dos objetos usuario y detalles. El objeto usuario tiene propiedades nombre, edad, y colorFavorito, y el objeto detalles tiene propiedades direccion y telefono. Usa el spread operator para devolver un usuario con nombre, color favorito solo si es morado, direccion y telefono de detalles, pero solo si la edad del usuario es mayor de 25. Si la edad es 25 o menor, establece valores predeterminados para direccion y telefono en el objeto resultante.
function actualizarPerfil(usuario, detalles) {
    let { nombre, edad, colorFavorito } = usuario
    let { direccion, telefono } = detalles

    let direccionDefault = 'No disponible'
    let telefonoDefault = 'No disponible'

    if (edad > 25) {
        if (colorFavorito === 'morado') {
            return {
                nombre,
                colorFavorito,
                direccion,
                telefono
            }
        } else {
            return {
                nombre,
                direccion,
                telefono
            }
        }
    } else {
        if (colorFavorito !== 'morado') {
            return {
                nombre,
                direccion: direccionDefault,
                telefono: telefonoDefault
            }
        } else {
            return {
                nombre,
                direccion: direccionDefault,
                telefono: telefonoDefault
            }
        }
    }
}

console.log(actualizarPerfil(
    { nombre: 'Roman', edad: 26, colorFavorito: 'morado' },
    { direccion: 'Ruy', telefono: '1234-1234' }
))


// Ejercicio 4
// Crea una función actualizarInfo que reciba dos objetos usuario y detalles, y un array de palabrasClave. El objeto usuario tiene propiedades nombre, edad, y colorFavorito, y el objeto detalles tiene propiedades direccion, telefono, y ocupacion. El array palabrasClave contiene una lista de palabras que pueden estar presentes en el campo colorFavorito de usuario. Usa el spread operator para actualizar el objeto usuario con direccion, telefono, y ocupacion de detalles solo si el colorFavorito de usuario está presente en palabrasClave. Si el colorFavorito no está en palabrasClave, establece valores predeterminados para direccion, telefono, y ocupacion. Devuelve el objeto usuarioActualizado.
function actualizarInfo(usuario, detalles, palabrasClave){
    let {nombre, edad, colorFavorito} = usuario
    let {direccion, telefono, ocupacion} = detalles
    let {...usuarioInfo} = usuario
    let {...usuarioDetalles} = detalles
    let palabraResult = palabrasClave.some(function(palabra){
        return palabra === colorFavorito
    })
    if (palabraResult === true){
        return {...usuarioInfo, ...usuarioDetalles}
    } else{
        let predeterminados = {
            direccion: 'predeterminado',
            telefono: 'predeterminado',
            ocupacion: 'predeterminado'
        }
        return {...usuarioInfo, ...predeterminados}
    }
    console.log(palabraResult)
}

console.log(actualizarInfo(
    {nombre: 'tomas', edad: 18, colorFavorito: 'rojo'},
    {direccion: 'miami', telefono: '1234-1234', ocupacion: 'programador'},
    ['amarillo', 'azul', 'rojo']
))



//Global objects
// ejercicio 1
//Tienes un objeto donde las claves son nombres de productos y los valores son booleanos que indican si el producto está en stock o no. Usa Object.entries para filtrar el objeto y obtener solo los productos disponibles. Crear un nuevo objeto availableProducts con los productos disponibles
//const products = { "Laptop": true, "Smartphone": false, "Tablet": true, "Monitor": false }; 
// Resultado esperado: { "Laptop": true, "Tablet": true }

let products = { "Laptop": true, "Smartphone": false, "Tablet": true, "Monitor": false }

let availableProducts = Object.entries(products).filter(function([product, stock]){
    if (stock){
        return product
    }
})
console.log(availableProducts)


// Ejercicio 2
// Tienes un objeto que representa los resultados de una encuesta, con las claves como preguntas y los valores como respuestas. Usa Object.entries para convertir este objeto en un array de strings, donde cada string tiene el formato "Pregunta: Respuesta".
// const surveyResults = { "favoriteColor": "Blue", "likesPizza": "Yes", "ageGroup": "25-34" }; 
// Resultado esperado: ["favoriteColor: Blue", "likesPizza: Yes", "ageGroup: 25-34"]
const surveyResults = { "favoriteColor": "Blue", "likesPizza": "Yes", "ageGroup": "25-34" }; 
let encuesta = Object.entries(surveyResults).map(function([preguntas, respuestas]){
    return `${preguntas}: ${respuestas}`
})
console.log(encuesta)

// Ejercicio 3
// Tienes un objeto que representa las calificaciones de un grupo de estudiantes en un examen, con sus nombres como claves y las calificaciones como valores. Usa Object.values para contar cuántas calificaciones únicas hay.
// const grades = { "Alice": 85, "Bob": 75, "Carol": 85, "David": 90, "Eve": 75 }; 
// Resultado esperado: 3 (porque hay tres calificaciones únicas: 85, 75, 90)

const grades = { "Alice": 85, "Bob": 75, "Carol": 85, "David": 90, "Eve": 75 }; 
let calificaciones = Object.values(grades).filter(function(grade, index, person){
    return person.indexOf(grade) === index
})
console.log(calificaciones.length)

// Ejercicio 4
// Tienes un objeto que representa un carrito de compras, donde las claves son los nombres de los productos y los valores son los precios de esos productos. Usa Object.entries para calcular el precio total de todos los productos en el carrito.
// const cart = { "Laptop": 1000, "Smartphone": 700, "Tablet": 300, "Monitor": 200 }; 
// Resultado esperado: 2200

const cart = { "Laptop": 1000, "Smartphone": 700, "Tablet": 300, "Monitor": 200 }; 
let cartResult = Object.entries(cart).map(function([producto, precio]){ 
    return precio
})
let [p1,p2,p3,p4] = cartResult
let precioFinal = p1 + p2 + p3 + p4
console.log(precioFinal)


// Ejercicio 5
// Tienes un objeto donde las claves son los nombres de los empleados y los valores son sus salarios. Usa Object.keys para listar los nombres de los empleados que tienen un salario superior a 5000.
// const employees = { "John": 4500, "Jane": 7000, "Mike": 3000, "Alice": 5500, "Bob": 4800 }; 
// Resultado esperado: ["Jane", "Alice"]

let employeesEjercicio5 = { "John": 4500, "Jane": 7000, "Mike": 3000, "Alice": 5500, "Bob": 4800 }


let empleadoResult = Object.keys(employeesEjercicio5).filter(function(e){
    return employeesEjercicio5[e] > 5000
})
console.log('i',empleadoResult)

// let empleados = Object.keys(employees)
// let salarios = Object.values(employees).filter(function(salario){
//     if (salario > 5000){
//         return empleados
//     }
// })
// console.log(salarios)

// let sueldosMayoresA5000 = Object.entries(employees)
//     .filter(function([empleado, dinero]){
//         return dinero > 5000
//     })
//     .map(function([empleado, dinero]){
//         return empleado
//     })

// console.log(sueldosMayoresA5000)

// Ejercicio 6
// Tienes un objeto donde las claves son nombres de productos y los valores son descripciones. Usa Object.keys para crear un nuevo objeto que contenga el nombre del producto y el número de caracteres en la descripción.
// const products = { "Laptop": "A high performance laptop.", "Smartphone": "A latest model smartphone.", "Tablet": "A lightweight tablet." }; 
// Resultado esperado: // { "Laptop": 24, "Smartphone": 25, "Tablet": 21 }

const productos = { "Laptop": "A high performance laptop.", "Smartphone": "A latest model smartphone.", "Tablet": "A lightweight tablet." }; 
let productosResult = Object.entries(productos).map(function([producto, desc]){
    return `${producto}: ${desc.length}`
})
console.log(productosResult)

// Ejercicio 7 

// Resultado esperado: console.log(colorExiste("rojo", "nombre")); // true

// Crear una función que:
// Reciba por parámetro una key y un valor
// Debe asegurarse que la key exista
// Retorne si existe o no el color

let colores = [ { nombre: "rojo", rgb: "rgb(255, 0, 0)" }, { nombre: "verde", rgb: "rgb(0, 255, 0)" }, { nombre: "azul", rgb: "rgb(0, 0, 255)" }, { nombre: "amarillo", rgb: "rgb(255, 255, 0)" }, { nombre: "cian", rgb: "rgb(0, 255, 255)" }, { nombre: "magenta", rgb: "rgb(255, 0, 255)" }, { nombre: "blanco", rgb: "rgb(255, 255, 255)" }, { nombre: "negro", rgb: "rgb(0, 0, 0)" }, { nombre: "gris", rgb: "rgb(128, 128, 128)" }, { nombre: "naranja", rgb: "rgb(255, 165, 0)" }, { nombre: "morado", rgb: "rgb(128, 0, 128)" }, { nombre: "rosado", rgb: "rgb(255, 192, 203)" }, { nombre: "marrón", rgb: "rgb(165, 42, 42)" }, { nombre: "beige", rgb: "rgb(245, 245, 220)" }, { nombre: "turquesa", rgb: "rgb(64, 224, 208)" }, { nombre: "lila", rgb: "rgb(200, 162, 200)" }, { nombre: "oliva", rgb: "rgb(128, 128, 0)" }, { nombre: "salmon", rgb: "rgb(250, 128, 114)" }, { nombre: "púrpura", rgb: "rgb(128, 0, 128)" }, { nombre: "teal", rgb: "rgb(0, 128, 128)" }, { nombre: "azul claro", rgb: "rgb(173, 216, 230)" } ];

function colorExiste(valor, key){
    return Object.values(colores).some(function(color){
        return color[key] === valor
    })
}
console.log(colorExiste('salmon', 'nombre'))