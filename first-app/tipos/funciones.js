let numero1 = 25;
let numero2 = 50;
//una funcion no hace nada hasta que la llaman
function saludar() {
    console.log("Hola mundo");

}

saludar();

function suma() {
    return numero1 + numero2;
}

let resultado = suma();

console.log(resultado) //option 1
console.log(suma()) //option 2