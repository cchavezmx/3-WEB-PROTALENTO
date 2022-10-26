const alumnos = {
  laura: 10,
  raul: 7,
  marta: 9,
  saul: 5,
  jorge: 8,
  valeria: 8,
  carlos: 4,
}
// metodos de Arary map, find, filter, for, forEach, flat, agrupar
// Object.values  + Object.keys  => Object.entries 
// Object.values(alumnos)

//Object.keys
// Object.keys(alumnos)

// Object.entries // Array de Arrays
// Object.entries(alumnos)

// 1 obtener el promedio del grupo, + el resultado debe retornarse con dos decimales 7.25 // funcion debe servir para cualquier tipo de arreglo.
// const let => var❌
const calificaciones = Object.values(alumnos)
const sum = calificaciones.reduce((acc, val) => acc + val, 0)
const promedio = sum / Object.values(alumnos).length
console.log(promedio.toFixed(2))

// [
//   [ 'laura', 10 ],
//   [ 'raul', 7 ],
//   [ 'marta', 9 ],
//   [ 'saul', 5 ],
//   [ 'jorge', 8 ],
//   [ 'valeria', 8 ],
//   [ 'carlos', 4 ]
// ]
// map retorna un arreglo
// 2 crea un arreglo con los alumnos que no pasaron el curso // +usa Object.entries [{saul: 5}, {carlos: 4}]
const alumnosReprobados = []
Object.entries(alumnos).forEach(([key, value]) => {
    if (value <= 5){
      alumnosReprobados.push({ [key]: value })
    }    
})

console.log(alumnosReprobados)

Object.entries(alumnos).filter(([alumno, calificacion]) => {
  if (calificacion <= 5) return { [alumno]: calificacion }
})





