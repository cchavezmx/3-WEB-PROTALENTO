// metodos de array
// map, filter, find, 
4
// sumemos 5 puntos a cada elemento del arreglo
const numeros = [10, 20, 30]
          //       0         1        2      
// for, for of
// map regresa un arreglo de elementos
numeros.map(function(valor, index){
  console.log(index, valor)
  return valor + 5
})

numeros.map(numero => numero + 5)

function sumarArraglo(){
  const resultados = []  
  for(let i = 0; i < numeros.length; i++){
      resultados.push(numeros[i] + 5)      
  }
    
  return resultados
}

sumarArraglo()

// funciones flecha
// 
function numeros(){
  return ("hola")
}
numeros()

// return impicito
const numerosFlecha = () => console.log('Hola')
numerosFlecha()


// return explicito
// destructuracion objetos o arreglos
const user = {
  name: "Pedro",
  password: "5678",
  tuDinero: "10000",
  tarjetas: {
    "pricipal": "0056478965",
    "esposa": {
      "principal": "1265442"
    }
  }
}

// const { password, ...restOfElements } = user
// console.log(restOfElements)

// const user = {
//   nombre: "Juan Pérez",
//   email: "juan@email.com",
//   cuenta: 2,
//   password: "1234",
//   saldo: 1000,
//   log: [
//     {
//       fecha: new Date(),
//       monto: 100,
//       type: "deposito"
//     }
//   ]
// }

// const { password, email, ...restOfElements } = user
// console.log({ email, ...restOfElements})


// metodos de array
// map, filter, find, 

// sumemos 5 puntos a cada elemento del arreglo
const usuariosCajero = [
  {
    name: "Carlos",
    password: "1234",
    tuDinero: "1000",    
  },
  {
    name: "Pedro",
    password: "5678",
    tuDinero: "10000"
  }
]
          
// Crea un arreglo de el nombre de el cliente y su Dinero
// mutabilidad*** mapear un objeto
// reglas de buenas practicas, es que cada linea no supere los 100 caractes
usuariosCajero.map((usuario) => {
  // destructuracion solo es con objetos o arreglos
  const { name, tuDinero } = usuario
  // cuando la variable de llave y valor tienen el mismo nombre
  return { name, tuDinero }
})


// filter y find 
// filter retorna un arreglo de los elementos que encontro
// usuariosCajero.filter((item) => item.id === '0001')

// CREA UN ARREGLO CON LOS USUARIOS QUE VIVAN EN COLOMBIA
// usuariosCajero.filter((item) => item.city === 'COL')

// find retorna el primer elemento que coincide con la busqueda y en forma Objeto
// usuariosCajero.find((item) => item.city === 'COL')


const calificaciones = [10, 9, 8, 7, 4, 3, 2]
// NO ES FACIL DE LEER Y ENTENDER, NO ES TAN OPTIMO CON ARREGLOS GRANDES
// SE OCUPA NORMALMENTE ARA 
// aplanar array metodo flat


// parametro despues de la coma => inicializador
calificaciones.reduce((acc, currentVal) => acc + currentVal, 100)
// vuleta 0

// ANTES DE USARLO EVALUA SI ES NECESARIO COMPLICAR TU CODIGO!!!