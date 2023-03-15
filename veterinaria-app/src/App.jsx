import './App.css'
import { useState } from 'react'


function App() {  

  const [loading, setLoading] = useState(false)  
  const hanlderSubmit = (e) => {
    e.preventDefault()
    const { nombre, raza, edad, tipo } = e.target.elements
    console.log("🚀 ~ file: App.jsx:13 ~ hanlderSubmit ~ nombre:", nombre)
    if (nombre.value === ''){
      alert('error')
      return 
    }
    setLoading(true)
    // los elementos html
    const data = {
      nombre: nombre.value,
      raza: raza.value,
      edad: edad.value,
      tipo: tipo.value
    }

    console.log({ data })
    fetch('http://localhost:4001/api/v1/mascotas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      if (res.message === 'Se añadio correctamente') {
        e.target.reset()
        setLoading(false)
      }
    })
    .catch(error => console.log(error))
  }

  // const [isHembra, setIsHembra] = useState(false)

  return (
    <div className="App">
      <h1 className='is-size-3'>Veterinaria APP</h1>
      <main>
        <form onSubmit={hanlderSubmit}>
        <input 
          name="nombre" 
          placeholder='Nombre de la mascota' 
          type="text" className='input mt-1' 
        />
        <input 
          name="raza" 
          placeholder='Raza' 
          type="text" className='input mt-1' 
        />
        <input 
          name="edad" 
          placeholder='Edad' 
          type="number" className='input mt-1' 
        />
        <input 
          name="tipo" 
          placeholder='Tipo' 
          type="text" className='input mt-1' 
        />
        {/* <select className='select mt-1'
          onChange={(e) => {
            if (e.target.value === 'hembra') {
              setIsHembra(true)
              return
            }

            setIsHembra(false)
          }}        
        >
          <option value="macho">Macho 2</option>
          <option value="hembra">Hembra 2</option>
        </select>
        {
          isHembra && (
            <input 
            name="tipo" 
            placeholder='Si esta premiada' 
            type="text" className='input mt-1' 
          />
          )
        }
        <br></br> */}
        <button disabled={loading} type='submit' className='button is-primary mt-1'>
          Añadir mascota
        </button>
        <button type='reset' className='button is-info mt-1 ml-1'>
          Cancelar
        </button>
        </form>
        {
          loading && <div class="lds-hourglass"></div>
        }
      </main>
    </div>
  )
}

export default App
