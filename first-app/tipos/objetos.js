let nombre = "tomas"
let age = 18
let musica = "Guaracha"

let dj = {
    nombre: "tomas",
    age: 18,
    musica: "guaracha",
}

dj.musica = "techno"
console.log(dj)//PAra ver todos los atributos y valores
console.log(dj.age) //PAra ver el valor de un solo atributo
console.log(dj["nombre"]) //Hace lo mismo



delete dj.musica

console.log(dj.musica)