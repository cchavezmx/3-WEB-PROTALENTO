// alert('hola amigos')

function enviar(nombre, correo) {
  alert(`Hola ${nombre} tu correo es ${correo}`)
}

// 1 saber que elemento queremos escuchar querySelector
const boton = document.querySelector('#botonEnviar')
const inputName = document.querySelector('#nombre')
const inputCorreo = document.querySelector('#email')

// 2 ejecutar el addEventListener para detectar alguna accion del usuario
// 1er parametro es saber el tipo de accion
// funciones anonima, callback
boton.addEventListener('click', function(e){
  const nombre = inputName.value
  const correo = inputCorreo.value
  return enviar(nombre, correo)
})

inputName.addEventListener('change', function(e){
  // elemento en su estado actual
  console.log(e)
   const nombre = e.target.value
   console.log(nombre.length)
  if (nombre.length < 3 ){
    alert('El nombre debe tener mas de 3 letras')
  }
})

