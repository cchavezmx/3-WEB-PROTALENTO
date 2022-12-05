import axios from 'axios'
// top level await

const pokemonDetail = async (url) => {
  const response = await axios.get(url)
  if (response.status === 200) {
    return response.data
  } else {
    return {} // undefined controlamos la respuesta
  }
}

const wrapper = document.querySelector('#wrapper')

const getAllPokemones = async () => {
  const pokemones = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=30&offset=50')
  // { results: [{ ...pokemones }, { name: 'pikachu', url: "alsjdlajsdlja"  } ... 20 ]}
  if (pokemones.status === 200) {
    // segunda consulta
    const test = pokemones.data.results // arreglo con 20 resultados
    // const testDetail = await pokemonDetail(test.url)
    // console.log(testDetail)
    // crear una mega consulta
    // arreglo de funciones asincronas
    const arrelogPromises = test.map(async(item) => await pokemonDetail(item.url))
    // Promise.all Recibe como parametro un arreglo de promesas
    // si se necesita for await of****
    Promise.allSettled(arrelogPromises)
    .then(response => {
      // arreglo con el objeto de la respuesta
      // TAREA MAP
      // transformar estos datos a un objeto mas sencillo { name: 'asdas', img: 'asdasd', typo: "" } 
      const valores = response.map((item) => item.value)
      const pokemones = valores.map(pokemon => {
        return {
          name: pokemon.name,
          img: pokemon.sprites.other["official-artwork"].front_default,
          stats: pokemon.stats
        }
      })
      console.log(pokemones)
      pokemones.forEach((pokemon) => {
         const card = document.createElement('div')
         card.innerHTML = `
          <div id="card" class="pokemon-card">
            <h5>${pokemon.name}</h5>
            <img src="${pokemon.img}" alt="imagen del pikachuc" />
            <div class="stats-card">
              <span>hp<strong>35</strong></span>
              <span>attack<strong>55</strong></span>
              <span>defense<strong>40</strong></span>
            </div>
          </div>
         `
         wrapper.appendChild(card)
      })
    })    
  }  
}

getAllPokemones()