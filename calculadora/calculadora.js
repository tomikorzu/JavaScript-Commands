//dom Document Object Model

//getElementById : selecciona elemento por ID
//getElementByTagName : selecciona todos los elementos con el nombre de la etiqueta
//querySelector  => Ejemplos
const tituloPrincipal = document.querySelector('h1')
console.log('<br>' + 'El titulo principal es: ' + tituloPrincipal.textContent)

const pClass = document.querySelector('.parrafoClase')
console.log('<br>' + 'El texto del parrafo clase es: ' + pClass.textContent)

const pId = document.querySelector('.parrafoId')
console.log('<br>' + 'El texto del parrafo id es: ' + pId.textContent)
console.clear()
//inputs

let op1 = document.getElementById('input1');
let op2 = document.getElementById('input2');
let op3 = document.getElementById('input3');
const btnCalc = document.getElementById('calc');
const btnReset = document.getElementById('reset')
let results = document.getElementById('results');
console.log(results.value)

function calcular() {
    console.clear()
    console.log('Calculando...');
    
    let num1 = parseFloat(op1.value);
    let num2 = parseFloat(op3.value);
    let operador = op2.value;
    let resultado = 0;
    let valido1 = false;
    let valido2 = false;
    let valido3 = false;

    // Validar primer número
    if (isNaN(num1) || op1.value === '') {
        console.log('Error: Ingrese el operador 1');
    } else {
        valido1 = true;
        console.log('Operador 1 válido');
    }

    // Validar operador
    if (operador === '+' || operador === '-' || operador === '*' || operador === '/') {
        valido2 = true;
        console.log('Operador válido');
    } else {
        console.log('Error: Ingrese el signo de operación correspondiente');
    }

    // Validar segundo número
    if (isNaN(num2) || op3.value === '') {
        console.log('Error: Ingrese el operador 2');
    } else {
        valido3 = true;
        console.log('Operador 2 válido');
    }

    if (valido1 && valido2 && valido3) {
        switch (operador) {
            case '+': 
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                resultado = num1 / num2;
                break;
        }
        
        // Mostrar el resultado en el input 'results'
        results.value = 'El resultado es: ' + resultado;
    } else {
        results.value = '';
    }
}
function reset(){
    console.clear()
    op1.value = ''
    op2.value = ''
    op3.value = ''
    results.value = ''
}

// Agregar el evento click al botón
btnCalc.addEventListener('click', calcular);
btnReset.addEventListener('click', reset);
