let nombre = "sarlos"
// index      0 1 2 3 4 5          
let apellido = "Chávez"
let edad = "37"

// VARIABLES o Funciones
// escribir todo notación camelCase
// no escribir acentos, no ñ, no carácteres especiales
// debe ser nombrada con el contenido que va almacenar
// let y const 

// string concatenar

// para unir dos cadenas de string con el simbolo +
// console.log(nombre + " " + apellido)


// un template string
// alt + 96 => backtit
// usar backtit y dentro de un ${} se colocan las variables

// console.log(`Hola soy ${nombre} ${apellido} mi edad es ${edad}`)

// console.log("Hola soy" + " " + nombre + " " + apellido + " " + "mi edad es" + " " + edad)

// metodos => funcion y propiedades => datos estaticos 

// numero de caracteres de una string incluye los espacios
console.log("Hola mundo".length)
console.log(nombre.length)
console.log("".length)

// typeof nos permite ver el tipo de valor de una variable
// tipos de datos primitivos, string, numbers, undefined, null
console.log(typeof nombre)

// split, es un metodo
// yo puedo convertir una cadena de caracters en un array
let listaFrutas = "uvas, melón, sandía, plátano"
console.log(listaFrutas.split(","))

// array es "contenedor", objetos, strings, numeros

// indexOf lastIndexOf
// retorna la posicion de la letra dentro de la cadena de texto
// cuando el metodo indexOf retorne un -1 la letra no existe
// en la cadena de texto
// nombre = "Carlos"
// busca desde el primer elemento de la izquierda
// case sensitive
console.log(nombre.indexOf('s'))

// busca desde el primer elemento de la derecha
console.log(nombre.lastIndexOf("s"))

// toLowerCase
console.log("HOLA AMIGOS".toLowerCase())

// toUpperCase
console.log("hola amigos".toUpperCase())


console.log("Azul".toLowerCase())
console.log("azul".toLowerCase())
console.log("AZUL".toLowerCase())
console.log("AzUl".toLowerCase())

console.log(" Azul".trim())

// Elimina el primer espacio, o el final
// camelCase
console.log(" Azúl ".trim().toLowerCase())

// includes
// boolean si la letra existe dentro del la cadeba de texto
console.log("Ámerica".includes("p"))



// startsWith // endsWith
// Boolean 
console.log("Ámerica".startsWith("A"))

// regex, match, matchAll