import axios from 'axios'
const url = 'https://dragon-ball-super-api.herokuapp.com/api/characters'
// async await

const personajes = async () => {
  // fetch o axios
  // no se necesitan librerias, podria hacer fetch de casi cualquer cosa
  // es complicado de entender, excel, pdf, imagenes
  // headers
  const all = await fetch(url)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err))
    .finally(() => console.log('hola'))

  console.log(all, 'XD')
}

// personajes()

// axios
const personalesSelect = document.querySelector('#selectPersonajes')
const personajesAxios = async () => {
  const all = await axios.get(url)
    .then(({ data }) => {
      console.log(data)
      data.forEach(personaje => {
        const option = document.createElement('option')
        option.value = personaje.name
        option.textContent = personaje.name
        personalesSelect.appendChild(option)
      })
    })
  return all
}

personajesAxios()

personalesSelect.addEventListener('change', async (e) => {
  const personajeActual = e.target.value
  const personajeURL = `https://dragon-ball-super-api.herokuapp.com/api/characters/${personajeActual}`
  console.log(personajeURL)
  await axios.get(personajeURL)
    .then(res => {
      console.log('🚀 ~ file: main.js ~ line 45 ~ personalesSelect.addEventListener ~ res', res)
      const img = document.querySelector('#tarjeta img')
      const bodyCard = document.querySelector('#tarjeta h2')
      bodyCard.textContent = res.data.transform ?? 'No tiene transformación'
      console.log(img)
      img.src = res.data.imageUrl
    })
  // pintar la imagen y propiedades de cada personaje
  // find de ese objeto global
})

const buscador = document.querySelector('#search-name')
console.log('🚀 ~ file: main.js ~ line 55 ~ buscador', buscador)
// https://developer.mozilla.org/es/docs/Web/Events
buscador.addEventListener('change', (e) => {
  // selects, inputs
  console.log(e.target.value)
})
