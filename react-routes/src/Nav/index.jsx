import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>          
        </Link>
        <Link to="/contacto" >
          <li>Contacto</li>
        </Link>
        <Link to="/personaje/45" state={{ some: "value" }}>
          <li>Personaje</li>
        </Link>
      </ul>
    </nav>
  )
}


export default Nav