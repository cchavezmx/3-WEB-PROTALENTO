import Nav from "../Nav"
import { useParams, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

const Personaje = () => {

  const params = useParams()  
  console.log("🚀 ~ file: index.jsx:8 ~ Personaje ~ params", params)
  const roter = useLocation()
  console.log("🚀 ~ file: index.jsx:9 ~ Personaje ~ roter", roter)
  const [persona, setPersona] = useState([])
  

  const getPersona = async () => {
    return fetch(`https://rickandmortyapi.com/api/character/${params.character}`)
    .then(res => res.json())
    .then(json => setPersona(json))    
  }

  useEffect(() => {
    getPersona()
  }, [])

  return (
    <div>
      <Nav />
      <h1>Personajes</h1>
      { params.character }
      <img src={persona.image} />
      { JSON.stringify(params.persona)}
    </div>
  )
}

export default Personaje