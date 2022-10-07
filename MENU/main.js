// PRINCIPIOS SOLID
// COMO CONSERVAR EL ESTADO DE LAS COSAS 

const menu = document.querySelector('#menu')
const nav = document.querySelector('nav')


menu.addEventListener('click', function(){
  const showMenu = nav.hasAttribute('class')
  // si tiene la clase
  if (showMenu) {
    // se la quitamos
    nav.removeAttribute('class')
  } else {
    // se la añadimos
    nav.setAttribute('class', 'show_menu')
  }

})

const elementosA = document.querySelectorAll('a')
// console.log(elementosA)
// for, forEach o forOf
// for (let i = 0; i < elementosA.length; i++) {
//   // mutabilidad
//   console.log(elementosA[i])
// }

// QUEDA VES QUE DEMOS CLICK A UN ELEMENTO QUITAR ALGUN ESTILO ANTERIOR

elementosA.forEach(function(elementoA){
  elementoA.addEventListener('click', function(){    
      const showMenu = elementoA.hasAttribute('class')      
      // si tiene la clase
      if (showMenu) {
        // se la quitamos
        elementoA.removeAttribute('class')
      } else {
        // se la añadimos
        elementoA.setAttribute('class', 'btn_active')
      }
  })
})

// en el forEach se esta ejecutando por cada elemento a que hay en el codigo
// la siguiente funcion

// const btnInicio = document.querySelector('#inicio')
// btnInicio.addEventListener('click', function(){
//   const showMenu = btnInicio.hasAttribute('class')
//   // si tiene la clase
//   if (showMenu) {
//     // se la quitamos
//     btnInicio.removeAttribute('class')
//   } else {
//     // se la añadimos
//     btnInicio.setAttribute('class', 'btn_active')
//   }

// })
