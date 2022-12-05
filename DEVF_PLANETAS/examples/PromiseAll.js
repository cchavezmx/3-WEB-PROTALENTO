const keyPlanetas =  [
  "45l1h8dab43b",
  "75oii1s99r6e",
  "9jun2xna6ig8",
  "bo6209to463g",
  "cgk97im24nbi",
  "dzvlvhsr344i",
  "j2zfgarv8a5y",
  "zmxk1zx92lo8"
]


const getAllPlanets = async () => {

  const promisePlanetKey = async (key) => {
    const planetInfo = new Promise((resolve, reject) => {
       return fetch(`https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/${key}`, {
         method: 'GET',
         headers: {
           'X-RapidAPI-Key': '20833e1faemsh1ac4de30e1e813dp14d672jsnfcbb2e631bed',
           'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
         }
       })
       .then(res => res.json())
       .then(json => resolve(json))
   })
 
   return planetInfo
 }
  
 //construimos un arreglo basados en la "plantila" getAllPlanets
 const promesas = keyPlanetas.map(keyPlanet => promisePlanetKey(keyPlanet))

 // Promise.all  // Promise.allSettled
//  diferencia es que el allSettled no se rompe si una promesa falla y te entrega en el resultado un esatus de exito
  return Promise.allSettled(promesas)
 .then(res => {
   console.log(res, 'arreglo de promesas')
 })

} 


getAllPlanets()