import Nav from "../Nav"
import { useParams } from 'react-router-dom'

const Contacto = () => {

  const params = useParams()
  console.log("🚀 ~ file: index.jsx:7 ~ Contacto ~ params", params)

  return (
    <div>
      <Nav />
      <h1>Contacto</h1>
      { params.id }
    </div>
  )
}

export default Contacto