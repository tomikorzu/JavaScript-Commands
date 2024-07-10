//ejercicio suma, resta, multiplicacion y division
let a = 25;
let b = 50;
suma = a + b;
resta = a - b;
multiplicacion = a*b;
division = a / b;
console.log('La suma entre a y b es', suma)
console.log('La resta entre a y b es', resta)
console.log('La multiplicacion entre a y b es', multiplicacion)
console.log('La division entre a y b es', division)

//ejercicio condiciones, si es par o impar
// % devuelve el resto de la division
// !== se utiliza para saber si es diferente
if (suma % 2 == 0){
    console.log('el numero es par')
}
else{
    console.log('el numero es impar')
}

//Bucles
console.log('bucles')
for (let i = 1; i <= 10; i++){
    console.log(i)
}
for (let j = 100; j <=105; j++){
    console.log(j)
}

//arrays
console.log('arrays')
let numerosArrays= [1,2,3,4,5];
let sumaArrays = 0
for (let a = 0; a < numerosArrays.length; a++){
    sumaArrays += numerosArrays[a]
}
console.log('la suma es:',sumaArrays)

//Funciones
console.log('Funciones')
function Mayor(n1,n2){
    if (n1 > n2){
        return n1
    }
    else if (n2 > n1){
        return n2
    }
    else{
        return 'son iguales'
    }
}
console.log(Mayor(100, 101))

//Objetos
let persona = {
    nombre: "hernan",
    edad: 18,
    ciudad: "CABA"
};
console.log(persona.nombre + " tiene " + persona.edad + " años y vive en " + persona.ciudad);

//Metodos de Array

let numeros = [1, 2, 3, 4, 5]
let cuadrados = numeros.map(num => num * num)
let pares = numeros.filter(num => num % 2 === 0)
let sumaTotal = numeros.reduce((acumulador, num) => acumulador + num, 0)
console.log('cuadrados: ' + cuadrados)
console.log('pares: ' + pares)
console.log('suma total: ' + sumaTotal)

//Cambiar texto al clickear
document.getElementById('originalText').addEventListener('click', function(){
    document.getElementById('originalText').innerHTML = 'Texto cambiado'
})

//Eventos con clicks
document.getElementById('showText').addEventListener('click', function() {
    let texto = document.getElementById('inputText').value
    alert(texto)
})

//Async - await
function operacionAsincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Operación completada");
        }, 5000);
    });
}

async function ejecutarOperacion() {
    console.log("Iniciando operación...");
    let resultado = await operacionAsincrona();
    console.log(resultado);
}

ejecutarOperacion();

//arrays
let frutas = ['banana', 'manzana', 'mandarina']
console.log(frutas[2])