// buscar etiquetas
// querySeletor, querySelectorAll sintaxis CSS
// let h1Tradicional = document.getElementById('title')
// console.log(h1Tradicional)
// innerText e innerHTML

console.log(document)

// retorna el primer elemento que encuentra con lo que estoy buscando
let elementoH1 = document.querySelector('#title');

// document es una fotografia. estático representatitivo de ese momento en el html
// console.log(document)
// querySelectorAll retorna un NodeList (como un array)
let elemntosLI = document.querySelectorAll('li')

// for, forEach, for Of, map
for (let i = 0; i < elemntosLI.length; i++) {
  elemntosLI[i]
}


let buscador = document.querySelector("#buscador")
// retorna un array de atributos que tienen un elemento
// buscador.removeAttribute('disabled')
buscador.setAttribute('disabled', '')
buscador.setAttribute('class', 'boton-rojo')
console.log(buscador.getAttributeNames())
// para validar en alguna logica dentro de un if
console.log(buscador.hasAttribute('data'))


elementoH1.innerHTML = '<smal>Que paso</small>'

let ejemplo2 = document.querySelector('h2')
ejemplo2.innerText = 'Probando innerText'

// crear etiquetas
let imagen = document.createElement('img')
imagen.src = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1199242002.jpg?crop=0.666xw:1.00xh;0.201xw,0&resize=980:*'
imagen.alt = 'foto de gatito'
// class JS palabra reservada
imagen.classList = 'foto_demo'


document.body.appendChild(imagen)
console.log(imagen)
// necesitamos donde "anclar" la imagen
let ancla = document.querySelector('#imagenes_content')
ancla.appendChild(imagen)

// ancla.removeChild(imagen)
// for
// map
// asyncronismo
// SSR