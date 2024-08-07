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
if (agePropertyExistsResult === true){
    console.log('The age property exist, and now the age is: ' + (character.age + 1))
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