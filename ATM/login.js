const usuariosBD = [
  {
    nombre: "Carlos Chávez",
    email: "cchavezmx@outlook.com",
    cuenta: 1,
    password: "1234",
    saldo: 1000,
    log: []    
  },
  {
    nombre: "Juan Pérez",
    email: "juan@email.com",
    cuenta: 2,
    password: "1234",
    saldo: 1000,
    log: [
      {
        fecha: new Date(),
        monto: 100,
        type: "deposito"
      }
    ]
  }
]


// caputar datos del formulario
// que validar que las credenciales sean correctas
// si => redireccionar a la pagina de inicio
// no => mostrar mensaje
const error = document.querySelector("#error_login") 
const input = document.querySelector('input');
const form = document.querySelector("#login")
// para eliminar mensaje de error y limpiar el input
input.addEventListener('focus', function() {
  if (!error.classList.contains('hidden')){
    error.classList.add("hidden");
    form.reset();
  }
})

form.addEventListener('submit', function(e){
  e.preventDefault();
  const data = new FormData(form)
  // Object.key Object.value, Object.entries.
  // map => retoran un arreglo
  // forEach, for of => for of await
  const { email: loginEmail, password: loginPassword } = Object.fromEntries(data)  
  console.log({ loginEmail, loginPassword })
  // iterar dentro de la base de datos para saber si las credenciales son validas
  // si => redireccionamos y guardamos el objeto sin contraseña dentro del localStorage
  // no => mandamos el mensaje de error

  // iterar el objeto de la base de datos y en cada iteracion comprobar el usuario y la contaseña
  for (const usuarioBD of usuariosBD) {
    const { email, password, ...restOfElements } = usuarioBD
    console.log({ email, password })
    if (email === loginEmail && password === loginPassword) {
      window.localStorage.setItem('user', JSON.stringify({ ...restOfElements, email }))
      window.location.href = '/atm.html'     
      break;
    } else {
      error.classList.remove('hidden')
    }
  }

  // con filter o find buscar si existe el correo 
  // si existe => comprarmos con la contraseña // si es correcta => redirecion y guardamos // no mandamos el mensaje de error
  // no existe => mandamos el mensaje de error
})
