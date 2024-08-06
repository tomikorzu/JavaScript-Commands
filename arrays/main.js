//Shift, pop, unshift

//Consigna:
//Con todo lo aplicado las demás clases, vamos a resolver estos ejercicios
//Tarea: Resolver los ejercicios, imprimiendo al final el estado actual.
//Agregar elementos al final de un array

//ej 1
//Crea un array vacío llamado numbers.
//● Agrega los números del 1 al 5 al array.
//● Imprime el array resultante.
//● Eliminar el último elemento del array.
let numbers = []
let i
for (i = 1; i <=5; i++){
    numbers.push(i)

}
console.log(numbers)
numbers.pop()
console.log(numbers)

//ej 2
//Utiliza el array numbers del ejercicio anterior.
//● Elimina el último número del array.
//● Imprime el array resultante.
//● Agregar elementos al principio del array
numbers.pop()
console.log(numbers)
numbers.shift()

console.log(numbers)

//ej 3 
//Crea un array vacío llamado colors, agregando cada elemento al principio del array.
//● Agrega los siguientes colores al array en el siguiente orden: 'red', 'blue', 'green'.
let colors = []
colors.unshift('red', 'blue', 'green')
console.log(colors)

//ej 4
//Eliminar el primer elemento de un array:
//● Utiliza el array colors del ejercicio anterior.
//● Elimina el primer color del array.
colors.shift()
console.log(colors)

//ej 5
//Agregar múltiples elementos al final de un array:
//● Crea un array vacío llamado fruits.
//● Agrega los siguientes elementos al array: 'apple', 'banana', 'orange'.
let fruits = []
fruits.unshift('apple', 'banana', 'orange')
console.log(fruits)

//ej 6
//Eliminar múltiples elementos al final de un array:
//● Utiliza el array fruits del ejercicio anterior.
//● Elimina los últimos dos elementos del array utilizando el método pop.
fruits.pop()
fruits.pop()
console.log(fruits)

//ej 7
//Agregar múltiples elementos al principio de un array:
//● Utiliza el array fruits del ejercicio 5.
//● Agrega los siguientes elementos al principio del array: 'grape', 'kiwi'.
fruits.unshift('grape', 'kiwi')
console.log(fruits)

//ej 8
//Eliminar múltiples elementos al principio de un array:
//● Utiliza el array fruits del ejercicio anterior.
//● Elimina los primeros dos elementos del array.
fruits.shift()
fruits.shift()
console.log(fruits)

//ej 9
//Agregar un elemento específico al final de un array:
//● Utiliza el array colors del ejercicio 3.
//● Agrega el color 'yellow' al final del array.
colors.push('yellow')
console.log(colors)

//ej 10
//Eliminar un elemento específico del principio de un array:
//● Utiliza el array colors del ejercicio 9.
//● Elimina el primer color del array.
colors.shift()
console.log(colors)

//find, filter

//Desarrollar una función que reciba el nombre de un alumno, las notas de sus materias, y la nota de aprobación (4/6/7) e imprima:
//Nombre del usuario
//Cantidad de materias cursadas
//Cantidad de materias aprobadas
//Las notas de las materias aprobadas
//Cantidad de materias reprobadas
//Las notas de las materias reprobadas
//Si el alumno pasó de año (aprobó todas las materias)
//La nota más alta
//Indicar si el alumno tuvo algún 10
//Indicar si el alumno aprobó alguna materia raspando (con la nota mínima de aprobación)



function studentPassed(username, subjectNotes){
     let subjectQuantity = subjectNotes.length
     let subjectsApproved
     let subjectFailed
     let studentPassedResult
     let subjectNoteOfTenResult = false
     let subjectNoteOfSixResult = false
 
     subjectsApproved = subjectNotes.filter(function(subjectNote){
         return subjectNote >= 6
     })
     subjectFailed = subjectNotes.filter(function(subjectNote){
         return subjectNote < 6
     })
     if (subjectsApproved.length == subjectQuantity){
        studentPassedResult = true
    } else{
        studentPassedResult = false
     }
    
     let subjectNoteOfTen = subjectNotes.find(function(subjectNote){
       return subjectNote === 10
     }) 
     if (subjectNoteOfTen === 10){
        subjectNoteOfTenResult = true
     }
     let subjectNoteOfSix = subjectNotes.find(function(subjectNote){
        return subjectNote === 6
      }) 
      if (subjectNoteOfSix === 6){
         subjectNoteOfSixResult = true
      }

 
    console.log('The user name is: ' + username)
    console.log('The quantity of subject completed are : ' + subjectQuantity)
    console.log('The quantity of subject approved are : ' + subjectsApproved.length)
    console.log('the notes of subject approved are: ' + subjectsApproved)
    console.log('The quantity of subject failed are : ' + subjectFailed.length)
    console.log('The notes of subject failed are: ' + subjectFailed)
    console.log('Is the student passed the year? ' + studentPassedResult)
    console.log('Is the student got a ten in any exam of the year? ' + subjectNoteOfTenResult)
    console.log('Is the student pass razing in any exam of the year? ' + subjectNoteOfSixResult)
 
 }
 
 
 studentPassed('tomas', [3, 5, 6, 5, 8, 8], 6)

//some y every

///ejercicio 1
//Declara un array llamado pelisFavoritas con tres elementos y muéstralo en la consola.
let favoriteFilms = ['batman', 'garfield', 'iron man']
console.log(favoriteFilms)

//Ejercicio 2
//Accede y muestra en la consola el segundo elemento del array pelisFavoritas.
console.log(favoriteFilms[1])

//Ejercicio 3
//Declara un array vacío llamado libros y agrega tres elementos

let books = []
books.push('Game of thrones', 'book2', 'book3')
console.log(books)

//Ejercicio 4
//Elimina el último elemento del array libros y muéstralo en la consola.
books.pop()
console.log(books)

//Ejercicio 5
// Declara un array llamado colores con cuatro elementos y muestra su longitud en la consola
let colours = ['red', 'green', 'blue', 'black']
console.log(colours.length)

//Ejercicio 6
// Del array de colores usando anteriormente, agrega 2 elementos al inicio del mismo y muéstralo en la consola.
colours.unshift('Yellow', 'Pink')
console.log(colours)

//Ejercicio 7
// Elimina el primer elemento del array colores y muéstralo en la consola.

console.log(colours.shift())
console.log(colours)

//Ejercicio 8
// Declara un array llamado frutas con tres elementos y verifica si contiene 'Manzana'. Muestra el resultado en la consola.
let fruits3 = ['Banana', 'manzana', 'pera']
let fruits3Result = fruits3.some(function(fruit){
    return fruit === 'manzana'
})
console.log(fruits3Result)

//Ejercicio 9
// Declara un array de numeros del 1 al 15 y encuentra el primer número mayor que 3 en el array numeros.
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let numbersArrayResult = numbersArray.find(function(number){
    return number > 3
})
console.log(numbersArrayResult)

//Ejercicio 10
// Ecuentra todos los números menores que 4 en el array numeros
let numbersArrayResultNegative = numbersArray.filter(function(number){
    return number < 4
})
console.log(numbersArrayResultNegative)

//Ejercicio 11
// Declara una función llamada agregarElemento que acepte un array y un elemento como parámetros, agregue el elemento al final del array y devuelva la nueva longitud del array.

let addElement = ['Array 1']
addElement.push('Array 2')
console.log(addElement.length)

//Ejercicio 12
// Declara una función llamada eliminarPrimerElemento que acepte un array como parámetro, elimine el primer elemento del array y devuelva el elemento eliminado.

function deleteFirstElement(elementArray){
    console.log('El elemento eliminado es: ' + elementArray.shift())
}
deleteFirstElement(['First element', 'second element', 'third element', 'fourth element'])

//Ejercicio 13
// Declara una función llamada longitudArray que acepte un array como parámetro y devuelva la longitud del array mostrado en un mensaje como estee “La longitud de mi array es de [longitud]”.
let arrayLength = [1, 2,3, 4, 5, 6]

console.log('The length of my array is: ' + arrayLength.length)

//Ejercicio 14
//Declara una función llamada verificarElemento que acepte un array y un elemento como parámetros, y devuelva true si el elemento está en el array o false si no lo está.

function checkElement(element){
    let elementResult = element.some(function(elem){
        return elem === 'Parameter'
    })
    console.log(elementResult)
}
checkElement(['Parameter'])

//Ejercicio 15
// Declara una función llamada encontrarElemento que acepte un array y un elemento como parámetros, y devuelva el primer elemento del array que sea igual al elemento dado. Si no se encuentra, devuelve undefined.
function findElement(element, arrayList){
    arrayListResult = arrayList.find(function(elem){
        return elem === element
    })
    console.log(arrayListResult)
}
findElement('element first', ['element first', 'element second'])
findElement('element third', ['element first', 'element second'])

//Ejercicio 16
// Declara una función llamada filtrarArray que acepte un array y un número como parámetros, y devuelva un nuevo array con todos los elementos mayores al número dado.
function arrayFilter(arrayElement, num){
    let greaterArrayElement = arrayElement.filter(function(element){
        return element > num
    })
    console.log(greaterArrayElement)
}
arrayFilter([10, 2, 4, 5, 1, 299 ], 2)

//Ejercicio 17
// Dado un array de números, verifica si todos son mayores que cero. Devuelve en consola el resultado
let arrayNumbers = [23, 321, 43, 0 , 5]
let arrayNumbersResult = arrayNumbers.every(function(arrayNumber){
    return arrayNumber > 0
})
console.log(arrayNumbersResult)

//ejercicio 18
// Validar que todos los strings son no vacíos
let strings = ['Uno', 'Dos', 'Tres']
let stringsResult = strings.every(function(string){
    return string !== ''
})
console.log(stringsResult)

//Ejercicio 19
// Comprueba si todos los elementos en un array de strings contienen algún carácter. Devuelve en consola el resultado
let arrayString = ['uno', 'dos', 'tres', '']

let arrayStringResult = arrayString.every(function(arrayStrin){
    return arrayStrin.length >= 1
})
console.log(arrayStringResult)

//Ejercicio 20
// Confirmar que todos los estudiantes pasaron el examen:
//Comprueba si todos los estudiantes en un array tienen una calificación mayor o igual a 6. Devuelve en consola el resultado
let studentNotes = [4,7,2,1,10,9,3]
let studentNotesResult = studentNotes.every(function(studentNote){
    return studentNote >= 6
})
console.log(studentNotesResult)

//Ejercicio 21
// Verificar si todas las edades son de adultos:
//Dado un array de edades, verifica si todas las personas son mayores de 18 años.
let ages = [18, 21, 28, 65, 19]
let agesResult = ages.every(function(age){
    return age >= 18
})
console.log(agesResult)

//Ejercicio 22
// Comprobar si todos los números son divisibles por 5:
// Verificar si al menos un número en un array es mayor que 10.
let numberArray = [1, 5, 10, 15, 20]
let numberArrayResult = numberArray.every(function (num){
    return num % 5 === 0
})
let numberArrayResult2 = numberArray.some(function(num2){
    return num2 > 10
})
console.log(numberArrayResult)
console.log(numberArrayResult2)

//Ejercicio 23
// Comprobar si al menos un string en un array está vacío.
let string23 = ['Hola', 'Chau', '']
let string23Result = string23.some(function(stringEj){
    return stringEj === ''
})
console.log('Ejercicio 23 ' + string23Result)

//Ejercicio 24
// Verificar si al menos un estudiante no pasó el examen (calificación menor a 6).
let studentsNotes = [10, 6, 8, 5, 6]
let studentsNotesResult = studentsNotes.some(function(studentNote){
    return studentNote < 6
})
console.log(studentsNotesResult)

//Ejercicio 25
// Comprobar si al menos una edad en un array corresponde a un adolescente (13-17 años).
let agesArray = [19, 20, 82, 10, 14]
let agesArrayResult = agesArray.some(function(ageArray){
    return ageArray >= 13 && ageArray <= 17
})
console.log(agesArrayResult)

// Conocimientos 2

//Ejercicio 1
//Tienes dos listas de productos en tu tienda online. Combina estas listas en una sola usando lo visto anteriormente y mostrarlo por consola.
//  let electronics = ['laptop', 'phone', 'tablet']; 
//  let accessories = ['headphones', 'charger', 'case'];

let electronics = ['laptop', 'phone', 'tablet']
let accessories = ['headphones', 'charger', 'case']
let electronicsAndAccesories  = electronics + ', ' + accessories
console.log(electronicsAndAccesories)

//Ejercicio 2
// Tienes una lista de los productos más vendidos. Extrae el primero y el segundo producto usando destructuring.
// let bestSellers = ['laptop', 'phone', 'tablet', 'monitor'];

let bestSellers = ['laptop', 'phone', 'monitor']
let [first , second ,] = bestSellers
console.log(first, second)

//Ejercicio 3
// Verifica si el producto phone existe en la lista de productos, si existe, mostrar por consola un mensaje “Existe el producto [nombre del producto]”
// let saleItems = ['laptop', 'phone', 'headphones'];

let saleItems = ['laptop', 'phone', 'headphones'];
let saleItemsPhone = saleItems.some(function(saleItem){
    return saleItem === 'phone'
})
if (saleItemsPhone === true){ 
    console.log('Existe el elemento phone')
} else{
    console.log('No existe el elemento phone')
}
// Ejercicio 4
// Verifica si un producto específico está en la lista de deseos. Si existe, mostrar por consola un mensaje “El producto existe, su nombre es [nombre del producto]”
// let wishlist = ['laptop', 'phone', 'headphones'];

let wishlist = ['laptop', 'phone', 'headphones'];
let wishlistResult = wishlist.find(function(product){
    return product === 'phone'
})
if (wishlistResult === 'phone'){
    console.log('Si, el prodcto existe, su nombre es: ', wishlistResult)
} else{
    console.log('El producto no existe')
}

//Ejercicio 5
// Filtra los productos que incluya con la letra 'p' en la lista.
let products = [
    'laptop',
    'phone',
    'tablet',
    'printer', 
    'pen',
    'monitor',
    'keyboard',
    'mouse',
    'headphones',
    'camera',
    'notebook'
  ];
  console.log(products[2].length)
let productsResult = products.filter(function(product){
    return product.includes('p') === true
})  
console.log(productsResult)

//Ejercicio 6
// Escribe una función combineProductLists que tome dos listas de productos y las combine en una sola usando la sintaxis spread.

function combineProductLists(firstProducts, secondProducts){
    return [...firstProducts, ...secondProducts]
}

let firstProducts = ['laptop',
'phone',
'tablet']
let secondProducts = ['monitor',
'keyboard',
'mouse']
let combineProductListsResult = combineProductLists(firstProducts, secondProducts)
console.log(combineProductListsResult)

// Ejercicio 7 
// Crea una función getTopTwo que tome una lista de productos y devuelva los dos primeros usando destructuring.

function getTopTwo(productsGet){
    let [ firstProduct, secondProduct, ] = productsGet
    console.log(firstProduct, secondProduct)
}

getTopTwo(['laptop',
'phone',
'tablet'])

//Ejercicio 8
// Escribe una función isOnSale que verifique si algún producto de una lista de productos en oferta es un artículo específico.
//Ejemplo, si tengo una lista de productos electrónicos, y quiero que el producto en oferta sea celular, entonces ese es el que debería ser tomado en cuenta a la hora de validar dentro de nuestra función.

function isOnSale(prodctOffer, checkProduct) {
    let isOnSaleResult = prodctOffer.some(function(product){
        return product === checkProduct
    })
    if (isOnSaleResult === true){
        console.log('El producto ' + checkProduct + ' si esta en la lista')
    } else{
        console.log('El producto ' + checkProduct + ' no esta en la lista')
    }
}
isOnSale(['laptop', 'phone', 'tv'], 'tv')

//Ejercicio 9
// Crea una función areAllWordsLong que verifique si todas las palabras en una lista tienen más de tres letras.
function areAllWordsLong(words){
    let wordsResult = words.every(function(word){
        return word.length > 3
    })
    console.log('Todas las palabras tienen mas de 3 letras? ' + wordsResult)
}
areAllWordsLong(['Palabra 1', 'palabra 2', 'p3', 'palabra 4'])

//Ejercicio 10
// Crea una función areAllEven que verifique si todos los números en una lista son pares.
function areAllEven(numbers){
    let numberResult = numbers.every(function(number){
        return number % 2 === 0
    })
    console.log(numberResult)
}
areAllEven([2,2,4,6,8])

//ejercicio 11
// Escribe una función findProductWithLetter que encuentre el primer producto en la lista que contiene una letra específica.
function findProductWithLetter(productsFind){
    let checkProduct = productsFind.some(function(product){
        return product.includes('p')
    })
    if (checkProduct === true){
        let productsFindResult = productsFind.find(function (productFind){
            return productFind.includes('p')
        })
        console.log(productsFindResult)
    } else{
        console.log('Esa palabra no tiene esa letra')
    }
}
findProductWithLetter(['product1', 'product2', 'product3'])

//Ejercicio 12
//Define una función createProduct que agregue a un array el producto, pero que antes verifique si el producto ya existe en ese array
// Ejemplo de uso:
// Si el producto existe Mostrar mensaje El producto [nombre] ya existe
// Si no existe, lo agrego al array y retorno los valores.

function createProduct(products, addProduct){
    let checkProduct = products.some(function(product){
        return product === addProduct
    })
    if (checkProduct === true){
        console.log('El producto ' + addProduct + ' Ya existe')
    } else{
        products.push(addProduct)
        console.log(products)
    }
}
createProduct(['tablets', 'phone', 'laptop'], 'tv')

//Ejercicio 13
// Escribe una función arePricesInRange que compruebe si todos los precios de una lista están entre 50 y 150.
// Ejemplos:
// const prices1 = [60, 80, 120, 150];
// const prices2 = [40, 80, 120, 200];
function arePricesInRange(numbers){
    let numberResult = numbers.every(function(number){
        return number >= 50 && number <= 150
    })
    console.log(numberResult)
}
arePricesInRange([51, 80, 140, 150])

//Ejercicio 14
// Define una función formatExpensiveProducts que tome una lista de precios y agregue una etiqueta Caro a los precios superiores a 100.
// Ejemplo:
// const prices = [80, 120, 200, 90];
// ['$80', 'Caro: $120', 'Caro: $200', '$90']

function formatExpensiveProducts(prices, priceRefference){
    let formatExpensiveProductsResult = prices.map(function(price){
        if (price >= 100){
            price = priceRefference + price
        }
        return price
    })
    console.log(formatExpensiveProductsResult)
}
formatExpensiveProducts([10, 20, 110, 25000], 'Caro: ')

//Ejercicio 15
// Define una función addIfNotExists que añada un producto a una lista solo si no está ya presente.
function addIfNotExists(product, productAdded){
    if (product.includes(productAdded)){
        console.log('El producto ya existe')
    } else{
        product.push(productAdded)
        console.log('ahora los productos son: ' + product)
    }
}
addIfNotExists(['product1', 'product2', 'product3'], 'product3')

//Ejercicio 16
// Crea una función createDescriptions que tome una lista de nombres de productos y una lista de precios, y devuelva una lista de descripciones que combine ambos usando map.
// Se debe ver algo parecido a esto (La descripción puede cambiar según lo que estemos contemplando nosotros):
// ['laptop cuesta $1000', 'phone cuesta $500', 'tablet cuesta 300']
function createDescriptions(productNames, prices){
    let createDescriptionsResult = productNames.map(function(product, index){
        return product + ' cuesta ' + prices[index]
    })
    console.log(createDescriptionsResult)
}
createDescriptions(['phone', 'tv', 'tablet'], [1000, 500, 300])

//Ejercicio 17
//Crea una función addToWishlist que añada un producto a la lista de deseos solo si el producto no está ya presente y la lista de deseos tiene menos de 5 productos. Realizar validaciones correspondientes.
function addToWishlist(wishesProduct, newWish){
    if (wishesProduct.length < 5){
        wishesProduct.push(newWish)
        console.log(wishesProduct)
    } else{
        console.log('Solo pueden haber 5: ' + wishesProduct)
    }
}
addToWishlist(['iphone', 'mcbook', 'ipad', 'ball'], 'play')

//Ejercicio 18
//Define una función inventoryMessages que tome una lista de productos y una lista de cantidades en inventario, devolviendo una lista de mensajes que indiquen si cada producto está en stock o agotado.
// Ejemplo de salida:
// ['laptop está en stock con 5 unidades', 'phone está agotado', 'tablet está en stock con 3 unidades']

function inventoryMessages(products, stock){
    let inventoryMessagesResult = products.map(function(product, index){
        if (stock[index] >= 1){
            return product + ' esta en stock con ' + stock[index] + ' unidades'
        } else{
            return product + ' esta agotado'
        }
    })
    console.log(inventoryMessagesResult)
}
inventoryMessages(['rex', 'pepitos', 'chocolinas'], [0, 10, 20])